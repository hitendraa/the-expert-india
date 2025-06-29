
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import { getServerSession } from 'next-auth/next'

// POST: Save phone number
export async function POST(req: NextRequest) {
  await dbConnect()
  const session = await getServerSession(authOptions)
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { phone } = await req.json()
  if (!phone || typeof phone !== 'string' || !/^\d{8,15}$/.test(phone)) {
    return NextResponse.json({ error: 'Invalid phone' }, { status: 400 })
  }
  const user = await User.findOneAndUpdate(
    { email: session.user.email },
    { $set: { phone } },
    { new: true }
  )
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }
  return NextResponse.json({ success: true, phone: user.phone })
}

// GET: Get phone number
export async function GET() {
  await dbConnect()
  const session = await getServerSession(authOptions)
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const user = await User.findOne({ email: session.user.email })
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }
  return NextResponse.json({ phone: typeof user.phone === 'string' ? user.phone : '' })
}
