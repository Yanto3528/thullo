import { Plus } from 'react-feather'
import { useForm } from 'react-hook-form'

import { useToggle } from '@/hooks'
import { Button, Input, Flex } from '@/ui-components'

import { AddListFormProps, FormValues } from './types'
import { Wrapper } from './styles'

export const AddListForm = ({ onAddNewList }: AddListFormProps) => {
  const [showForm, { onToggle }] = useToggle()
  const { register, reset, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    onAddNewList(data)
    onToggle()
    reset({ title: '' })
  }

  return (
    <Wrapper>
      {showForm ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap='1rem' direction='column' alignItems='stretch'>
            <Input placeholder='Enter title for this list...' {...register('title', { required: true })} />
            <Flex gap='1rem'>
              <Button>Add list</Button>
              <Button bg='gray3' type='button' onClick={onToggle}>
                Cancel
              </Button>
            </Flex>
          </Flex>
        </form>
      ) : (
        <Button justify='space-between' bg='primaryLight' color='primary' onClick={onToggle} width='100%'>
          Add another list <Plus size='1.4rem' />
        </Button>
      )}
    </Wrapper>
  )
}
