import styled from 'styled-components'

export const Wrapper = styled.nav`
  width: 100%;
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`

export const LogoContainer = styled.div`
  margin-right: 9.5rem;
`

export const DividerContainer = styled.div`
  height: 3rem;
`
