import mongoose from 'mongoose'

import { Visibility } from '@/constants'
import { BoardAttrs, BoardDoc, BoardModel } from './types'

const BoardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    visibility: {
      type: String,
      enum: Object.keys(Visibility),
      default: Visibility.Private,
    },
    listOrders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
      },
    ],
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
      },
    },
  }
)

BoardSchema.statics.build = (attrs: BoardAttrs) => {
  return new Board(attrs)
}

export const Board = (mongoose.models.Board as BoardModel) || mongoose.model<BoardDoc, BoardModel>('Board', BoardSchema)
