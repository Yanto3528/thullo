import { DropResult } from 'react-beautiful-dnd'
import { CardType } from '@/types'

interface List {
  id: string
  title: string
  cardIds: string[]
}

export interface CardListState {
  list: {
    [key: List['id']]: List
  }
  cards: {
    [key: CardType['id']]: CardType
  }
  listOrders: string[]
}

export interface CustomPlaceholderProps {
  clientY: number
  clientX: number
  clientHeight: number
  clientWidth: number
}

export interface MoveCardInSameListProps {
  state: CardListState
  currentList: List
  result: DropResult
}

export interface MoveCardBetweenDifferentListProps extends MoveCardInSameListProps {
  targetList: List
}

export interface AddNewList {
  title: string
}
