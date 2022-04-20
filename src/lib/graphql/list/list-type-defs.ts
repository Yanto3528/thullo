import { gql } from 'apollo-server-micro'

export const ListTypeDefs = gql`
  type List {
    id: ID!
    createdAt: String
    updatedAt: String
    title: String!
    cardOrders: [String]
    cards: [String]
  }

  type Query {
    getLists: [List]
  }

  type Mutation {
    createList(boardId: ID!, title: String!): List
    updateList(id: ID!, title: String, cardOrders: [String]): List
  }
`
