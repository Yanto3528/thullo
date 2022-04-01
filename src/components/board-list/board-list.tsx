import { useState } from 'react'
import { Plus } from 'react-feather'

import { Heading, Flex, Grid, Button } from '@/ui-components'
import { useToggle } from '@/hooks'
import { generateId } from '@/utils'
import { BoardType } from '@/types'

import { Board } from './board'
import { BoardModal } from './board-modal'
import { Wrapper } from './styles'

export const BoardList = () => {
  const [showModal, { onOpen, onClose }] = useToggle()
  const [boards, setBoards] = useState<BoardType[]>([])

  const onAddNewBoard = (data: { title: string }) => {
    const id = generateId()
    const newBoard = {
      ...data,
      id,
      coverImage: '',
      visibility: 'public',
    }
    setBoards((currentBoards) => [...currentBoards, newBoard])
  }

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
      <Grid gap='4.2rem' columns={{ '2xl': 4, xl: 3, lg: 2, md: 1 }}>
        {boards.map((board) => (
          <Board key={board.id} board={board} />
        ))}
      </Grid>
      <BoardModal isOpen={showModal} onClose={onClose} onAddNewBoard={onAddNewBoard} />
    </Wrapper>
  )
}
