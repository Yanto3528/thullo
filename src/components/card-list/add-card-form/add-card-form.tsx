import { useForm } from 'react-hook-form'

import { Flex, Button } from '@/ui-components'

import { AddCardFormProps } from './types'
import { Textarea } from './styles'

interface FormValues {
  title: string
}

export const AddCardForm = ({ onToggle, onAddNewCard }: AddCardFormProps) => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    onToggle()
    onAddNewCard(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap='1rem' direction='column' alignItems='stretch'>
        <Textarea rows={4} placeholder='Enter title for this card...' {...register('title', { required: true })} />
        <Flex gap='1rem'>
          <Button>Add card</Button>
          <Button bg='gray3' type='button' onClick={onToggle}>
            Cancel
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}
