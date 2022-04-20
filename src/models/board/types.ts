import { Document, Model } from 'mongoose'
import { Visibility } from '@/constants'

export interface BoardAttrs {
  title: string
  visibility: Visibility
  coverImage?: string
  members: string[]
  admin: string
}

export interface BoardDoc extends BoardAttrs, Document {
  listOrders: string[]
  lists: string[]
  labels: string[]
}

export interface BoardModel extends Model<BoardDoc> {
  build(attrs: BoardAttrs): BoardDoc
}
