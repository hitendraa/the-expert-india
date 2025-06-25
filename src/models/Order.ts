import mongoose from 'mongoose'

export interface IOrder extends mongoose.Document {
  userId: mongoose.Types.ObjectId
  serviceId: mongoose.Types.ObjectId
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  amount: number
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  orderDate: Date
  completionDate?: Date  
  notes?: string
  userDetails?: {
    name?: string
    email?: string
    phone?: string
    [key: string]: unknown
  }
  documents?: string[]
  documentIds?: mongoose.Types.ObjectId[] // Document IDs for admin access
  paymentDetails?: {
    razorpay_order_id?: string
    razorpay_payment_id?: string
    razorpay_signature?: string
    method?: string
  }
  createdAt: Date
  updatedAt: Date
}

const OrderSchema = new mongoose.Schema<IOrder>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'cancelled'],
    default: 'pending',
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending',
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },  completionDate: {
    type: Date,
  },
  notes: {
    type: String,
  },
  userDetails: {
    type: mongoose.Schema.Types.Mixed,
  },
  documents: [{
    type: String,
  }],
  documentIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document',
  }],
  paymentDetails: {
    razorpay_order_id: String,
    razorpay_payment_id: String,
    razorpay_signature: String,
    method: String,
  },
}, {
  timestamps: true,
})

// Clear any existing model to ensure fresh schema registration
if (mongoose.models.Order) {
  delete mongoose.models.Order
}

export default mongoose.model<IOrder>('Order', OrderSchema)
