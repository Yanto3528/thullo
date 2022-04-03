import { FileText, Edit2 } from 'react-feather'
import { Flex, Text, Button } from '@/ui-components'
import { theme } from '@/styles/theme'

import { Attachment } from './attachment'
import { Wrapper } from './styles'

export const AttachmentList = () => {
  return (
    <Wrapper>
      <Flex gap='1.5rem' margin='0 0 2rem 0'>
        <Flex gap='0.5rem'>
          <FileText size='1.2rem' color={theme.colors.gray3} />
          <Text color='gray3' size='1.2rem'>
            Attachments
          </Text>
        </Flex>
        <Button>
          <Edit2 size='1.2rem' /> Edit
        </Button>
      </Flex>
      <Attachment />
      <Attachment />
    </Wrapper>
  )
}
