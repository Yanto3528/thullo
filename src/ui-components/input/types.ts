import React from 'react'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
}
