import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { Avatar, Button } from '@/ui-components'
import { calculateTextareaRows } from '@/utils'

import { FormWrapper, TextareaContainer, StyledTextarea, AvatarContainer, ButtonContainer } from './styles'
import { FormValues, OnChangeTextarea, TextareaEvent, CommentFormProps } from './types'

export const CommentForm = ({ onAddNewComment }: CommentFormProps) => {
  const [rows, setRows] = useState(1)

  const { handleSubmit, control, reset } = useForm<FormValues>()

  const handleChange = (onChangeFn: OnChangeTextarea) => {
    return (event: TextareaEvent) => {
      const currentRows = calculateTextareaRows(event.target)

      setRows(currentRows)
      onChangeFn(event)
    }
  }

  const onSubmit = (data: FormValues) => {
    onAddNewComment(data)
    reset()
  }
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <TextareaContainer>
        <AvatarContainer>
          <Avatar name='Yanto lee' />
        </AvatarContainer>
        <Controller
          render={({ field: { onChange, ...fieldProps } }) => (
            <StyledTextarea
              rows={rows}
              placeholder='Write a comment...'
              onChange={handleChange(onChange)}
              {...fieldProps}
            />
          )}
          control={control}
          name='content'
          rules={{ required: true }}
          defaultValue=''
        />
        <ButtonContainer>
          <Button>Comment</Button>
        </ButtonContainer>
      </TextareaContainer>
    </FormWrapper>
  )
}
