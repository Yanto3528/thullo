import { Plus } from 'react-feather'

import { Heading, Badge, Flex, Button } from '@/ui-components'

import { CardProps } from './types'
import { Wrapper } from './styles'

export const Card = ({ card }: CardProps) => {
  const { title } = card
  return (
    <Wrapper>
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
    </Wrapper>
  )
}
