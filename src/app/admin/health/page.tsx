"use client"

import { useState, useEffect } from "react"
import { RefreshCw, Server, Database, HardDrive, Cpu, MemoryStick, Clock, CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"

interface SystemHealth {
  status: 'healthy' | 'warning' | 'critical'
  timestamp: string
  uptime: {
    system: number
    application: number
  }
  memory: {
    used: number
    total: number
    percentage: number
    free: number
  }
  cpu: {
    usage: number
    loadAverage: number[]
    cores: number
    model?: string
    speed?: number
  }
  storage: {
    used: number
    total: number
    percentage: number
    free: number
    filesystem?: string
    mountPoint?: string
  }
  database: {
    status: 'connected' | 'disconnected' | 'error'
    connectionTime: number
    collections: number
    documents: number
    indexSize: number
    dataSize: number
  }
  system?: {
    distribution: string
    kernel: string
    architecture: string
    hostname: string
    networkInterfaces: Record<string, unknown>
    processes: {
      total: number
      running: number
      sleeping: number
    }
    services: {
      nginx: boolean
      pm2: boolean
      systemd: boolean
    }
  }
  environment: {
    nodeVersion: string
    platform: string
    environment: string
    timezone?: string
    locale?: string
  }
  performance: {
    responseTime: number
    dbResponseTime: number
    memoryLeaks: boolean
    clientResponseTime?: number
  }
  services: {
    mongodb: boolean
    nextjs: boolean
    fileSystem: boolean
    network: boolean
    nginx?: boolean
    pm2?: boolean
    systemd?: boolean
  }
}

export default function HealthPage() {
  const [healthData, setHealthData] = useState<SystemHealth | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null)

  useEffect(() => {
    fetchHealthData()
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchHealthData, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchHealthData = async (isManualRefresh = false) => {
    if (isManualRefresh) {
      setRefreshing(true)
    }
    
    try {
      const startTime = Date.now()
      const response = await fetch('/api/admin/health', {
        headers: { 'Cache-Control': 'no-cache' }
      })
      
      if (response.ok) {
        const data = await response.json()
        const responseTime = Date.now() - startTime
        
        // Add client-side response time
        data.performance.clientResponseTime = responseTime
        
        setHealthData(data)
        setLastRefresh(new Date())
        
        if (isManualRefresh) {
          toast.success('Health data refreshed successfully')
        }
      } else {
        throw new Error('Failed to fetch health data')
      }
    } catch (error) {
      console.error('Error fetching health data:', error)
      toast.error('Failed to fetch system health data')
    } finally {
      setLoading(false)
      if (isManualRefresh) {
        setRefreshing(false)
      }
    }
  }

  const handleRefresh = () => {
    fetchHealthData(true)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      case 'critical':
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800'
      case 'critical':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${days}d ${hours}h ${minutes}m`
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <div className="text-lg">Loading system health...</div>
          </div>
        </div>
      </div>
    )
  }

  if (!healthData) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Failed to Load Health Data</h2>
          <p className="text-muted-foreground mb-4">Unable to retrieve system health information</p>
          <Button onClick={handleRefresh}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">System Health</h1>
          <p className="text-muted-foreground">
            Monitor system resources and performance
            {lastRefresh && (
              <span className="ml-2">
                • Last updated: {lastRefresh.toLocaleTimeString()}
              </span>
            )}
          </p>
        </div>
        <Button 
          onClick={handleRefresh} 
          disabled={refreshing}
          variant="outline"
          size="sm"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>

      {/* Overall Status */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getStatusIcon(healthData.status)}
            System Status
            <Badge className={getStatusColor(healthData.status)}>
              {healthData.status.toUpperCase()}
            </Badge>
          </CardTitle>
          <CardDescription>
            Overall system health and performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">{formatUptime(healthData.uptime.system)}</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div className="text-center">
              <Server className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{healthData.performance.responseTime}ms</div>
              <div className="text-sm text-muted-foreground">API Response Time</div>
            </div>
            <div className="text-center">
              <Database className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold">{healthData.performance.dbResponseTime}ms</div>
              <div className="text-sm text-muted-foreground">Database Response</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Memory Usage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MemoryStick className="h-5 w-5" />
              Memory Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Used: {formatBytes(healthData.memory.used)}</span>
                  <span>{healthData.memory.percentage.toFixed(1)}%</span>
                </div>
                <Progress value={healthData.memory.percentage} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Total:</span>
                  <div className="font-medium">{formatBytes(healthData.memory.total)}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Free:</span>
                  <div className="font-medium">{formatBytes(healthData.memory.free)}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CPU Usage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              CPU Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>CPU Usage</span>
                  <span>{healthData.cpu.usage.toFixed(1)}%</span>
                </div>
                <Progress value={healthData.cpu.usage} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Cores:</span>
                  <div className="font-medium">{healthData.cpu.cores}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Load Avg:</span>
                  <div className="font-medium">{healthData.cpu.loadAverage[0]?.toFixed(2) || 'N/A'}</div>
                </div>
                {healthData.cpu.model && (
                  <div className="col-span-2">
                    <span className="text-muted-foreground">Model:</span>
                    <div className="font-medium text-xs">{healthData.cpu.model}</div>
                  </div>
                )}
                {healthData.cpu.speed && (
                  <div>
                    <span className="text-muted-foreground">Speed:</span>
                    <div className="font-medium">{healthData.cpu.speed} MHz</div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="h-5 w-5" />
              Storage Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Used: {formatBytes(healthData.storage.used)}</span>
                  <span>{healthData.storage.percentage.toFixed(1)}%</span>
                </div>
                <Progress value={healthData.storage.percentage} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Total:</span>
                  <div className="font-medium">{formatBytes(healthData.storage.total)}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Free:</span>
                  <div className="font-medium">{formatBytes(healthData.storage.free)}</div>
                </div>
                {healthData.storage.filesystem && (
                  <div>
                    <span className="text-muted-foreground">Filesystem:</span>
                    <div className="font-medium text-xs">{healthData.storage.filesystem}</div>
                  </div>
                )}
                {healthData.storage.mountPoint && (
                  <div>
                    <span className="text-muted-foreground">Mount Point:</span>
                    <div className="font-medium text-xs">{healthData.storage.mountPoint}</div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Database Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Database Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status:</span>
                <Badge className={
                  healthData.database.status === 'connected' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }>
                  {healthData.database.status}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Collections:</span>
                  <div className="font-medium">{healthData.database.collections}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Documents:</span>
                  <div className="font-medium">{healthData.database.documents.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Data Size:</span>
                  <div className="font-medium">{formatBytes(healthData.database.dataSize)}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Index Size:</span>
                  <div className="font-medium">{formatBytes(healthData.database.indexSize)}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ubuntu System Information */}
      {healthData.system && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* System Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Ubuntu VPS Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Distribution:</span>
                    <div className="font-medium">{healthData.system.distribution}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Kernel Version:</span>
                    <div className="font-medium">{healthData.system.kernel}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Architecture:</span>
                    <div className="font-medium">{healthData.system.architecture}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Hostname:</span>
                    <div className="font-medium">{healthData.system.hostname}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Process Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5" />
                Process Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{healthData.system.processes.total}</div>
                    <div className="text-muted-foreground">Total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{healthData.system.processes.running}</div>
                    <div className="text-muted-foreground">Running</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600">{healthData.system.processes.sleeping}</div>
                    <div className="text-muted-foreground">Sleeping</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network Interfaces */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Network Interfaces
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(healthData.system.networkInterfaces).map(([name, interfaces]) => {
                  const validInterfaces = Array.isArray(interfaces) ? interfaces.filter((iface: { internal: boolean }) => !iface.internal) : []
                  if (validInterfaces.length === 0) return null
                  
                  return (
                    <div key={name} className="border rounded-lg p-3">
                      <div className="font-medium text-sm mb-2">{name}</div>
                      {validInterfaces.map((iface: { family: string; address: string }, index: number) => (
                        <div key={index} className="text-xs text-muted-foreground">
                          {iface.family}: {iface.address}
                        </div>
                      ))}
                    </div>
                  )
                })}
                {Object.keys(healthData.system.networkInterfaces).length === 0 && (
                  <div className="text-sm text-muted-foreground">No external network interfaces found</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* VPS Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                VPS Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(healthData.system.services).map(([service, status]) => (
                  <div key={service} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="capitalize font-medium">{service}</span>
                    <Badge className={status ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                      {status ? 'Installed' : 'Not Found'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Services Status */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Services Status</CardTitle>
          <CardDescription>Status of critical system services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(healthData.services).map(([service, status]) => (
              <div key={service} className="flex items-center justify-between p-3 border rounded-lg">
                <span className="capitalize font-medium">{service}</span>
                <Badge className={status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                  {status ? 'Online' : 'Offline'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Environment Info */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Environment Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Node.js Version:</span>
              <div className="font-medium">{healthData.environment.nodeVersion}</div>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Platform:</span>
              <div className="font-medium">{healthData.environment.platform}</div>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Environment:</span>
              <div className="font-medium">{healthData.environment.environment}</div>
            </div>
            {healthData.environment.timezone && (
              <div>
                <span className="text-sm text-muted-foreground">Timezone:</span>
                <div className="font-medium">{healthData.environment.timezone}</div>
              </div>
            )}
            {healthData.environment.locale && (
              <div>
                <span className="text-sm text-muted-foreground">Locale:</span>
                <div className="font-medium">{healthData.environment.locale}</div>
              </div>
            )}
            <div>
              <span className="text-sm text-muted-foreground">Last Updated:</span>
              <div className="font-medium">{new Date(healthData.timestamp).toLocaleString()}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
