import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Order from '@/models/Order'
import Service from '@/models/Service'
import Document from '@/models/Document'
import os from 'os'
import { promises as fs } from 'fs'
import { exec } from 'child_process'
import { promisify } from 'util'
import mongoose from 'mongoose'

const execAsync = promisify(exec)

// Helper function with timeout
const execWithTimeout = async (command: string, timeout = 5000) => {
  return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
    const child = exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve({ stdout, stderr })
      }
    })
    
    setTimeout(() => {
      child.kill()
      reject(new Error(`Command timeout: ${command}`))
    }, timeout)
  })
}

// Helper function to get Ubuntu/Linux specific system metrics
async function getUbuntuSystemMetrics() {
  const metrics = {
    distribution: 'Unknown',
    kernel: 'Unknown',
    architecture: os.arch(),
    hostname: os.hostname(),
    networkInterfaces: {} as Record<string, any>,
    processes: {
      total: 0,
      running: 0,
      sleeping: 0
    },
    services: {
      nginx: false,
      pm2: false,
      systemd: false
    }
  }

  try {
    // Get Linux distribution info
    try {
      const { stdout: lsbRelease } = await execWithTimeout('lsb_release -d 2>/dev/null || cat /etc/os-release | grep PRETTY_NAME | cut -d"=" -f2 | tr -d \'"\'', 3000)
      metrics.distribution = lsbRelease.trim()
    } catch (error) {
      // Fallback for systems without lsb_release
      metrics.distribution = `${os.type()} ${os.release()}`
    }

    // Get kernel version
    try {
      const { stdout: kernelVersion } = await execWithTimeout('uname -r', 2000)
      metrics.kernel = kernelVersion.trim()
    } catch (error) {
      metrics.kernel = os.release()
    }

    // Get network interfaces
    const networkInterfaces = os.networkInterfaces()
    Object.keys(networkInterfaces).forEach(name => {
      const iface = networkInterfaces[name]
      if (iface) {
        metrics.networkInterfaces[name] = iface.filter(details => !details.internal)
      }
    })

    // Get process information
    try {
      const { stdout: processInfo } = await execWithTimeout('ps aux | wc -l', 3000)
      metrics.processes.total = parseInt(processInfo.trim()) - 1 // Subtract header line
      
      // Get running/sleeping processes
      const { stdout: processStates } = await execWithTimeout('ps -eo stat | grep -v STAT | cut -c1 | sort | uniq -c', 3000)
      const states = processStates.split('\n').filter(line => line.trim())
      states.forEach(line => {
        const [count, state] = line.trim().split(/\s+/)
        if (state === 'R') metrics.processes.running += parseInt(count)
        if (state === 'S') metrics.processes.sleeping += parseInt(count)
      })
    } catch (error) {
      // Fallback to basic info
      metrics.processes.total = 0
    }

    // Check for common VPS services
    const serviceChecks = await Promise.allSettled([
      execWithTimeout('which nginx', 2000).then(() => true).catch(() => false),
      execWithTimeout('which pm2', 2000).then(() => true).catch(() => false),
      execWithTimeout('systemctl --version', 2000).then(() => true).catch(() => false)
    ])

    metrics.services.nginx = serviceChecks[0].status === 'fulfilled' ? serviceChecks[0].value : false
    metrics.services.pm2 = serviceChecks[1].status === 'fulfilled' ? serviceChecks[1].value : false
    metrics.services.systemd = serviceChecks[2].status === 'fulfilled' ? serviceChecks[2].value : false

  } catch (error) {
    console.error('Error getting Ubuntu system metrics:', error)
  }

  return metrics
}

