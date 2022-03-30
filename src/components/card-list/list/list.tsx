import { MoreHorizontal, Plus } from 'react-feather'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { Flex, Heading, Button } from '@/ui-components'
import { useToggle } from '@/hooks'

import { Card } from '../card'
import { AddCardForm } from '../add-card-form'
import { CustomPlaceholder, CardWrapper, Wrapper } from './styles'
import type { ListProps } from './types'

export const List = ({ state, listId, placeholderProps, index, onAddNewCard }: ListProps) => {
  const [showForm, { onToggle }] = useToggle(false)

  return (
    <Draggable draggableId={listId} index={index}>
      {(parentProvided) => (
        <Wrapper {...parentProvided.draggableProps} ref={parentProvided.innerRef}>
          <Flex justify='space-between'>
            <Heading as='h4' {...parentProvided.dragHandleProps}>
              {state.list[listId].title}
            </Heading>
            <MoreHorizontal />
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
                {showForm ? (
                  <AddCardForm onToggle={onToggle} onAddNewCard={onAddNewCard(listId)} />
                ) : (
                  <Button justify='space-between' bg='primaryLight' color='primary' onClick={onToggle}>
                    Add another card <Plus size='1.4rem' />
                  </Button>
                )}
              </CardWrapper>
            )}
          </Droppable>
        </Wrapper>
      )}
    </Draggable>
  )
}
