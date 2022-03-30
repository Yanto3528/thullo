import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { useClickOutside, useToggle } from '@/hooks'

import { DropdownItem } from './dropdown-item'
import { DropdownProps, DropdownComposition, DropdownKeyboardEvent } from './types'
import { DropdownWrapper, ContentWrapper } from './styles'
import { slideFadeIn } from './animation'

export const Dropdown: React.FC<DropdownProps> & DropdownComposition = ({ content, children, ...props }) => {
  const [isOpen, { onClose, onToggle }] = useToggle(false)
  const contentWrapperRef = useClickOutside<HTMLDivElement>(onClose)

  const onKeyUp: DropdownKeyboardEvent = (event) => {
    if (event.code === 'Enter') {
      onToggle()
    }
  }

  return (
    <ContentWrapper>
      <div onClick={onToggle} ref={contentWrapperRef} onKeyUp={onKeyUp} role='button' tabIndex={0}>
        {content}
      </div>
      <AnimatePresence>
        {isOpen && (
          <DropdownWrapper variants={slideFadeIn} {...props}>
            {children}
          </DropdownWrapper>
        )}
      </AnimatePresence>
    </ContentWrapper>
  )
}

Dropdown.Item = DropdownItem
