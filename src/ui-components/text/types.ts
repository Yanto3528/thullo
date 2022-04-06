import React from 'react'

import { Color } from '@/types'
import { Spacing } from '@/styles/shared'

export interface TextProps extends Spacing {
  size?: React.CSSProperties['fontSize']
  weight?: React.CSSProperties['fontWeight']
  family?: React.CSSProperties['fontFamily']
  lineHeight?: React.CSSProperties['lineHeight']
  align?: React.CSSProperties['textAlign']
  color?: keyof Color
}
