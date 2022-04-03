import { Plus } from 'react-feather'
import { Draggable } from 'react-beautiful-dnd'

import { Heading, Badge, Flex, Button } from '@/ui-components'
import { useToggle } from '@/hooks'

import { CardProps } from './types'
import { Wrapper } from './styles'
import { CardModal } from './card-modal'

export const Card = ({ card, index }: CardProps) => {
  const { id, title } = card

  const [showModal, { onToggle }] = useToggle()

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Wrapper {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onClick={onToggle}>
          <Heading as='h4' family='Noto Sans' size='1.6rem'>
            {title}
          </Heading>
          <Flex gap='1rem' wrap='wrap' margin='1.2rem 0'>
            <Badge>Concept</Badge>
          </Flex>
          <Flex gap='0.8rem'>
            <Button width='2.8rem' padding='0.8rem'>
              <Plus size='1.2rem' />
            </Button>
          </Flex>
          <CardModal isOpen={showModal} onClose={onToggle} />
        </Wrapper>
      )}
    </Draggable>
  )
}
