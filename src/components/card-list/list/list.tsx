import { MoreHorizontal, Plus } from 'react-feather'
import { Droppable } from 'react-beautiful-dnd'

import { Flex, Heading, Button } from '@/ui-components'
import { useToggle } from '@/hooks'

import { Card } from '../card'
import { AddCardForm } from '../add-card-form'
import { CustomPlaceholder, ListWrapper, Wrapper } from './styles'
import type { ListProps } from './types'

export const List = ({ state, listId, placeholderProps, onAddNewCard }: ListProps) => {
  const [showForm, { onToggle }] = useToggle(false)

  return (
    <Wrapper>
      <Flex justify='space-between'>
        <Heading as='h4'>{state.list[listId].title}</Heading>
        <MoreHorizontal />
      </Flex>
      <Droppable droppableId={listId}>
        {(provided, snapshot) => (
          <ListWrapper {...provided.droppableProps} ref={provided.innerRef}>
            {state.list[listId].cardIds.map((cardId, index) => (
              <Card key={cardId} card={state.cards[cardId]} index={index} />
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
          </ListWrapper>
        )}
      </Droppable>
    </Wrapper>
  )
}
