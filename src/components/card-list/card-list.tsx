import { MoreHorizontal } from 'react-feather'

import { Flex, Heading } from '@/ui-components'
import { Card } from './card'

import { Wrapper } from './styles'

export const CardList = () => {
  return (
    <Flex gap='3.2rem'>
      <Wrapper>
        <Flex justify='space-between'>
          <Heading as='h4'>Backlog</Heading>
          <MoreHorizontal />
        </Flex>
        <Flex direction='column' gap='2.4rem' alignItems='stretch' margin='1.7rem 0 0 0'>
          <Card />
          <Card />
          <Card />
        </Flex>
      </Wrapper>
      <Wrapper>
        <Flex justify='space-between'>
          <Heading as='h4'>Backlog</Heading>
          <MoreHorizontal />
        </Flex>
        <Flex direction='column' gap='2.4rem' alignItems='stretch' margin='1.7rem 0 0 0'>
          <Card />
          <Card />
          <Card />
        </Flex>
      </Wrapper>
      <Wrapper>
        <Flex justify='space-between'>
          <Heading as='h4'>Backlog</Heading>
          <MoreHorizontal />
        </Flex>
        <Flex direction='column' gap='2.4rem' alignItems='stretch' margin='1.7rem 0 0 0'>
          <Card />
          <Card />
          <Card />
        </Flex>
      </Wrapper>
    </Flex>
  )
}
