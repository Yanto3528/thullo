import { ComponentPropsWithoutRef } from 'react'
import { theme } from '@/styles/theme'

export interface AvatarProps extends ComponentPropsWithoutRef<'img'> {
  size?: string
  radius?: keyof typeof theme.radius
  name?: string
}
