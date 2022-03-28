import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 24.5rem;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.7rem;
  position: relative;
`

export const CustomPlaceholder = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primaryLight2};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: dashed 1px ${({ theme }) => theme.colors.primary};
`
