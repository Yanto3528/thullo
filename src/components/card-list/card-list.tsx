import { useState } from 'react'
import { MoreHorizontal, Plus } from 'react-feather'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import NoSSR from 'react-no-ssr'

import { Flex, Heading, Button } from '@/ui-components'
import { useToggle } from '@/hooks'
import { CardType } from '@/types'

import { Card } from './card'
import { Wrapper } from './styles'
import { AddCardForm } from './add-card-form'

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
  },
  listOrders: ['list-1'],
}

const generateId = () => {
  return Math.random() * 100 + new Date().toString()
}

interface CardListState {
  list: {
    [key: string]: {
      id: string
      title: string
      cardIds: string[]
    }
  }
  cards: {
    [key: CardType['id']]: CardType
  }
  listOrders: string[]
}

export const CardList = () => {
  const [showForm, { onToggle }] = useToggle(false)
  const [state, setState] = useState<CardListState>(cardListState)

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

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const currentDraggedList = state.list[source.droppableId]
    const newCardIds = [...currentDraggedList.cardIds]
    newCardIds.splice(source.index, 1)
    newCardIds.splice(destination.index, 0, draggableId)

    const newList = {
      ...currentDraggedList,
      cardIds: newCardIds,
    }

    const newState = {
      ...state,
      list: {
        ...state.list,
        [newList.id]: newList,
      },
    }

    setState(newState)
  }

  return (
    <NoSSR>
      <DragDropContext onDragEnd={onDragEnd}>
        {state.listOrders.map((listId) => (
          <Flex gap='3.2rem' alignItems='flex-start' key={listId}>
            <Wrapper>
              <Flex justify='space-between'>
                <Heading as='h4'>Backlog</Heading>
                <MoreHorizontal />
              </Flex>
              <Droppable droppableId={listId}>
                {(provided) => (
                  <Flex
                    direction='column'
                    alignItems='stretch'
                    margin='1.7rem 0 0 0'
                    {...provided.droppableProps}
                    innerRef={provided.innerRef}
                  >
                    {state.list[listId].cardIds.map((cardId, index) => (
                      <Card key={cardId} card={state.cards[cardId]} index={index} />
                    ))}
                    {provided.placeholder}
                    {showForm ? (
                      <AddCardForm onToggle={onToggle} onAddNewCard={onAddNewCard(listId)} />
                    ) : (
                      <Button justify='space-between' bg='primaryLight' color='primary' onClick={onToggle}>
                        Add another card <Plus size='1.4rem' />
                      </Button>
                    )}
                  </Flex>
                )}
              </Droppable>
            </Wrapper>
          </Flex>
        ))}
      </DragDropContext>
    </NoSSR>
  )
}
