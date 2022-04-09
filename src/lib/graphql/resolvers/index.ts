import { listResolvers } from './list'
import { userResolvers } from './user'
import { cardResolvers } from './card'
import { boardResolvers } from './board'

export const resolvers = [listResolvers, userResolvers, cardResolvers, boardResolvers]
