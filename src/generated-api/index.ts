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

export type Mutation = {
  __typename?: 'Mutation'
  loginUser?: Maybe<User>
  signupUser?: Maybe<User>
}

export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}

export type MutationSignupUserArgs = {
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  getCard?: Maybe<Card>
  getCurrentUser?: Maybe<User>
  getList?: Maybe<List>
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

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>

export type GetCurrentUserQuery = {
  __typename?: 'Query'
  getCurrentUser?: {
    __typename?: 'User'
    id?: string | null
    name?: string | null
    email?: string | null
    avatar?: string | null
  } | null
}

export type SignupUserMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}>

export type SignupUserMutation = {
  __typename?: 'Mutation'
  signupUser?: {
    __typename?: 'User'
    id?: string | null
    name?: string | null
    email?: string | null
    avatar?: string | null
  } | null
}

export type LoginUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}>

export type LoginUserMutation = {
  __typename?: 'Mutation'
  loginUser?: {
    __typename?: 'User'
    id?: string | null
    name?: string | null
    email?: string | null
    avatar?: string | null
  } | null
}

export const GetCurrentUserDocument = gql`
  query getCurrentUser {
    getCurrentUser {
      id
      name
      email
      avatar
    }
  }
`
export const SignupUserDocument = gql`
  mutation signupUser($name: String, $email: String, $password: String) {
    signupUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      avatar
    }
  }
`
export const LoginUserDocument = gql`
  mutation loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
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
    getCurrentUser(
      variables?: GetCurrentUserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetCurrentUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCurrentUserQuery>(GetCurrentUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getCurrentUser',
        'query'
      )
    },
    signupUser(
      variables?: SignupUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<SignupUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SignupUserMutation>(SignupUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'signupUser',
        'mutation'
      )
    },
    loginUser(
      variables?: LoginUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<LoginUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoginUserMutation>(LoginUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'loginUser',
        'mutation'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
