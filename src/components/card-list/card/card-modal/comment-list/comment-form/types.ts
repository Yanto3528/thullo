import React from 'react'

export type TextareaEvent = React.ChangeEvent<HTMLTextAreaElement>
export type onChangeTextarea = (event: TextareaEvent) => void

export interface FormValues {
  content: string
}

export interface CommentFormProps {
  onAddNewComment: (data: FormValues) => void
}
