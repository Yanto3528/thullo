import { DividerWrapper } from './styles'
import { DividerProps } from './types'

export const Divider = ({ orientation = 'horizontal', ...props }: DividerProps) => {
  return <DividerWrapper orientation={orientation} {...props} />
}
