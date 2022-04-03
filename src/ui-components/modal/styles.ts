import styled from 'styled-components'
import { motion } from 'framer-motion'

import { ModalWrapperProps, ModalProps } from './types'

export const Overlay = styled(motion.div)<Pick<ModalProps, 'isCenter'>>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0 0 0 / 20%);
  display: flex;
  align-items: ${({ isCenter }) => (isCenter ? 'center' : 'flex-start')};
  justify-content: center;
  padding: 2rem;
  overflow: auto;
  z-index: 2000;
`

export const Wrapper = styled(motion.div).attrs<ModalWrapperProps>(() => ({
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}))<ModalWrapperProps>`
  padding: 2.4rem;
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.lg};
  position: relative;
  width: ${({ width }) => width};
  max-width: 100%;
`

export const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
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
