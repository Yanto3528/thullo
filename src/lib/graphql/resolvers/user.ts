import { prisma } from '@/lib'

export const userResolvers = {
  Query: {
    getUser: async () => {
      const users = await prisma.user.findMany()

      return users.map((user) => ({ ...user, cards: [{ id: user.id }] }))
    },
  },
}
