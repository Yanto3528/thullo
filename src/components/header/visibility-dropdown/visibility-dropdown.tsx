import { Lock, Globe } from 'react-feather'

import { Button, Dropdown, Text, Flex } from '@/ui-components'

import { Wrapper } from './styles'

export const VisibilityDropdown = () => {
  return (
    <Dropdown
      width='25.3rem'
      content={
        <Button bg='lightGray' color='gray3'>
          <Lock size='1.2rem' />
          Private
        </Button>
      }
    >
      <Wrapper>
        <Flex direction='column' gap='0.5rem' alignItems='flex-start'>
          <Text weight={600} color='gray2'>
            Visibility
          </Text>
          <Text size='1.2rem' color='gray3' family='Noto Sans'>
            Choose who can see to this board.
          </Text>
        </Flex>
        <Dropdown.Item>
          <Flex direction='column' gap='0.8rem' alignItems='stretch'>
            <Flex gap='0.8rem'>
              <Globe size='1.2rem' />{' '}
              <Text family='Noto Sans' weight={500}>
                Public
              </Text>
            </Flex>
            <Text size='1.2rem' family='Noto Sans'>
              Anyone on the internet can see this.
            </Text>
          </Flex>
        </Dropdown.Item>
        <Dropdown.Item>
          <Flex direction='column' gap='0.8rem' alignItems='stretch'>
            <Flex gap='0.8rem'>
              <Lock size='1.2rem' />{' '}
              <Text family='Noto Sans' weight={500}>
                Private
              </Text>
            </Flex>
            <Text size='1.2rem' family='Noto Sans'>
              Only board members can see this
            </Text>
          </Flex>
        </Dropdown.Item>
      </Wrapper>
    </Dropdown>
  )
}
