import { UserTypeDefs, userResolvers } from './user'
import { BoardTypeDefs, boardResolvers } from './board'
import { ListTypeDefs, listResolvers } from './list'

export const typeDefs = [UserTypeDefs, BoardTypeDefs, ListTypeDefs]
export const resolvers = [userResolvers, boardResolvers, listResolvers]

export * from './types'
