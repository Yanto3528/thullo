import React from 'react'

import { CardBody } from './body'
import { Wrapper } from './styles'
import { CardComposition } from './types'

export const Card: React.FC & CardComposition = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

Card.Body = CardBody
