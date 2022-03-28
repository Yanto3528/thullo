import styled from 'styled-components'

export const MainContent = styled.main`
  background-color: ${({ theme }) => theme.colors.lightGray2};
  border-radius: ${({ theme }) => theme.radius.pill};
  min-height: calc(100vh - 13.8rem);
`
