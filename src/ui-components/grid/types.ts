import React from 'react'
import { CSSObject } from 'styled-components'

import { MediaQuery } from '@/constants'

export interface GridProps {
  gap?: React.CSSProperties['gap']
  columnGap?: React.CSSProperties['columnGap']
  rowGap?: React.CSSProperties['rowGap']
  alignItems?: React.CSSProperties['alignItems']
  justify?: React.CSSProperties['justifyContent']
  minChildWidth?: string
  maxChildWidth?: string
  columns?: Record<keyof typeof columnsMap, string> | number
  customStyle?: TemplateStringsArray | CSSObject
}

export const columnsMap = {
  '3xl': MediaQuery.FULL_HD,
  '2xl': MediaQuery.MEDIUM_SCREEN,
  xl: MediaQuery.DESKTOP,
  lg: MediaQuery.TABLET,
  md: MediaQuery.DOUBLE_SMALLEST,
  sm: MediaQuery.PHONE,
  xs: MediaQuery.SMALLEST,
} as const
