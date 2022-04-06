import { gql } from 'apollo-server-micro'

export const ListTypeDefs = gql`
  type List {
    id: ID
    title: String
  }

  type Query {
    getList: List
  }
`
