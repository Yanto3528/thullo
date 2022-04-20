import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

import { UserAttrs, UserDoc, UserModel } from './types'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: String,
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password
      },
    },
  }
)

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }

  next()
})

UserSchema.methods.matchPassword = async (plainPassword: string, hashedPassword: string) => {
  return bcrypt.compare(plainPassword, hashedPassword)
}

UserSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

export const User = (mongoose.models.User as UserModel) || mongoose.model<UserDoc, UserModel>('User', UserSchema)
