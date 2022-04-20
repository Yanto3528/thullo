import { GraphQLClient } from 'graphql-request'

import { getSdk } from '@/generated-api'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT!)

const allApis = getSdk(client)

export const { signupUser, loginUser, getCurrentUser, createBoard, getBoards } = allApis
