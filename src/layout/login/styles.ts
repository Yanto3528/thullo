import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  padding-top: 20rem;
`

export const CardFormWrapper = styled.form`
  padding: 2rem;
  margin-top: 3rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 1px 5px rgba(0 0 0 / 10%);
  width: 40rem;
  max-width: 100%;
`
