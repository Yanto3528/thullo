import styled, { css } from 'styled-components'

import { HeadingProps } from './types'

export const StyledHeading = styled.h1<HeadingProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family};
  text-align: ${({ align }) => align};
  word-break: break-word;

  ${({ customStyle }) => customStyle && css(customStyle)};
`
