import { Users as UsersIcon, Plus, Search } from 'react-feather'
import { Flex, Button, Text, Dropdown, Input, Avatar } from '@/ui-components'
import { theme } from '@/styles/theme'

import { MembersContainer, Wrapper } from './styles'

export const MembersAction = () => {
  return (
    <Flex direction='column' alignItems='stretch' gap='2rem'>
      <Flex gap='0.5rem' margin='2rem 0 0 0'>
        <UsersIcon fill={theme.colors.gray3} size='1.2rem' color={theme.colors.gray3} />
        <Text color='gray3' size='1.2rem'>
          Members
        </Text>
      </Flex>
      <Dropdown
        width='24.5rem'
        content={
          <Button bg='primaryLight' color='primary' padding='0.8rem 1.2rem'>
            Assign a member <Plus size='1.2rem' />
          </Button>
        }
      >
        <Wrapper>
          <Flex direction='column' alignItems='flex-start' gap='0.5rem'>
            <Text weight={600} size='1.2rem'>
              Members
            </Text>
            <Text color='gray3' size='1.2rem' family='Noto Sans'>
              Assign members to this card{' '}
            </Text>
          </Flex>
          <Input placeholder='Search user...' rightElement={<Search size='1.4rem' />} />
          <MembersContainer>
            <Dropdown.Item>
              <Avatar name='Yanto Lee' />
              <Text weight={600} color='gray1'>
                Yanto lee
              </Text>
            </Dropdown.Item>
            <Dropdown.Item>
              <Avatar name='Yanto Lee' />
              <Text weight={600} color='gray1'>
                Yanto lee
              </Text>
            </Dropdown.Item>
          </MembersContainer>
          <Flex justify='center'>
            <Button padding='1rem 2.4rem'>Invite</Button>
          </Flex>
        </Wrapper>
      </Dropdown>
    </Flex>
  )
}
