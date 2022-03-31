import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0 0 0 / 20%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`

export const Wrapper = styled(motion.div).attrs(() => ({
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}))`
  padding: 2.4rem;
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.lg};
  position: relative;
`

export const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, -100%);
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  color: white;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
`
