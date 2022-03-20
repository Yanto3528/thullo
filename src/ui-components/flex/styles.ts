import styled from 'styled-components'

import { FlexProps } from './types'

export const Wrapper = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ direction }) => direction};
`
