import styled from 'styled-components'

export const MainContent = styled.main`
  background-color: ${({ theme }) => theme.colors.lightGray2};
  padding: 2.4rem;
  border-radius: ${({ theme }) => theme.radius.pill};
`
