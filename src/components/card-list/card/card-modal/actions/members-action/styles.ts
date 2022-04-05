import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0.9rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MembersContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: white;
  overflow: hidden;
`
