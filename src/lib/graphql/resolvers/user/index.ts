import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { ApolloError } from 'apollo-server-micro'

import { prisma } from '@/lib'
import { signupValidationSchema } from '@/lib/graphql/validator'

import { Context } from '../../types'
import { SignupUserArgs } from './types'

export const userResolvers = {
  Query: {
    getUser: async () => {
      const users = await prisma.user.findMany()

      return users.map((user) => ({ ...user, cards: [{ id: user.id }] }))
    },
  },
  Mutation: {
    signupUser: async (_parent: unknown, args: SignupUserArgs, ctx: Context) => {
      const validationResult = signupValidationSchema.validate(args)
      if (validationResult.error) {
        throw new ApolloError(validationResult.error.message)
      }

      const { name, email, password } = args

      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      })
      if (existingUser) {
        throw new ApolloError('User already exists.')
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      })

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES,
      })

      ctx.cookie('token', token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })

      return newUser
    },
  },
}