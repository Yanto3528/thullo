import React from 'react'

export interface DropdownProps {
  content: React.ReactNode
  width?: React.CSSProperties['width']
}

export interface DropdownComposition {
  Item: React.FC<React.ComponentPropsWithoutRef<'div'>>
}

export type DropdownKeyboardEvent = React.KeyboardEventHandler<HTMLDivElement>
export type DropdownWrapperProps = Pick<DropdownProps, 'width'>
