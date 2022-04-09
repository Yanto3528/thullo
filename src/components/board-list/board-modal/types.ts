import { ModalProps } from '@/ui-components'

export interface BoardModalProps extends ModalProps {
  onAddNewBoard: (data: BoardFormValues) => void
}

export interface BoardFormValues {
  title: string
}

export interface ImageUploadData {
  fileId: string
  filePath: string
  fileType: string
  height: number
  width: number
  name: string
  size: number
  thumbnailUrl: string
  url: string
}
