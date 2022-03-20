import styled from 'styled-components'

import { ButtonProps } from './types'

export const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme, bg }) => bg && theme.colors[bg]};
  padding: ${({ padding }) => padding};
  color: ${({ theme, color }) => color && theme.colors[color]};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
