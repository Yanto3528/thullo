import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse, NextApiRequest } from 'next'
import { RequestHandler } from 'micro'

import { ApiResponse } from './types'

/**
 * This sets `cookie` on `res` object
 */
const setCookie = (res: NextApiResponse, name: string, value: string, options: CookieSerializeOptions = {}) => {
  const stringValue = typeof value === 'object' ? `j:${JSON.stringify(value)}` : value

  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
export const cookies = (handler: RequestHandler) => (req: NextApiRequest, res: ApiResponse) => {
  res.cookie = (name, value, options) => setCookie(res, name, value, options)

  return handler(req, res)
}
