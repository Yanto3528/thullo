import { Color } from '@/types'

export interface TextProps {
  size?: string
  weight?: string | number
  family?: string
  color?: keyof Color
}
