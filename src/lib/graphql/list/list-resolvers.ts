import { ApolloError } from 'apollo-server-core'

import { List } from '@/models'

import { Context } from '../types'
import { createListValidationSchema } from './validator'
import { GetListsArgs, CreateListArgs, UpdateListArgs } from './types'

export const listResolvers = {
  Query: {
    getLists: async (_parent: unknown, args: GetListsArgs, ctx: Context) => {
      if (!ctx.user) {
        throw new ApolloError('Not authorized to get all lists')
      }

      const { boardId } = args

      const lists = await List.find({
        board: boardId,
      })

      return lists
    },
  },
  Mutation: {
    createList: async (_parent: unknown, args: CreateListArgs, ctx: Context) => {
      if (!ctx.user) {
        throw new ApolloError('Not authorized to create list')
      }

      const validationResult = createListValidationSchema.validate(args)
      if (validationResult.error) {
        throw new ApolloError(validationResult.error.message)
      }

      const { title, boardId } = args

      const list = List.build({
        title,
        board: boardId,
      })
      await list.save()

      return list
    },
    updateList: async (_parent: unknown, args: UpdateListArgs, ctx: Context) => {
      if (!ctx.user) {
        throw new ApolloError('Not authorized to create list')
      }

      const { id, title, cardOrders } = args

      let list = await List.findById(id)
      if (!list) {
        throw new ApolloError('List with this id does not exist.')
      }

      list = await List.findByIdAndUpdate(id, { title, cardOrders }, { new: true })

      return list
    },
  },
}
