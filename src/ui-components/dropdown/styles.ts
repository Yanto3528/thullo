import styled from 'styled-components'
import { motion } from 'framer-motion'

export const DropdownWrapper = styled(motion.div).attrs(() => ({
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}))`
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 1px 5px rgba(0 0 0 / 10%);
  width: 15rem;
  position: absolute;
  bottom: 0;
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray2};
  }
`
