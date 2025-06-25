import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Service from '@/models/Service'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const service = await Service.findById(id)
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

    return NextResponse.json(service)
  } catch (error) {
    console.error('Error fetching service:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }    const { name, description, docsRequired, price, sellPrice, isActive } = await request.json()

    // Get original service for comparison
    const originalService = await Service.findById(id)
    if (!originalService) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

    const service = await Service.findByIdAndUpdate(
      id,
      { name, description, docsRequired, price, sellPrice, isActive },
      { new: true, runValidators: true }
    )

    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

    // Log activity
    const changes = []
    if (originalService.name !== name) changes.push(`name: ${originalService.name} → ${name}`)
    if (originalService.price !== price) changes.push(`price: ₹${originalService.price} → ₹${price}`)
    if (originalService.sellPrice !== sellPrice) changes.push(`sell price: ₹${originalService.sellPrice} → ₹${sellPrice}`)
    if (originalService.isActive !== isActive) changes.push(`status: ${originalService.isActive ? 'active' : 'inactive'} → ${isActive ? 'active' : 'inactive'}`)
    if (originalService.description !== description) changes.push('description updated')

    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'update',
      resource: 'service',
      resourceId: id,
      details: `Updated service: ${changes.join(', ')}`,
      metadata: { changes: { name, description, price, sellPrice, isActive } },
      request
    })

    return NextResponse.json(service)
  } catch (error) {
    console.error('Error updating service:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const service = await Service.findById(id)
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

    await Service.findByIdAndDelete(id)

    // Log activity
    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'delete',
      resource: 'service',
      resourceId: id,
      details: `Deleted service: ${service.name} (₹${service.price})`,
      metadata: { 
        name: service.name,
        price: service.price,
        sellPrice: service.sellPrice
      },
      request
    })

    return NextResponse.json({ message: 'Service deleted successfully' })
  } catch (error) {
    console.error('Error deleting service:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
