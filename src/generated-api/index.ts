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

export type Board = {
  __typename?: 'Board'
  admin?: Maybe<User>
  coverImage?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  id: Scalars['ID']
  labels?: Maybe<Array<Maybe<Scalars['String']>>>
  listOrders?: Maybe<Array<Maybe<Scalars['String']>>>
  lists?: Maybe<Array<Maybe<Scalars['String']>>>
  members?: Maybe<Array<Maybe<User>>>
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['String']>
  visibility?: Maybe<Visibility>
}

export type List = {
  __typename?: 'List'
  cardOrders?: Maybe<Array<Maybe<Scalars['String']>>>
  cards?: Maybe<Array<Maybe<Scalars['String']>>>
  createdAt?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createBoard?: Maybe<Board>
  createList?: Maybe<List>
  loginUser?: Maybe<User>
  signupUser?: Maybe<User>
  updateList?: Maybe<List>
}

export type MutationCreateBoardArgs = {
  coverImage?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  visibility?: InputMaybe<Visibility>
}

export type MutationCreateListArgs = {
  boardId: Scalars['ID']
  title: Scalars['String']
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

export type MutationUpdateListArgs = {
  cardOrders?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id: Scalars['ID']
  title?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  getBoards?: Maybe<Array<Maybe<Board>>>
  getCurrentUser?: Maybe<User>
  getLists?: Maybe<Array<Maybe<List>>>
}

export type QueryGetListsArgs = {
  boardId: Scalars['ID']
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

export enum Visibility {
  Private = 'Private',
  Public = 'Public',
}

export type GetBoardsQueryVariables = Exact<{ [key: string]: never }>

export type GetBoardsQuery = {
  __typename?: 'Query'
  getBoards?: Array<{
    __typename?: 'Board'
    id: string
    title: string
    coverImage?: string | null
    members?: Array<{
      __typename?: 'User'
      id?: string | null
      name?: string | null
      avatar?: string | null
    } | null> | null
  } | null> | null
}

export type CreateBoardMutationVariables = Exact<{
  title: Scalars['String']
  visibility: Visibility
  coverImage?: InputMaybe<Scalars['String']>
}>

export type CreateBoardMutation = {
  __typename?: 'Mutation'
  createBoard?: { __typename?: 'Board'; id: string; title: string; coverImage?: string | null } | null
}

export type GetListsQueryVariables = Exact<{
  boardId: Scalars['ID']
}>

export type GetListsQuery = {
  __typename?: 'Query'
  getLists?: Array<{
    __typename?: 'List'
    id: string
    title: string
    cardOrders?: Array<string | null> | null
  } | null> | null
}

export type CreateListMutationVariables = Exact<{
  boardId: Scalars['ID']
  title: Scalars['String']
}>

export type CreateListMutation = {
  __typename?: 'Mutation'
  createList?: { __typename?: 'List'; id: string; title: string; cardOrders?: Array<string | null> | null } | null
}

export type UpdateListMutationVariables = Exact<{
  id: Scalars['ID']
  title?: InputMaybe<Scalars['String']>
  cardOrders?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
}>

export type UpdateListMutation = {
  __typename?: 'Mutation'
  updateList?: { __typename?: 'List'; id: string; title: string; cardOrders?: Array<string | null> | null } | null
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

export const GetBoardsDocument = gql`
  query getBoards {
    getBoards {
      id
      title
      coverImage
      members {
        id
        name
        avatar
      }
    }
  }
`
export const CreateBoardDocument = gql`
  mutation createBoard($title: String!, $visibility: Visibility!, $coverImage: String) {
    createBoard(title: $title, visibility: $visibility, coverImage: $coverImage) {
      id
      title
      coverImage
    }
  }
`
export const GetListsDocument = gql`
  query getLists($boardId: ID!) {
    getLists(boardId: $boardId) {
      id
      title
      cardOrders
    }
  }
`
export const CreateListDocument = gql`
  mutation createList($boardId: ID!, $title: String!) {
    createList(boardId: $boardId, title: $title) {
      id
      title
      cardOrders
    }
  }
`
export const UpdateListDocument = gql`
  mutation updateList($id: ID!, $title: String, $cardOrders: [String]) {
    updateList(id: $id, title: $title, cardOrders: $cardOrders) {
      id
      title
      cardOrders
    }
  }
`
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
    getBoards(
      variables?: GetBoardsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetBoardsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBoardsQuery>(GetBoardsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getBoards',
        'query'
      )
    },
    createBoard(
      variables: CreateBoardMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateBoardMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateBoardMutation>(CreateBoardDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createBoard',
        'mutation'
      )
    },
    getLists(variables: GetListsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetListsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetListsQuery>(GetListsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getLists',
        'query'
      )
    },
    createList(
      variables: CreateListMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateListMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateListMutation>(CreateListDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createList',
        'mutation'
      )
    },
    updateList(
      variables: UpdateListMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UpdateListMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateListMutation>(UpdateListDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'updateList',
        'mutation'
      )
    },
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
