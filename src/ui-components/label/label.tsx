import React from 'react'
import { StyledLabel } from './styles'

export const Label: React.FC<React.ComponentPropsWithoutRef<'label'>> = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>
}
