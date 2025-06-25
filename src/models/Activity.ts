import mongoose from 'mongoose'

export interface IActivity extends mongoose.Document {
  userId?: mongoose.Types.ObjectId
  adminId?: mongoose.Types.ObjectId
  action: string
  resource: 'user' | 'order' | 'service' | 'system' | 'document'
  resourceId?: string
  details: string
  metadata?: Record<string, unknown>
  ipAddress?: string
  userAgent?: string
  createdAt: Date
}

const ActivitySchema = new mongoose.Schema<IActivity>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  action: {
    type: String,
    required: true,
    enum: [
      'created',
      'updated',
      'deleted',
      'viewed',
      'login',
      'logout',      'terminated_sessions',
      'status_changed',
      'payment_updated',
      'service_toggled',
      'document_uploaded',
      'document_deleted',
      'document_viewed'
    ]
  },
  resource: {
    type: String,
    required: true,
    enum: ['user', 'order', 'service', 'system', 'document']
  },
  resourceId: {
    type: String,
  },
  details: {
    type: String,
    required: true,
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed,
  },
  ipAddress: {
    type: String,
  },
  userAgent: {
    type: String,
  },
}, {
  timestamps: true,
})

// Index for efficient querying
ActivitySchema.index({ createdAt: -1 })
ActivitySchema.index({ resource: 1, createdAt: -1 })
ActivitySchema.index({ adminId: 1, createdAt: -1 })

export default mongoose.models.Activity || mongoose.model<IActivity>('Activity', ActivitySchema)
