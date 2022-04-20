import { ApolloError } from 'apollo-server-core'

import { Board } from '@/models'

import { Context } from '../types'
import { CreateBoardArgs } from './types'

export const boardResolvers = {
  Query: {
    getBoards: async (_parent: unknown, _args: unknown, ctx: Context) => {
      if (!ctx.user) {
        throw new ApolloError('Not authorized to get all boards')
      }

      const boards = await Board.find({
        members: ctx.user.id,
      }).populate('members')

      console.log('boards: ', boards[0].members)

      // const boards = await prisma.board.findMany({
      //   where: {
      //     members: {
      //       every: {
      //         user: {
      //           id: ctx.user.id,
      //         },
      //       },
      //     },
      //   },
      //   include: {
      //     members: {
      //       select: {
      //         user: true,
      //       },
      //     },
      //   },
      // })

      return boards
    },
  },
  Mutation: {
    createBoard: async (_parent: unknown, args: CreateBoardArgs, ctx: Context) => {
      if (!ctx.user) {
        throw new ApolloError('Not authorized to create board')
      }

      const { title, visibility, coverImage } = args

      const board = Board.build({
        title,
        visibility,
        coverImage,
        members: [ctx.user.id],
        admin: ctx.user.id,
      })
      await board.save()

      // const board = await prisma.board.create({
      //   data: {
      //     title,
      //     coverImage,
      //     visibility,
      //     adminId: ctx.user.id,
      //     members: {
      //       create: [
      //         {
      //           user: {
      //             connect: {
      //               id: ctx.user.id,
      //             },
      //           },
      //         },
      //       ],
      //     },
      //   },
      //   include: {
      //     members: {
      //       select: {
      //         user: true,
      //       },
      //     },
      //   },
      // })

      return board
    },
  },
}
