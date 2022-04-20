import { Document, Model } from 'mongoose'

export interface UserAttrs {
  name: string
  email: string
  password: string
  avatar?: string
}

export interface UserDoc extends Document {
  name: string
  email: string
  password: string
  avatar?: string
  matchPassword(plainPassword: string, hashedPassword: string): Promise<boolean>
}

export interface UserModel extends Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc
}
