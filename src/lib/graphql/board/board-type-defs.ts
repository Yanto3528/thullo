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
    members: [BoardUser]
    admin: User
  }

  type BoardUser {
    user: User
  }

  enum Visibility {
    PRIVATE
    PUBLIC
  }

  type Query {
    getBoards: [Board]
  }

  type Mutation {
    createBoard(title: String, visibility: Visibility, coverImage: String): Board
  }
`
