import { MoveCardInSameListProps, MoveCardBetweenDifferentListProps } from './types'

export const generateId = () => {
  return Math.random() * 100 + new Date().toString()
}

export const calculateTotalHeight = (array: Element[]) => {
  return array.reduce((total, current) => {
    const style = window.getComputedStyle(current)
    const marginBottom = parseFloat(style.marginBottom)
    return total + current.clientHeight + marginBottom
  }, 0)
}

export const moveCardInSameList = ({ state, currentList, result }: MoveCardInSameListProps) => {
  const { source, destination, draggableId } = result

  if (!destination) {
    return undefined
  }

  const newCardIds = [...currentList.cardIds]
  newCardIds.splice(source.index, 1)
  newCardIds.splice(destination.index, 0, draggableId)

  const newList = {
    ...currentList,
    cardIds: newCardIds,
  }

  return {
    ...state,
    list: {
      ...state.list,
      [newList.id]: newList,
    },
  }
}

export const moveCardBetweenDifferentList = ({
  state,
  currentList,
  targetList,
  result,
}: MoveCardBetweenDifferentListProps) => {
  const { source, destination, draggableId } = result

  if (!destination) {
    return undefined
  }

  const newCardsIds = [...currentList.cardIds]
  newCardsIds.splice(source.index, 1)

  const newCurrentList = {
    ...currentList,
    cardIds: newCardsIds,
  }

  const newTargetCardIds = [...targetList.cardIds]
  newTargetCardIds.splice(destination.index, 0, draggableId)
  const newTargetList = {
    ...targetList,
    cardIds: newTargetCardIds,
  }

  return {
    ...state,
    list: {
      ...state.list,
      [newCurrentList.id]: newCurrentList,
      [newTargetList.id]: newTargetList,
    },
  }
}
