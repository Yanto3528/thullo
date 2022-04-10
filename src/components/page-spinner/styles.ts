import styled, { keyframes } from 'styled-components'

const spinning = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9100;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0 0 0 / 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.primary};
    animation: ${spinning} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    left: 8px;
    border-radius: ${({ theme }) => theme.radius.sm};
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 32px;
    border-radius: ${({ theme }) => theme.radius.sm};
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 56px;
    border-radius: ${({ theme }) => theme.radius.sm};
    animation-delay: 0;
  }
`
