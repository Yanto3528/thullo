import { ModalProps } from '@/ui-components'

export interface BoardModalProps extends ModalProps {
  onAddNewBoard: (data: BoardFormValues) => void
}

export interface BoardFormValues {
  title: string
}
