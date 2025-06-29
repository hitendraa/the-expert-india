import connectDB from '@/lib/mongodb'
import Activity from '@/models/Activity'
import { NextRequest } from 'next/server'

interface LogActivityParams {
  adminId?: string
  userId?: string
  action: string
  resource: 'user' | 'order' | 'service' | 'system' | 'document'
  resourceId?: string
  details: string
  metadata?: Record<string, unknown>
  request?: NextRequest
}

export async function logActivity({
  adminId,
  userId,
  action,
  resource,
  resourceId,
  details,
  metadata,
  request
}: LogActivityParams) {
  try {
    await connectDB()
    
    const activityData: {
      action: string
      resource: string
      details: string
      metadata?: Record<string, unknown>
      adminId?: string
      userId?: string
      resourceId?: string
      ipAddress?: string
      userAgent?: string
    } = {
      action,
      resource,
      details,
      metadata,
    }

    if (adminId) {
      activityData.adminId = adminId
    }
    
    if (userId) {
      activityData.userId = userId
    }

    if (resourceId) {
      activityData.resourceId = resourceId
    }

    if (request) {
      activityData.ipAddress = request.headers.get('x-forwarded-for') || 
                               request.headers.get('x-real-ip') || 
                               'unknown'
      activityData.userAgent = request.headers.get('user-agent') || 'unknown'
    }

    const activity = new Activity(activityData)
    await activity.save()
    
    return activity
  } catch (error) {
    console.error('Error logging activity:', error)
    // Don't throw error to avoid disrupting main functionality
  }
}

export async function getRecentActivities(limit = 10) {
  try {
    await connectDB()
    
    const activities = await Activity.find({})
      .populate('userId', 'name email')
      .populate('adminId', 'name email')
      .sort({ createdAt: -1 })
      .limit(limit)
    
    return activities
  } catch (error) {
    console.error('Error fetching recent activities:', error)
    return []
  }
}
