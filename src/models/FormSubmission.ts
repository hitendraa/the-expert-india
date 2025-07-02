import mongoose from 'mongoose'

export interface IFormSubmission extends mongoose.Document {
  name: string
  email: string
  mobile: string
  page: string
  source: string // Which form was filled (e.g., "company-registration", "gst-registration")
  formType: string // Type of form (e.g., "hero", "cta", "consultation")
  state?: string
  city?: string
  companyType?: string
  hearAbout?: string
  package?: string
  additionalData?: Record<string, unknown> // For any additional form fields
  ipAddress?: string
  userAgent?: string
  status: 'new' | 'contacted' | 'converted' | 'closed'
  notes?: string
  assignedTo?: mongoose.Types.ObjectId
  contactedAt?: Date
  createdAt: Date
  updatedAt: Date
}

const FormSubmissionSchema = new mongoose.Schema<IFormSubmission>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
  },
  page: {
    type: String,
    required: true, // e.g., "/services/company-registration", "/services/gst-registration"
  },
  source: {
    type: String,
    required: true, // e.g., "company-registration", "gst-registration", "trademark-registration"
  },
  formType: {
    type: String,
    required: true, // e.g., "hero", "cta", "consultation", "contact"
  },
  state: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  companyType: {
    type: String,
    trim: true,
  },
  hearAbout: {
    type: String,
    trim: true,
  },
  package: {
    type: String,
    trim: true,
  },
  additionalData: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  ipAddress: {
    type: String,
  },
  userAgent: {
    type: String,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new',
  },
  notes: {
    type: String,
    trim: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  contactedAt: {
    type: Date,
  },
}, {
  timestamps: true,
})

// Indexes for better query performance
FormSubmissionSchema.index({ createdAt: -1 })
FormSubmissionSchema.index({ source: 1, createdAt: -1 })
FormSubmissionSchema.index({ status: 1, createdAt: -1 })
FormSubmissionSchema.index({ page: 1, createdAt: -1 })
FormSubmissionSchema.index({ email: 1 })
FormSubmissionSchema.index({ mobile: 1 })

export default mongoose.models.FormSubmission || mongoose.model<IFormSubmission>('FormSubmission', FormSubmissionSchema)
