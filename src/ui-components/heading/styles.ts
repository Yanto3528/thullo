import styled from 'styled-components'

import { HeadingProps } from './types'

export const StyledHeading = styled.h1<HeadingProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family};
`
