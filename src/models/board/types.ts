import { Document, Model } from 'mongoose'
import { Visibility } from '@/types'

// id          Int             @id @default(autoincrement())
//   createdAt   DateTime        @default(now())
//   updatedAt   DateTime        @updatedAt
//   title       String
//   coverImage  String?
//   visibility  Visibility
//   listOrders  String[]
//   lists       List[]
//   labels      Label[]
//   members     BoardOnUser[]
//   admin       User            @relation(fields: [adminId], references: [id])
//   adminId     Int

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
