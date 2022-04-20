import { gql } from 'apollo-server-micro'

export const BoardTypeDefs = gql`
  type Board {
    id: ID!
    createdAt: String
    updatedAt: String
    title: String!
    coverImage: String
    visibility: Visibility
    listOrders: [String]
    lists: [String]
    labels: [String]
    members: [User]
    admin: User
  }

  enum Visibility {
    Private
    Public
  }

  type Query {
    getBoards: [Board]
  }

  type Mutation {
    createBoard(title: String, visibility: Visibility, coverImage: String): Board
  }
`
