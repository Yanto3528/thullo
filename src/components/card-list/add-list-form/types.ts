import { AddNewList } from '../types'

export interface AddListFormProps {
  onAddNewList: (data: AddNewList) => void
}

export interface FormValues {
  title: string
}
