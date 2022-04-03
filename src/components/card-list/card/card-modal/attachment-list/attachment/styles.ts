import styled from 'styled-components'

export const StyledImage = styled.img`
  width: 10rem;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  display: block;
`
