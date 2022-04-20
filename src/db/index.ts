import mongoose from 'mongoose'

interface CustomMongoose {
  conn?: typeof mongoose | null
  promise?: Promise<typeof mongoose> | null
}

declare global {
  // eslint-disable-next-line
  var mongoose: CustomMongoose | undefined
}

const mongoUri = process.env.MONGO_URI || ''

if (!mongoUri) {
  throw new Error('Please define the MONGO_URI environment variable inside .env')
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  // eslint-disable-next-line
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached?.conn) {
    return cached.conn
  }

  if (!cached?.promise) {
    cached!.promise = mongoose.connect(mongoUri).then((mongooseIns) => mongooseIns)
  }
  cached!.conn = await cached!.promise

  // eslint-disable-next-line
  console.log('MONGODB connected!')

  return cached!.conn
}
