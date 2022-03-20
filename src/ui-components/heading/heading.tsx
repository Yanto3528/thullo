import React from 'react'

import { StyledHeading } from './styles'
import { HeadingProps } from './types'

export const Heading: React.FC<HeadingProps> = ({ children, as = 'h1', ...props }) => {
  return (
    <StyledHeading {...props} as={as}>
      {children}
    </StyledHeading>
  )
}
