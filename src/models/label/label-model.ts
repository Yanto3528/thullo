import mongoose from 'mongoose'

import { LabelAttrs, LabelDoc, LabelModel } from './types'

const LabelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
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

LabelSchema.statics.build = (attrs: LabelAttrs) => {
  return new Label(attrs)
}

export const Label = (mongoose.models.Label as LabelModel) || mongoose.model<LabelDoc, LabelModel>('Label', LabelSchema)
