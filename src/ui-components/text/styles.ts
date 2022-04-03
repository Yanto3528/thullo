import styled from 'styled-components'

import { TextProps } from './types'

export const Paragraph = styled.p<TextProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family};
  color: ${({ color, theme }) => color && theme.colors[color]};
  line-height: ${({ lineHeight }) => lineHeight};
  white-space: pre-wrap;
`
