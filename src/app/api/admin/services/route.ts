import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Service from '@/models/Service'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'

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

    const services = await Service.find({}).sort({ createdAt: -1 })
    return NextResponse.json(services)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
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

    const { name, description, docsRequired, price, sellPrice, isActive } = await request.json()

    // Check if service already exists
    const existingService = await Service.findOne({ name })
    if (existingService) {
      return NextResponse.json({ error: 'Service with this name already exists' }, { status: 400 })
    }    const newService = new Service({
      name,
      description,
      docsRequired,
      price,
      sellPrice,
      isActive: isActive !== undefined ? isActive : true,
    })

    await newService.save()

    // Log activity
    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'create',
      resource: 'service',
      resourceId: newService._id.toString(),
      details: `Created service: ${name} with price ₹${price}`,
      metadata: { name, description, price, sellPrice, isActive },
      request
    })

    return NextResponse.json(newService, { status: 201 })
  } catch (error) {
    console.error('Error creating service:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
