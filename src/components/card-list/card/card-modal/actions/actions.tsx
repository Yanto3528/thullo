import { Users as UsersIcon } from 'react-feather'
import { Flex, Button, Text } from '@/ui-components'

import { CoverAction } from './cover-action'
import { LabelAction } from './label-action'

export const Actions = () => {
  return (
    <Flex direction='column' width='15rem' alignItems='stretch' gap='1.2rem'>
      <Text color='gray3'>Actions</Text>
      <CoverAction />
      <LabelAction />
      <Button bg='lightGray' color='gray3'>
        <UsersIcon size='1.2rem' /> Members
      </Button>
    </Flex>
  )
}
