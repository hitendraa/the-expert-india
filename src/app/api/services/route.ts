import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Service from '@/models/Service'

export async function GET() {
  try {
    await connectDB()
    
    const services = await Service.find({ isActive: true }).sort({ createdAt: -1 })
    
    return NextResponse.json(services)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
