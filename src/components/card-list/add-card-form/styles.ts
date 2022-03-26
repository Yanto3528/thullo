import styled from 'styled-components'

export const Wrapper = styled.div``

export const Textarea = styled.textarea`
  background-color: white;
  padding: 1rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radius.lg};
  resize: none;
  width: 100%;
  transition: all 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
