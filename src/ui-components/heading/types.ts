import React from 'react'
import { CSSObject } from 'styled-components'

export interface HeadingProps {
  size?: string
  weight?: string | number
  family?: string
  align?: React.CSSProperties['textAlign']
  as?: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
  customStyle?: TemplateStringsArray | CSSObject
}
