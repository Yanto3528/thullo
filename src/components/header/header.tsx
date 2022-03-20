import { Plus, Lock, MoreHorizontal } from 'react-feather'

import { Flex, Button, Avatar } from '@/ui-components'

import { Wrapper } from './styles'

const avatarSrc =
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

export const Header = () => {
  return (
    <Wrapper>
      <Flex gap='1.6rem'>
        <Button bg='lightGray' color='gray3'>
          <Lock size='1.2rem' />
          <p>Private</p>
        </Button>
        <Flex gap='1.6rem'>
          <Avatar src={avatarSrc} alt='avatar' />
          <Avatar src={avatarSrc} alt='avatar' />
          <Avatar src={avatarSrc} alt='avatar' />
          <Avatar src={avatarSrc} alt='avatar' />
        </Flex>
        <Button width='3rem' padding='0.8rem'>
          <Plus size='1.4rem' />
        </Button>
      </Flex>
      <Button bg='lightGray' color='gray3'>
        <MoreHorizontal size='1.2rem' />
        Show Menu
      </Button>
    </Wrapper>
  )
}
