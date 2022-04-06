import { mergeDeep } from '@/utils'

import { listResolvers } from './list'
import { userResolvers } from './user'
import { cardResolvers } from './card'

export const resolvers = mergeDeep(listResolvers, userResolvers, cardResolvers)
