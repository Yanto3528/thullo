import React from 'react'

import { Wrapper } from './styles'
import { FlexProps } from './types'

export const Flex: React.FC<FlexProps> = ({ children, innerRef, ...props }) => {
  return (
    <Wrapper {...props} ref={innerRef}>
      {children}
    </Wrapper>
  )
}
