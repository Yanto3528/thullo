import { useState } from 'react'
import { DragDropContext, DropResult, DragStart, DragUpdate } from 'react-beautiful-dnd'
import NoSSR from 'react-no-ssr'

import { Flex } from '@/ui-components'
import { CardType } from '@/types'

import { List } from './list'
import { generateId, calculateTotalHeight, moveCardInSameList, moveCardBetweenDifferentList } from './helpers'
import type { CardListState, CustomPlaceholderProps } from './types'

const cardListState = {
  cards: {
    'card-1': {
      id: 'card-1',
      title: 'Learn ReactJS',
    },
    'card-2': {
      id: 'card-2',
      title: 'Learn NodeJS',
    },
    'card-3': {
      id: 'card-3',
      title: 'Learn NextJS',
    },
    'card-4': {
      id: 'card-4',
      title: 'Learn Golang',
    },
  },
  list: {
    'list-1': {
      id: 'list-1',
      title: 'Backlog',
      cardIds: ['card-1', 'card-2', 'card-3', 'card-4'],
    },
    'list-2': {
      id: 'list-2',
      title: 'In Progress',
      cardIds: [],
    },
    'list-3': {
      id: 'list-3',
      title: 'Done',
      cardIds: [],
    },
  },
  listOrders: ['list-1', 'list-2', 'list-3'],
}

const queryAttr = 'data-rbd-drag-handle-draggable-id'

export const CardList = () => {
  const [state, setState] = useState<CardListState>(cardListState)
  const [placeholderProps, setPlaceholderProps] = useState<CustomPlaceholderProps | null>(null)

  const onAddNewCard = (listId: string) => {
    return (data: Omit<CardType, 'id'>) => {
      const cardId = generateId()

      setState((currentState) => {
        const newCard = {
          ...currentState.cards,
          [cardId]: {
            ...data,
            id: cardId,
          },
        }

        const newList = {
          ...currentState.list[listId],
          cardIds: [...currentState.list[listId].cardIds, cardId],
        }

        return {
          ...currentState,
          cards: newCard,
          list: {
            ...currentState.list,
            [listId]: newList,
          },
        }
      })
    }
  }

  const getDraggedDom = (draggableId: string) => {
    const domQuery = `[${queryAttr}='${draggableId}']`
    const draggedDOM = document.querySelector(domQuery)

    return draggedDOM
  }

  const onDragStart = (event: DragStart) => {
    const draggedDOM = getDraggedDom(event.draggableId)

    if (!draggedDOM) {
      return
    }

    const { clientHeight, clientWidth } = draggedDOM
    const sourceIndex = event.source.index

    const parentPaddingTop = parseFloat(window.getComputedStyle(draggedDOM.parentNode as Element).paddingTop)
    const clonedChildrenElements = Array.from(draggedDOM.parentNode?.children || []).slice(0, sourceIndex)

    const totalChildrenHeight = calculateTotalHeight(clonedChildrenElements)

    const clientY = parentPaddingTop + totalChildrenHeight
    const clientX = parseFloat(window.getComputedStyle(draggedDOM.parentNode as Element).paddingLeft)

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX,
    })
  }

  const onDragUpdate = (event: DragUpdate) => {
    if (!event.destination) {
      return
    }

    const draggedDOM = getDraggedDom(event.draggableId)

    if (!draggedDOM) {
      return
    }

    const { clientHeight, clientWidth } = draggedDOM
    const destinationIndex = event.destination.index
    const sourceIndex = event.source.index

    const childrenArray = Array.from(draggedDOM.parentNode?.children || [])
    const movedItem = childrenArray[sourceIndex]
    childrenArray.splice(sourceIndex, 1)

    const updatedArray = [
      ...childrenArray.slice(0, destinationIndex),
      movedItem,
      ...childrenArray.slice(destinationIndex + 1),
    ]

    const parentPaddingTop = parseFloat(window.getComputedStyle(draggedDOM.parentNode as Element).paddingTop)
    const totalChildrenHeight = calculateTotalHeight(updatedArray.slice(0, destinationIndex))

    const clientY = parentPaddingTop + totalChildrenHeight
    const clientX = parseFloat(window.getComputedStyle(draggedDOM.parentNode as Element).paddingLeft)

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX,
    })
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const currentList = state.list[source.droppableId]
    const targetList = state.list[destination.droppableId]

    if (currentList === targetList) {
      const newState = moveCardInSameList({ state, currentList, result })

      if (!newState) {
        return
      }

      setState(newState)
      return
    }

    const newState = moveCardBetweenDifferentList({ state, currentList, targetList, result })

    if (!newState) {
      return
    }

    setState(newState)
  }

  return (
    <NoSSR>
      <DragDropContext onDragStart={onDragStart} onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
        <Flex gap='3.2rem' alignItems='flex-start'>
          {state.listOrders.map((listId) => (
            <List
              key={listId}
              state={state}
              listId={listId}
              placeholderProps={placeholderProps}
              onAddNewCard={onAddNewCard}
            />
          ))}
        </Flex>
      </DragDropContext>
    </NoSSR>
  )
}
