import { CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'

export type CookieFn = (name: string, value: string, options: CookieSerializeOptions) => void

export interface ApiResponse extends NextApiResponse {
  cookie: CookieFn
}
