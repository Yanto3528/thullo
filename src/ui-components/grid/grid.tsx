import React from 'react'

import { GridWrapper } from './styles'
import { GridProps } from './types'

export const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  return <GridWrapper {...props}>{children}</GridWrapper>
}
