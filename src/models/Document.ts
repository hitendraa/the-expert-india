import mongoose from 'mongoose'

export interface IDocument extends mongoose.Document {
  userId: mongoose.Types.ObjectId
  filename: string
  originalName: string
  mimetype: string
  size: number
  path: string
  category: string
  uploadDate: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const DocumentSchema = new mongoose.Schema<IDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
    max: 10 * 1024 * 1024, // 10MB limit
  },
  path: {
    type: String,
    required: true,
  },  category: {
    type: String,
    required: true,
    // No enum - will be validated against DocumentCategory collection
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
})

// Index for efficient queries
DocumentSchema.index({ userId: 1, category: 1 })
DocumentSchema.index({ userId: 1, isActive: 1 })

// Clear any existing model to ensure fresh schema registration
if (mongoose.models.Document) {
  delete mongoose.models.Document
}

export default mongoose.model<IDocument>('Document', DocumentSchema)
