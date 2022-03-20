import React from 'react'

import { Wrapper, StyledInput, ElementContainer } from './styles'
import { InputProps } from './types'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ rightElement, ...props }, ref) => {
  return (
    <Wrapper>
      <StyledInput ref={ref} {...props} />
      <ElementContainer>{rightElement}</ElementContainer>
    </Wrapper>
  )
})
