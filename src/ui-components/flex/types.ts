import React from 'react'

export interface FlexProps {
  alignItems?: React.CSSProperties['alignItems']
  justify?: React.CSSProperties['justifyContent']
  gap?: React.CSSProperties['gap']
  wrap?: React.CSSProperties['flexWrap']
  direction?: React.CSSProperties['flexDirection']
  margin?: string
  width?: string
  innerRef?: React.Ref<HTMLDivElement>
}
