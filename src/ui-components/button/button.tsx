import React from 'react'

import { StyledButton } from './styles'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'white',
  bg = 'primary',
  padding = '0.8rem 1.6rem',
  ...props
}) => {
  return (
    <StyledButton {...props} color={color} bg={bg} padding={padding}>
      {children}
    </StyledButton>
  )
}
