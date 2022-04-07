import { GraphQLClient } from 'graphql-request'

import { getSdk } from '@/generated-api'

// eslint-disable-next-line
const client = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT!)

const allApis = getSdk(client)

export const { getUser } = allApis
