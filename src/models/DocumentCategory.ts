import mongoose from 'mongoose'

export interface IDocumentCategory extends mongoose.Document {
  name: string
  description?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const DocumentCategorySchema = new mongoose.Schema<IDocumentCategory>({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
})

// Index for efficient queries
// Note: name field already has unique: true which creates an index
DocumentCategorySchema.index({ isActive: 1 })

// Clear any existing model to ensure fresh schema registration
if (mongoose.models.DocumentCategory) {
  delete mongoose.models.DocumentCategory
}

export default mongoose.model<IDocumentCategory>('DocumentCategory', DocumentCategorySchema)
