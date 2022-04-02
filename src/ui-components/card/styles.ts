import styled from 'styled-components'

import { CardProps } from './types'

export const Wrapper = styled.div<CardProps>`
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.lg};
  width: 100%;
  margin-bottom: 2.4rem;
  box-shadow: 0 1px 1rem rgba(0 0 0 / 5%);
  overflow: hidden;
  cursor: ${({ cursor }) => cursor};
`

export const CardBodyWrapper = styled.div`
  padding: 1.2rem;
`
