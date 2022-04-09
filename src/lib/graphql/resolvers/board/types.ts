import { Visibility } from '@/constants'

export interface CreateBoardArgs {
  title: string
  coverImage?: string
  visibility: Visibility
}
