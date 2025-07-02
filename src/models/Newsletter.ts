import mongoose from 'mongoose';

export interface INewsletter {
  _id: string;
  email: string;
  name?: string;
  mobile?: string;
  source: 'newsletter' | 'form_submission' | 'registration' | 'manual';
  sourceDetails?: {
    formType?: string;
    page?: string;
    registrationType?: string;
  };
  status: 'active' | 'unsubscribed' | 'bounced';
  tags?: string[];
  subscribedAt: Date;
  unsubscribedAt?: Date;
  lastEmailSent?: Date;
  emailsSent: number;
  createdAt: Date;
  updatedAt: Date;
}

const NewsletterSchema = new mongoose.Schema<INewsletter>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  name: {
    type: String,
    trim: true,
  },
  mobile: {
    type: String,
    trim: true,
  },
  source: {
    type: String,
    enum: ['newsletter', 'form_submission', 'registration', 'manual'],
    required: true,
    index: true,
  },
  sourceDetails: {
    formType: String,
    page: String,
    registrationType: String,
  },
  status: {
    type: String,
    enum: ['active', 'unsubscribed', 'bounced'],
    default: 'active',
    index: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  subscribedAt: {
    type: Date,
    default: Date.now,
    index: true,
  },
  unsubscribedAt: {
    type: Date,
  },
  lastEmailSent: {
    type: Date,
  },
  emailsSent: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Create indexes for better performance
NewsletterSchema.index({ email: 1, status: 1 });
NewsletterSchema.index({ source: 1, status: 1 });
NewsletterSchema.index({ subscribedAt: -1 });

// Prevent duplicate indexes in development
const Newsletter = mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;
