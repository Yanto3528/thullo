import { Document, Model } from 'mongoose'

export interface LabelAttrs {
  name: string
  color?: string
  board: string
}

export interface LabelDoc extends LabelAttrs, Document {}

export interface LabelModel extends Model<LabelDoc> {
  build(attrs: LabelAttrs): LabelDoc
}
