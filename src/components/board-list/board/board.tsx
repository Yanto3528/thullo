import Router from 'next/router'

import { Card, Heading, AvatarGroup, Avatar } from '@/ui-components'

import { StyledImage } from './styles'
import { BoardProps } from './types'

const tempImageSrc =
  'https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export const Board = ({ board }: BoardProps) => {
  const onBoardClick = () => {
    Router.push(`/boards/${board.id}`)
  }

  return (
    <Card cursor='pointer' onClick={onBoardClick}>
      <Card.Body>
        <StyledImage src={board.coverImage || tempImageSrc} width={219} height={130} layout='responsive' />
        <Heading as='h3' size='1.6rem' customStyle={{ margin: '1.2rem 0 2.1rem 0' }}>
          {board.title}
        </Heading>
        <AvatarGroup>
          {board.members &&
            board.members.map((member) => {
              if (!member) {
                return null
              }

              return (
                <Avatar key={member.id} name={member.name || ''} src={member.avatar || ''} alt={member.name || ''} />
              )
            })}
        </AvatarGroup>
      </Card.Body>
    </Card>
  )
}
