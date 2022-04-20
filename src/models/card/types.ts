import { Document, Model } from 'mongoose'

export interface CardAttrs {
  title: string
  coverImage?: string
  list: string
}

export interface CardDoc extends CardAttrs, Document {
  labels: string[]
}

export interface CardModel extends Model<CardDoc> {
  build(attrs: CardAttrs): CardDoc
}
