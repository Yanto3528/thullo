import styled from 'styled-components'
import Image from 'next/image'

export const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};
`

export const LeftContainer = styled.div`
  flex: 1;
`

export const CardModalHeader = styled.div`
  p {
    margin-top: 0.6rem;
  }

  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
