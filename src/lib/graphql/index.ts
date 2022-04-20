import { UserTypeDefs, userResolvers } from './user'
import { BoardTypeDefs, boardResolvers } from './board'

export const typeDefs = [UserTypeDefs, BoardTypeDefs]
export const resolvers = [userResolvers, boardResolvers]

export * from './types'
