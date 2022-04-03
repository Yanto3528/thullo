import React, { useState } from 'react'

import { Divider } from '@/ui-components'
import { CommentType } from '@/types'
import { generateId } from '@/utils'

import { Wrapper } from './styles'
import { CommentForm } from './comment-form'
import { Comment } from './comment'

export const CommentList = () => {
  const [comments, setComments] = useState<CommentType[]>([])

  const onAddNewComment = (data: { content: string }) => {
    const newComment = {
      id: generateId(),
      author: {
        name: 'Yanto Lee',
        avatar: '',
      },
      createdAt: new Date(),
      content: data.content,
    }
    setComments((currentComments) => [...currentComments, newComment])
  }

  return (
    <Wrapper>
      <CommentForm onAddNewComment={onAddNewComment} />
      {comments.map((comment, commentIndex) => {
        const isLastElement = commentIndex === comments.length - 1
        return (
          <>
            <Comment key={comment.id} comment={comment} />
            {!isLastElement && <Divider spacing='2rem' />}
          </>
        )
      })}
    </Wrapper>
  )
}
