import { Plus } from 'react-feather'

import { Heading, Flex, Grid, Button } from '@/ui-components'
import { useToggle } from '@/hooks'
import { useGetBoardsQuery } from '@/lib/react-query/query'

import { Board } from './board'
import { BoardModal } from './board-modal'
import { Wrapper } from './styles'

export const BoardList = () => {
  const [showModal, { onOpen, onClose }] = useToggle()
  const { data: boards } = useGetBoardsQuery()

  return (
    <Wrapper>
      <Flex justify='space-between' margin='0 0 3.6rem 0'>
        <Heading as='h3' size='1.8rem'>
          All boards
        </Heading>
        <Button onClick={onOpen}>
          <Plus size='1.6rem' /> Add
        </Button>
      </Flex>
      {boards && (
        <Grid gap='4.2rem' columns={{ '2xl': 4, xl: 3, lg: 2, md: 1 }}>
          {boards.map((board) => {
            if (!board) {
              return null
            }

            return <Board key={board.id} board={board} />
          })}
        </Grid>
      )}
      <BoardModal isOpen={showModal} onClose={onClose} />
    </Wrapper>
  )
}
