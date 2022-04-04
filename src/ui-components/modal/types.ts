import React from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  width?: React.CSSProperties['width']
  position: 'start' | 'center'
}

export type ModalWrapperProps = Pick<ModalProps, 'width'>
