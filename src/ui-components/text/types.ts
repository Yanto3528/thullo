import { Color } from '@/types'
import React from 'react'

export interface TextProps {
  size?: React.CSSProperties['fontSize']
  weight?: React.CSSProperties['fontWeight']
  family?: React.CSSProperties['fontFamily']
  lineHeight?: React.CSSProperties['lineHeight']
  color?: keyof Color
}
