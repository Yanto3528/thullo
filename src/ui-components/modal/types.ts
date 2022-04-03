import React from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  width?: React.CSSProperties['width']
  isCenter: boolean
}

export type ModalWrapperProps = Pick<ModalProps, 'width'>
