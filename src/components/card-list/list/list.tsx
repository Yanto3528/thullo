import { useEffect, useRef, useState } from 'react'
import { MoreHorizontal, Plus } from 'react-feather'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { produce } from 'immer'

import { Flex, Button, Input, Dropdown } from '@/ui-components'
import { IconContainer } from '@/styles/components'
import { useToggle } from '@/hooks'

import { Card } from '../card'
import { AddCardForm } from '../add-card-form'
import { CustomPlaceholder, CardWrapper, Wrapper, ListHeading } from './styles'
import type { ListProps } from './types'

export const List = ({ state, listId, placeholderProps, index, onAddNewCard, setState }: ListProps) => {
  const [showAddCardForm, { onToggle }] = useToggle(false)
  const [showListEditForm, { onToggle: onToggleListForm }] = useToggle(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputValue, setInputValue] = useState(state.list[listId].title)

  useEffect(() => {
    if (showListEditForm) {
      inputRef.current?.focus()
    }
  }, [showListEditForm])

  const updateTitle = () => {
    setState((currentState) => {
      return produce(currentState, (draft) => {
        draft.list[listId].title = inputValue
      })
    })
    onToggleListForm()
  }

  const onDeleteList = () => {
    setState((currentState) => {
      return produce(currentState, (draft) => {
        const listIndex = draft.listOrders.findIndex((listOrderId) => listOrderId === listId)
        draft.listOrders.splice(listIndex, 1)
        delete draft.list[listId]
      })
    })
    onToggleListForm()
  }

  const onInputBlur = () => updateTitle()

  const onInputKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code === 'Enter') {
      updateTitle()
    }
  }

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.currentTarget.value)
  }

  return (
    <Draggable draggableId={listId} index={index}>
      {(parentProvided) => (
        <Wrapper {...parentProvided.draggableProps} ref={parentProvided.innerRef}>
          <Flex justify='space-between' {...parentProvided.dragHandleProps}>
            {showListEditForm ? (
              <Input
                placeholder='Edit this form'
                value={inputValue}
                ref={inputRef}
                onBlur={onInputBlur}
                onChange={onInputChange}
                onKeyUp={onInputKeyUp}
              />
            ) : (
              <ListHeading as='h4'>{state.list[listId].title}</ListHeading>
            )}
            <Dropdown
              content={
                <IconContainer>
                  <MoreHorizontal />
                </IconContainer>
              }
            >
              <Dropdown.Item onClick={onToggleListForm}>Rename</Dropdown.Item>
              <Dropdown.Item onClick={onDeleteList}>Delete this list</Dropdown.Item>
            </Dropdown>
          </Flex>
          <Droppable droppableId={listId} type='card'>
            {(provided, snapshot) => (
              <CardWrapper {...provided.droppableProps} ref={provided.innerRef}>
                {state.list[listId].cardIds.map((cardId, cardIndex) => (
                  <Card key={cardId} card={state.cards[cardId]} index={cardIndex} />
                ))}
                {provided.placeholder}
                {placeholderProps && snapshot.isDraggingOver && (
                  <CustomPlaceholder
                    style={{
                      top: placeholderProps.clientY,
                      left: placeholderProps.clientX,
                      height: placeholderProps.clientHeight,
                      width: placeholderProps.clientWidth,
                    }}
                  />
                )}
              </CardWrapper>
            )}
          </Droppable>
          {showAddCardForm ? (
            <AddCardForm onToggle={onToggle} onAddNewCard={onAddNewCard(listId)} />
          ) : (
            <Button justify='space-between' bg='primaryLight' color='primary' onClick={onToggle} width='100%'>
              Add another card <Plus size='1.4rem' />
            </Button>
          )}
        </Wrapper>
      )}
    </Draggable>
  )
}
