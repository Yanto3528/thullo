import styled from 'styled-components'

import { StyledBadgeProps } from './types'

export const StyledBadge = styled.span<StyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.pill};
  background-color: ${({ theme, bg }) => bg && theme.colors[bg]};
  color: ${({ theme, color }) => color && theme.colors[color]};
  padding: 0.4rem 1.1rem;
  font-size: 1rem;
`
