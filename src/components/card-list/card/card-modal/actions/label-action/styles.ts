import styled from 'styled-components'

import { LabelColorProps } from './types'

export const Wrapper = styled.div`
  padding: 0.9rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const LabelColor = styled.div<LabelColorProps>`
  width: 5rem;
  height: 2.7rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ theme }) => theme.radius.sm};
`
