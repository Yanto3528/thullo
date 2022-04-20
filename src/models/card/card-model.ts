import mongoose from 'mongoose'

import { CardAttrs, CardDoc, CardModel } from './types'

const CardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    coverImage: String,
    labels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Label',
      },
    ],
    list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'List',
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

CardSchema.statics.build = (attrs: CardAttrs) => {
  return new Card(attrs)
}

export const Card = (mongoose.models.Card as CardModel) || mongoose.model<CardDoc, CardModel>('Card', CardSchema)
