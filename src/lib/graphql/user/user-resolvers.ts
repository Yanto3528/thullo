import jwt from 'jsonwebtoken'
import { ApolloError } from 'apollo-server-micro'

import { User } from '@/models'
import { signupValidationSchema, loginValidationSchema } from '@/lib/validator'

import { Context } from '../types'
import { SignupUserArgs, LoginUserArgs } from './types'

const COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000 // 7 days

export const userResolvers = {
  Query: {
    getCurrentUser: async (_parent: unknown, _args: unknown, ctx: Context) => {
      if (!ctx.user) {
        throw new ApolloError('Forbidden to access this resource')
      }

      const user = await User.findById(ctx.user.id)

      if (!user) {
        throw new ApolloError('User does not exists.')
      }

      return user
    },
  },
  Mutation: {
    signupUser: async (_parent: unknown, args: SignupUserArgs, ctx: Context) => {
      const validationResult = signupValidationSchema.validate(args)
      if (validationResult.error) {
        throw new ApolloError(validationResult.error.message)
      }

      const { name, email, password } = args

      const existingUser = await User.findOne({ email })
      if (existingUser) {
        throw new ApolloError('User already exists.')
      }

      const newUser = User.build({
        name,
        email,
        password,
      })
      await newUser.save()

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES,
      })

      ctx.cookie('token', token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: COOKIE_MAX_AGE,
      })

      return newUser
    },
    loginUser: async (_parent: unknown, args: LoginUserArgs, ctx: Context) => {
      const validationResult = loginValidationSchema.validate(args)
      if (validationResult.error) {
        throw new ApolloError(validationResult.error.message)
      }

      const { email, password } = args

      const user = await User.findOne({ email })
      if (!user) {
        throw new ApolloError('Invalid credentials')
      }

      const isPasswordMatch = await user.matchPassword(password, user.password)
      if (!isPasswordMatch) {
        throw new ApolloError('Invalid credentials')
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES,
      })

      ctx.cookie('token', token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: COOKIE_MAX_AGE,
      })

      return user
    },
  },
}
