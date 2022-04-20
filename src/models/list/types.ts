import { Document, Model } from 'mongoose'

export interface ListAttrs {
  title: string
}

export interface ListDoc extends ListAttrs, Document {
  cardIds: string[]
  cards: string[]
  board: string
}

export interface ListModel extends Model<ListDoc> {
  build(attrs: ListAttrs): ListDoc
}
