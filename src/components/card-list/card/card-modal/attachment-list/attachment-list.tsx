import { FileText, Edit2 } from 'react-feather'
import { Flex, Text, Button } from '@/ui-components'
import { Attachment } from './attachment'

export const AttachmentList = () => {
  return (
    <div>
      <Flex gap='1.5rem' margin='0 0 2rem 0'>
        <Text color='gray3' size='1.2rem'>
          <FileText size='1.2rem' /> Attachments
        </Text>
        <Button>
          <Edit2 size='1.2rem' /> Edit
        </Button>
      </Flex>
      <Attachment />
      <Attachment />
    </div>
  )
}
