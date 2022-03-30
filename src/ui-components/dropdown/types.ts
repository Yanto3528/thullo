import React from 'react'

export interface DropdownProps {
  content: React.ReactNode
}

export type DropdownKeyboardEvent = React.KeyboardEventHandler<HTMLDivElement>

export interface DropdownComposition {
  Item: React.FC<React.ComponentPropsWithoutRef<'div'>>
}
