import React from 'react'

import { CardBody } from './body'
import { Wrapper } from './styles'
import { CardProps, CardComposition } from './types'

export const Card: React.FC<CardProps> & CardComposition = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

Card.Body = CardBody
