import { CardType } from '@/types'

import { CardListState, CustomPlaceholderProps } from '../types'

export interface ListProps {
  state: CardListState
  listId: string
  placeholderProps: CustomPlaceholderProps | null
  onAddNewCard: (listId: string) => (data: Omit<CardType, 'id'>) => void
  index: number
}
