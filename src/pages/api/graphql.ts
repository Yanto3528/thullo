import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import Cors from 'micro-cors'

import { connectDB } from '@/db'
import { typeDefs, resolvers } from '@/lib/graphql'
import { cookies } from '@/lib/cookie'
import { isAuthenticated } from '@/lib/helpers'

const cors = Cors()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  debug: false,
  context: (ctx) => {
    return {
      cookie: ctx.res.cookie,
      user: isAuthenticated(ctx.req),
    }
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
})

const startServer = apolloServer.start()

export default cookies(
  // eslint-disable-next-line consistent-return
  cors(async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.end()
      return false
    }

    await startServer
    await apolloServer.createHandler({
      path: '/api/graphql',
    })(req, res)
    await connectDB()
  })
)

export const config = {
  api: {
    bodyParser: false,
  },
}
