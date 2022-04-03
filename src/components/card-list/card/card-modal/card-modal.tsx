import { Users as UsersIcon, Tag as TagIcon, Image as ImageIcon } from 'react-feather'
import { Modal, ModalProps, Flex, Heading, Button, Text } from '@/ui-components'

import { Description } from './description'
import { AttachmentList } from './attachment-list'
import { CommentList } from './comment-list'
import { StyledImage, CardModalHeader, LeftContainer } from './styles'

const tempImageSrc =
  'https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export const CardModal = (props: ModalProps) => {
  return (
    <Modal {...props} width='66.1rem' isCenter={false}>
      <StyledImage src={tempImageSrc} width={616} height={120} />
      <Flex gap='2.3rem' margin='2.5rem 0 0 0' alignItems='flex-start'>
        <LeftContainer>
          <CardModalHeader>
            <Heading as='h3'>Move anything that is actually started here</Heading>
            <Text size='1.2rem'>
              in list <strong>In Progress</strong>
            </Text>
          </CardModalHeader>
          <Description />
          <AttachmentList />
          <CommentList />
        </LeftContainer>
        <Flex direction='column' width='15rem' alignItems='stretch' gap='1.2rem'>
          <p>Actions</p>
          <Button bg='lightGray' color='gray3'>
            <UsersIcon size='1.2rem' /> Members
          </Button>
          <Button bg='lightGray' color='gray3'>
            <TagIcon size='1.2rem' /> Labels
          </Button>
          <Button bg='lightGray' color='gray3'>
            <ImageIcon size='1.2rem' /> Cover
          </Button>
        </Flex>
      </Flex>
    </Modal>
  )
}
