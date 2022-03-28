import { CardType } from '@/types'

export interface AddCardFormProps {
  onToggle: () => void
  onAddNewCard: (card: Omit<CardType, 'id'>) => void
}

export interface FormValues {
  title: string
}
