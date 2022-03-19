import 'styled-components'
import { Color } from '../types'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Color
  }
}
