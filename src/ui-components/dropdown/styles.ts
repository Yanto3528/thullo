import styled from 'styled-components'
import { motion } from 'framer-motion'

import { DropdownWrapperProps } from './types'

export const DropdownWrapper = styled(motion.div).attrs<DropdownWrapperProps>(() => ({
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}))<DropdownWrapperProps>`
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 1px 5px rgba(0 0 0 / 10%);
  width: ${({ width }) => width};
  position: absolute;
  bottom: -1rem;
  right: 100%;
  transform: translate(100%, 100%);
  z-index: 1000;
`

export const ContentWrapper = styled.div`
  position: relative;
`

export const DropdownItemContainer = styled.div`
  padding: 1.4rem 1.2rem;
  color: ${({ theme }) => theme.colors.gray3};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-radius: ${({ theme }) => theme.radius.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray2};
  }
`
