import Image from 'next/image'
import { Search } from 'react-feather'

import { Divider, Text, Flex, Input, Avatar } from '@/ui-components'

import { Wrapper, LogoContainer, DividerContainer } from './styles'

const avatarSrc =
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

export const Header = () => {
  return (
    <Wrapper>
      <Flex>
        <LogoContainer>
          <Image src='/images/logo.svg' width={85} height={29} alt='thullo logo' />
        </LogoContainer>
        <Text weight={500} size='1.8rem'>
          Devchallenges Board
        </Text>
        <DividerContainer>
          <Divider orientation='vertical' spacing='2.4rem' />
        </DividerContainer>
      </Flex>
      <Flex gap='4.5rem'>
        <Input placeholder='Keyword...' rightElement={<Search size='1.6rem' />} />
        <Avatar src={avatarSrc} size='3.5rem' />
      </Flex>
    </Wrapper>
  )
}
