import React from 'react'

export type TextareaEvent = React.ChangeEvent<HTMLTextAreaElement>
export type OnChangeTextarea = (event: TextareaEvent) => void

export interface FormValues {
  content: string
}

export interface CommentFormProps {
  onAddNewComment: (data: FormValues) => void
}
