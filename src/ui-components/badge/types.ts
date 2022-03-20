import { Color } from '@/types'

export const BadgeColorScheme = {
  primary: {
    bg: 'primaryLight',
    color: 'primary',
  },
  orange: {
    bg: 'lightOrange',
    color: 'orange',
  },
  yellow: {
    bg: 'lightYellow',
    color: 'yellow',
  },
  violet: {
    bg: 'lightViolet',
    color: 'violet',
  },
  green: {
    bg: 'lightGreen',
    color: 'green',
  },
} as const

export interface BadgeProps {
  colorScheme?: keyof typeof BadgeColorScheme
}

export interface StyledBadgeProps {
  bg?: keyof Color
  color?: keyof Color
}
