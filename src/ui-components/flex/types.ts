import { CSSProperties } from 'styled-components'

export interface FlexProps {
  alignItems?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  gap?: CSSProperties['gap']
  wrap?: CSSProperties['flexWrap']
  direction?: CSSProperties['flexDirection']
}
