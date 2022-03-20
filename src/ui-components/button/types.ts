import React from 'react'

import { Color } from '@/types'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: keyof Color
  bg?: keyof Color
  width?: string
  height?: string
  padding?: string
}
