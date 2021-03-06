import styled from 'styled-components'

import { spacingStyles } from '@/styles/shared'

import { TextProps } from './types'

export const Paragraph = styled.p<TextProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family};
  text-align: ${({ align }) => align};
  color: ${({ color, theme }) => color && theme.colors[color]};
  line-height: ${({ lineHeight }) => lineHeight};
  white-space: pre-wrap;

  ${spacingStyles};
`
