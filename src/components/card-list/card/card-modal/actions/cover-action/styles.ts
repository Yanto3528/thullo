import styled from 'styled-components'
import Image from 'next/image'

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const StyledImage = styled(Image)`
  border-radius: ${({ theme }) => theme.radius.sm};
  object-fit: cover;
  cursor: pointer;
`
