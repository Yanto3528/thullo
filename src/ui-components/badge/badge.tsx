import React from 'react'

import { StyledBadge } from './styles'
import { BadgeProps, BadgeColorScheme } from './types'

export const Badge: React.FC<BadgeProps> = ({ children, colorScheme = 'primary' }) => {
  const bgColor = BadgeColorScheme[colorScheme].bg || 'primary'
  const color = BadgeColorScheme[colorScheme].color || 'primaryLight'
  return (
    <StyledBadge bg={bgColor} color={color}>
      {children}
    </StyledBadge>
  )
}
