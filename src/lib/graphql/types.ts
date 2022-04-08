import { CookieFn } from '../cookie/types'

export interface Context {
  cookie: CookieFn
  user?: {
    id: number
  }
}
