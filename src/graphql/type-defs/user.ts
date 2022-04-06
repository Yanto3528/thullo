import { gql } from 'apollo-server-micro'

export const UserTypeDefs = gql`
  type User {
    id: ID
  }

  type Query {
    getUser: User
  }
`
