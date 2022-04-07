import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Card = {
  __typename?: 'Card'
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
}

export type List = {
  __typename?: 'List'
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  getCard?: Maybe<Card>
  getList?: Maybe<List>
  getUser?: Maybe<Array<Maybe<User>>>
}

export type User = {
  __typename?: 'User'
  adminBoards?: Maybe<Array<Maybe<Scalars['String']>>>
  avatar?: Maybe<Scalars['String']>
  boards?: Maybe<Array<Maybe<Scalars['String']>>>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type GetUserQueryVariables = Exact<{ [key: string]: never }>

export type GetUserQuery = {
  __typename?: 'Query'
  getUser?: Array<{
    __typename?: 'User'
    id?: string | null
    name?: string | null
    email?: string | null
    avatar?: string | null
  } | null> | null
}

export const GetUserDocument = gql`
  query getUser {
    getUser {
      id
      name
      email
      avatar
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUser(variables?: GetUserQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserQuery>(GetUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getUser',
        'query'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
