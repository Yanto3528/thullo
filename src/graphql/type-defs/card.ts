import { gql } from 'apollo-server-micro'

export const CardTypeDefs = gql`
  type Card {
    id: ID
    title: String
  }

  type Query {
    getCard: Card
  }
`
