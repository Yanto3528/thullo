import { Download as DownloadIcon, Trash } from 'react-feather'
import { Flex, Text, Button } from '@/ui-components'

import { StyledImage } from './styles'

const tempImageSrc =
  'https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export const Attachment = () => {
  return (
    <Flex gap='1.3rem' alignItems='stretch' margin='0 0 2rem 0'>
      <StyledImage src={tempImageSrc} alt='image' />
      <Flex direction='column' gap='0.5rem' alignItems='stretch'>
        <Text color='gray3' size='1.2rem'>
          Added 01 April 2022
        </Text>
        <Text weight={500}>Reasoning by Ranganath Krishnamani</Text>
        <Flex gap='0.85rem'>
          <Button>
            <DownloadIcon size='1.2rem' /> Download
          </Button>
          <Button bg='red'>
            <Trash size='1.2rem' /> Delete
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
