import React from 'react'

import { Wrapper, StyledInput, ElementContainer } from './styles'
import { InputProps } from './types'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ leftElement, rightElement, ...props }, ref) => {
  return (
    <Wrapper>
      <ElementContainer>{leftElement}</ElementContainer>
      <StyledInput ref={ref} {...props} />
      <ElementContainer>{rightElement}</ElementContainer>
    </Wrapper>
  )
})
