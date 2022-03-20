import React from 'react'

import { StyledButton } from './styles'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({ children, color = 'primary', ...props }) => {
  return (
    <StyledButton {...props} color={color}>
      {children}
    </StyledButton>
  )
}
