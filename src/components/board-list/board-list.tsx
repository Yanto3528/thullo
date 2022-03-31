import { Plus } from 'react-feather'
import { Heading, Flex, Grid, Button } from '@/ui-components'

import { Board } from './board'
import { Wrapper } from './styles'

export const BoardList = () => {
  return (
    <Wrapper>
      <Flex justify='space-between' margin='0 0 3.6rem 0'>
        <Heading as='h3' size='1.8rem'>
          All boards
        </Heading>
        <Button>
          <Plus size='1.6rem' /> Add
        </Button>
      </Flex>
      <Grid gap='4.2rem' columns={{ '2xl': 4, xl: 3, lg: 2, md: 1 }}>
        <Board />
        <Board />
        <Board />
        <Board />
      </Grid>
    </Wrapper>
  )
}
