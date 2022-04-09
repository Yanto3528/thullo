import { ModalProps } from '@/ui-components'

export interface BoardModalProps extends ModalProps {
  onAddNewBoard: (data: AddNewBoardData) => void
}

export interface BoardFormValues {
  title: string
  coverImage: File | string
}

export interface AddNewBoardData {
  title: string
  coverImage?: string
}
