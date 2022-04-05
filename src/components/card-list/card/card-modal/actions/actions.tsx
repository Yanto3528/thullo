import { Tool } from 'react-feather'
import { Flex, Text } from '@/ui-components'
import { theme } from '@/styles/theme'

import { CoverAction } from './cover-action'
import { LabelAction } from './label-action'
import { MembersAction } from './members-action'

export const Actions = () => {
  return (
    <Flex direction='column' width='15rem' alignItems='stretch' gap='1.2rem'>
      <Flex gap='0.5rem'>
        <Tool fill={theme.colors.gray3} size='1.2rem' color={theme.colors.gray3} />
        <Text color='gray3' size='1.2rem'>
          Actions
        </Text>
      </Flex>
      <CoverAction />
      <LabelAction />
      <MembersAction />
    </Flex>
  )
}
