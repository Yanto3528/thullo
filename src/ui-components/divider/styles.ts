import styled, { css } from 'styled-components'

import { DividerProps } from './types'

const horizontalStyles = css`
  width: 100%;
  height: 0.1rem;
`

const verticalStyles = css`
  width: 0.1rem;
  height: 100%;
  writing-mode: vertical-lr;
`

const resolveOritentation = ({ orientation }: DividerProps) => {
  return orientation === 'vertical' ? verticalStyles : horizontalStyles
}

export const DividerWrapper = styled.div<DividerProps>`
  background-color: ${({ theme }) => theme.colors.gray5};
  margin-block: ${({ spacing }) => spacing || '1rem'};
  ${resolveOritentation};
`
