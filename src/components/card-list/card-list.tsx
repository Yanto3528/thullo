import { useState } from 'react'
import { DragDropContext, Droppable, DropResult, DragStart, DragUpdate } from 'react-beautiful-dnd'
import { produce } from 'immer'
import NoSSR from 'react-no-ssr'

import { Flex } from '@/ui-components'
import { CardType } from '@/types'
import { generateId } from '@/utils'

import { List } from './list'
import { AddListForm } from './add-list-form'
import { calculateTotalHeight, moveCardInSameList, moveCardBetweenDifferentList } from './helpers'
import type { CardListState, CustomPlaceholderProps, AddNewList } from './types'

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
  },
  listOrders: ['list-1', 'list-2'],
}

const draggableQuery = 'data-rbd-drag-handle-draggable-id'
const droppableQuery = 'data-rbd-droppable-id'

export const CardList = () => {
  const [state, setState] = useState<CardListState>(cardListState)
  const [placeholderProps, setPlaceholderProps] = useState<CustomPlaceholderProps | null>(null)

  const onAddNewList = (data: AddNewList) => {
    const listId = generateId()

    setState((currentState) => {
      return produce(currentState, (draft) => {
        draft.list[listId] = {
          id: listId,
          title: data.title,
          cardIds: [],
        }
        draft.listOrders.push(listId)
      })
    })
  }

  const onAddNewCard = (listId: string) => {
    return (data: Omit<CardType, 'id'>) => {
      const cardId = generateId()

      setState((currentState) => {
        return produce(currentState, (draft) => {
          draft.cards[cardId] = {
            ...data,
            id: cardId,
          }
          draft.list[listId].cardIds.push(cardId)
        })
      })
    }
  }

  const getDraggedDom = (draggableId: string, queryAttr = draggableQuery) => {
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
    let childrenArray = Array.from(draggedDOM.parentNode?.children || [])
    if (event.source.droppableId !== event.destination.droppableId) {
      const targetListDOM = getDraggedDom(event.destination.droppableId, droppableQuery)
      childrenArray = Array.from(targetListDOM?.children || [])
    }

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
    const { destination, source, type, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    if (type === 'list') {
      const newListOrders = [...state.listOrders]
      newListOrders.splice(source.index, 1)
      newListOrders.splice(destination.index, 0, draggableId)

      const newState = {
        ...state,
        listOrders: newListOrders,
      }

      setState(newState)
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
        <Droppable droppableId='all-columns' direction='horizontal' type='list'>
          {(provided) => (
            <Flex
              alignItems='flex-start'
              height='calc(100vh - 14rem)'
              customStyle={{ 'overflow-x': 'auto', padding: '2.4rem' }}
              {...provided.droppableProps}
              innerRef={provided.innerRef}
            >
              {state.listOrders.map((listId, index) => (
                <List
                  key={listId}
                  state={state}
                  setState={setState}
                  listId={listId}
                  index={index}
                  placeholderProps={placeholderProps}
                  onAddNewCard={onAddNewCard}
                />
              ))}
              {provided.placeholder}
              <AddListForm onAddNewList={onAddNewList} />
            </Flex>
          )}
        </Droppable>
      </DragDropContext>
    </NoSSR>
  )
}
