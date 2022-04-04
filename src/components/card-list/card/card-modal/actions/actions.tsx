import { Users as UsersIcon, Tag as TagIcon } from 'react-feather'
import { Flex, Button, Text } from '@/ui-components'

import { CoverAction } from './cover-action'

export const Actions = () => {
  return (
    <Flex direction='column' width='15rem' alignItems='stretch' gap='1.2rem'>
      <Text color='gray3'>Actions</Text>
      <CoverAction />
      <Button bg='lightGray' color='gray3'>
        <UsersIcon size='1.2rem' /> Members
      </Button>
      <Button bg='lightGray' color='gray3'>
        <TagIcon size='1.2rem' /> Labels
      </Button>
    </Flex>
  )
}
