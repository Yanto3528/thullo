import { useState } from 'react'
import { MoreHorizontal, Plus } from 'react-feather'

import { Flex, Heading, Button } from '@/ui-components'
import { useToggle } from '@/hooks'
import { CardType } from '@/types'

import { Card } from './card'
import { Wrapper } from './styles'
import { AddCardForm } from './add-card-form'

const generateId = () => {
  return Math.random() * 100 + new Date().toString()
}

export const CardList = () => {
  const [showForm, { onToggle }] = useToggle(false)
  const [cards, setCards] = useState<CardType[]>([])

  const onAddNewCard = (data: Omit<CardType, 'id'>) => {
    setCards((currentCards) => [...currentCards, { id: generateId(), ...data }])
  }

  return (
    <Wrapper>
      <Flex justify='space-between'>
        <Heading as='h4'>Backlog</Heading>
        <MoreHorizontal />
      </Flex>
      <Flex direction='column' gap='2.4rem' alignItems='stretch' margin='1.7rem 0 0 0'>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        {showForm ? (
          <AddCardForm onToggle={onToggle} onAddNewCard={onAddNewCard} />
        ) : (
          <Button justify='space-between' bg='primaryLight' color='primary' onClick={onToggle}>
            Add another card <Plus size='1.4rem' />
          </Button>
        )}
      </Flex>
    </Wrapper>
  )
}
