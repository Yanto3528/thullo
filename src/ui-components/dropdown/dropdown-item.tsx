import React from 'react'

import { DropdownItemContainer } from './styles'

export const DropdownItem: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, ...props }) => {
  return <DropdownItemContainer {...props}>{children}</DropdownItemContainer>
}
