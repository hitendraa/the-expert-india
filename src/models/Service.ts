import mongoose from 'mongoose'

export interface IService extends mongoose.Document {
  name: string
  description: string
  docsRequired: string[]
  price: number
  sellPrice?: number // Optional reduced price
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const ServiceSchema = new mongoose.Schema<IService>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  docsRequired: [{
    type: String,
    required: true,
  }],
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  sellPrice: {
    type: Number,
    min: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
})

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema)
