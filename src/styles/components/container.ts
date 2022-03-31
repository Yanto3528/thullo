import styled from 'styled-components'

interface ContainerProps {
  maxWidth?: string
}

export const Container = styled.div<ContainerProps>`
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  padding: 0 2.4rem;
  margin: 0 auto;
`
