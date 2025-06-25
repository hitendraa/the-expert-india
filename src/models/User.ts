import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
  name: string
  email: string
  image?: string
  role: 'user' | 'admin'
  googleId?: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
}, {
  timestamps: true,
})

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