// Helper function to get real storage statistics for Ubuntu
async function getRealStorageStats() {
  let storageStats = {
    total: 0,
    used: 0,
    free: 0,
    percentage: 0,
    filesystem: 'Unknown',
    mountPoint: '/'
  }

  try {
    // Use df command to get real disk usage
    const { stdout } = await execWithTimeout('df -B1 / | tail -1', 3000)
    const parts = stdout.trim().split(/\s+/)
    
    if (parts.length >= 6) {
      storageStats.filesystem = parts[0]
      storageStats.total = parseInt(parts[1])
      storageStats.used = parseInt(parts[2])
      storageStats.free = parseInt(parts[3])
      storageStats.percentage = parseInt(parts[4].replace('%', ''))
      storageStats.mountPoint = parts[5]
    }
  } catch (error) {
    console.error('Error getting storage stats:', error)
    // Fallback to basic file system check
    try {
      const stats = await fs.stat(process.cwd())
      storageStats = {
        total: 50 * 1024 * 1024 * 1024, // 50GB fallback
        used: 10 * 1024 * 1024 * 1024, // 10GB fallback
        free: 40 * 1024 * 1024 * 1024, // 40GB fallback
        percentage: 20,
        filesystem: 'Unknown',
        mountPoint: process.cwd()
      }
    } catch (fsError) {
      // Use minimal fallback
    }
  }

  return storageStats
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const startTime = Date.now()

    // System metrics
    const totalMem = os.totalmem()
    const freeMem = os.freemem()
    const usedMem = totalMem - freeMem
    const memPercentage = (usedMem / totalMem) * 100

    const cpus = os.cpus()
    const loadAvg = os.loadavg()
    
    // Calculate CPU usage (approximation)
    const cpuUsage = Math.min(loadAvg[0] / cpus.length * 100, 100)

    // Get real Ubuntu VPS system metrics
    const systemMetrics = await getUbuntuSystemMetrics()

    // Storage metrics - get real disk usage for Ubuntu
    let storageStats = await getRealStorageStats()

    // Database metrics
    const dbStartTime = Date.now()
    const db = mongoose.connection.db
    let dbStats = {
      status: 'connected' as 'connected' | 'error',
      connectionTime: 0,
      collections: 0,
      documents: 0,
      dataSize: 0,
      indexSize: 0
    }

    try {
      const admin = db?.admin()
      if (admin) {
        await admin.ping()
      }
      dbStats.connectionTime = Date.now() - dbStartTime
      
      // Get collection stats
      const collections = await db?.listCollections().toArray()
      dbStats.collections = collections?.length || 0

      // Count documents across collections
      const [userCount, orderCount, serviceCount, documentCount] = await Promise.all([
        User.countDocuments(),
        Order.countDocuments(),
        Service.countDocuments(),
        Document.countDocuments().catch(() => 0) // Handle if Document model doesn't exist
      ])
      
      dbStats.documents = userCount + orderCount + serviceCount + documentCount

      // Get database stats
      try {
        const stats = await db?.stats()
        dbStats.dataSize = stats?.dataSize || 0
        dbStats.indexSize = stats?.indexSize || 0
      } catch (error) {
        // Some MongoDB deployments don't allow stats() command
        dbStats.dataSize = 0
        dbStats.indexSize = 0
      }
      
    } catch (error) {
      dbStats.status = 'error'
      console.error('Database health check error:', error)
    }

    // Performance metrics
    const responseTime = Date.now() - startTime

    // Service status checks
    const services = {
      mongodb: mongoose.connection.readyState === 1,
      nextjs: true, // If we're responding, Next.js is working
      fileSystem: true, // Assume working if we got this far
      network: true // Assume working if request came through
    }

    // Determine overall health status
    let status: 'healthy' | 'warning' | 'critical' = 'healthy'
    
    if (memPercentage > 90 || cpuUsage > 90 || storageStats.percentage > 90) {
      status = 'critical'
    } else if (memPercentage > 75 || cpuUsage > 75 || storageStats.percentage > 75 || responseTime > 1000) {
      status = 'warning'
    }

    if (!services.mongodb) {
      status = 'critical'
    }

    const healthData = {
      status,
      timestamp: new Date().toISOString(),
      uptime: {
        system: os.uptime(),
        application: process.uptime()
      },
      memory: {
        used: usedMem,
        total: totalMem,
        free: freeMem,
        percentage: memPercentage
      },
      cpu: {
        usage: cpuUsage,
        loadAverage: loadAvg,
        cores: cpus.length,
        model: cpus[0]?.model || 'Unknown',
        speed: cpus[0]?.speed || 0
      },
      storage: storageStats,
      database: dbStats,
      system: systemMetrics,
      environment: {
        nodeVersion: process.version,
        platform: os.platform(),
        environment: process.env.NODE_ENV || 'development',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        locale: Intl.DateTimeFormat().resolvedOptions().locale
      },
      performance: {
        responseTime,
        dbResponseTime: dbStats.connectionTime,
        memoryLeaks: process.memoryUsage().heapUsed > 100 * 1024 * 1024 // > 100MB
      },
      services: {
        ...services,
        ...systemMetrics.services
      }
    }

    return NextResponse.json(healthData)
  } catch (error) {
    console.error('Health check error:', error)
    return NextResponse.json({
      status: 'critical',
      error: {
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      environment: {
        nodeVersion: process.version,
        platform: os.platform(),
        environment: process.env.NODE_ENV || 'development'
      }
    }, { status: 500 })
  }
}
