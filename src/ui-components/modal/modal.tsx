import React from 'react'
import { X as CloseIcon } from 'react-feather'
import { AnimatePresence } from 'framer-motion'

import { Portal } from '../portal'
import { Overlay, Wrapper, CloseWrapper } from './styles'
import { modalSlideIn, overlayFadeIn } from './animation'
import { ModalProps } from './types'

export const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, ...props }) => {
  const onStopPropagation = (event: React.SyntheticEvent) => {
    event.stopPropagation()
  }

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <Overlay variants={overlayFadeIn} onClick={onClose}>
            <Wrapper variants={modalSlideIn} onClick={onStopPropagation} {...props}>
              <CloseWrapper onClick={onClose}>
                <CloseIcon size='1.6rem' />
              </CloseWrapper>
              {children}
            </Wrapper>
          </Overlay>
        )}
      </AnimatePresence>
    </Portal>
  )
}
