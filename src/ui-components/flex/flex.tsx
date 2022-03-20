import React from 'react'

import { Wrapper } from './styles'
import { FlexProps } from './types'

export const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}
