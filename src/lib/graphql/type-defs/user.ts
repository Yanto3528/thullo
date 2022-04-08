import { gql } from 'apollo-server-micro'

export const UserTypeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    avatar: String
    boards: [String]
    adminBoards: [String]
  }

  type Query {
    getUser: [User]
  }

  type Mutation {
    signupUser(name: String, email: String, password: String): User
  }
`
