import React from 'react'

import { Paragraph } from './styles'
import { TextProps } from './types'

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <Paragraph {...props}>{children}</Paragraph>
}
