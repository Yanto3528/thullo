import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Flex, Avatar, Text } from '@/ui-components'

import { CommentProps } from './types'

dayjs.extend(relativeTime)

export const Comment = ({ comment }: CommentProps) => {
  const { author, createdAt, content } = comment
  return (
    <div>
      <Flex gap='1.2rem' alignItems='flex-start' margin='0 0 1.3rem 0'>
        <Avatar name={author.name} />
        <Flex direction='column' gap='0.5rem' alignItems='flex-start'>
          <Text weight={500}>{author.name}</Text>
          <Text color='gray3' family='Noto Sans' size='1.2rem'>
            {dayjs(createdAt).fromNow()}
          </Text>
        </Flex>
      </Flex>
      <Text>{content}</Text>
    </div>
  )
}
