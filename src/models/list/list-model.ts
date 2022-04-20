import mongoose from 'mongoose'

import { ListAttrs, ListDoc, ListModel } from './types'

const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cardIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
      },
    ],
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Board',
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

ListSchema.statics.build = (attrs: ListAttrs) => {
  return new List(attrs)
}

export const List = (mongoose.models.List as ListModel) || mongoose.model<ListDoc, ListModel>('List', ListSchema)
