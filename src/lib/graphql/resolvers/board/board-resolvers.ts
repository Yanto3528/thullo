import { ApolloError } from 'apollo-server-core'

import { prisma } from '@/lib/prisma'

import { Context } from '../../types'
import { CreateBoardArgs } from './types'

export const boardResolvers = {
  Mutation: {
    createBoard: async (_parent: unknown, args: CreateBoardArgs, ctx: Context) => {
      if (!ctx.user) {
        throw new ApolloError('Not authorized to create board')
      }

      const { title, visibility, coverImage } = args

      const board = await prisma.board.create({
        data: {
          title,
          coverImage,
          visibility,
          adminId: ctx.user.id,
          members: {
            create: [
              {
                user: {
                  connect: {
                    id: ctx.user.id,
                  },
                },
              },
            ],
          },
        },
        include: {
          members: {
            select: {
              user: true,
            },
          },
        },
      })

      return board
    },
  },
}
