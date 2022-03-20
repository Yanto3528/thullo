import React from 'react'

import { Color } from '@/types'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: keyof Color
}
