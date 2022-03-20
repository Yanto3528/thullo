import 'styled-components'
import { Color, Radius } from '../types'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Color
    radius: Radius
  }
}
