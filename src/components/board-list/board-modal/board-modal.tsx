import React, { useState } from 'react'
import { Image as ImageIcon, Lock, Plus } from 'react-feather'
import { useForm, Controller, ControllerRenderProps } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Modal, Input, Flex, Button } from '@/ui-components'
import { imagekitClient } from '@/lib/imagekit/client'

import { ImagePlaceholder, CoverUploadLabel, UploadIconContainer } from './styles'
import { BoardModalProps, BoardFormValues } from './types'

const tempImageSrc =
  'https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export const BoardModal: React.FC<BoardModalProps> = ({ onClose, onAddNewBoard, ...props }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('')
  const [fileValue, setFileValue] = useState('')

  const { register, reset, handleSubmit, control } = useForm<BoardFormValues>()

  const onSubmit = async (data: BoardFormValues) => {
    if (data.coverImage && data.coverImage instanceof File) {
      imagekitClient.upload(
        {
          file: data.coverImage,
          fileName: data.coverImage.name,
          folder: '/thullo',
          useUniqueFileName: true,
        },
        (err, result) => {
          if (err) {
            toast.error('Something went wrong when uploading image. Please try again')
            return
          }

          onAddNewBoard({ ...data, coverImage: result?.url })
          reset({
            title: '',
            coverImage: '',
          })
          onClose()
        }
      )
    } else {
      onAddNewBoard({ ...data, coverImage: undefined })
      reset({
        title: '',
        coverImage: '',
      })
      onClose()
    }
  }

  const handleFileChange = (onChangeFn: ControllerRenderProps['onChange']) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event?.target) {
        const file = event?.target?.files?.[0] as File

        const urlPreview = URL.createObjectURL(file)
        setImagePreviewUrl(urlPreview)
        setFileValue(event.target.value)
        onChangeFn(file)
      }
    }
  }

  return (
    <Modal {...props} onClose={onClose} width='30rem'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction='column' gap='2rem' alignItems='stretch'>
          <Flex direction='column' gap='1rem' alignItems='stretch'>
            <ImagePlaceholder src={imagePreviewUrl || tempImageSrc} alt='image' />
            <Input placeholder='Enter board title' {...register('title', { required: true })} />
          </Flex>
          <Flex justify='space-between' gap='2rem'>
            <CoverUploadLabel htmlFor='file'>
              <Controller
                render={({ field: { onChange, ref, onBlur } }) => (
                  <input
                    type='file'
                    id='file'
                    onChange={handleFileChange(onChange)}
                    ref={ref}
                    onBlur={onBlur}
                    value={fileValue}
                  />
                )}
                control={control}
                name='coverImage'
              />
              <UploadIconContainer>
                <ImageIcon size='1.2rem' />
              </UploadIconContainer>
              <span>Cover</span>
            </CoverUploadLabel>
            <Button bg='lightGray' color='gray3' width='100%' type='button'>
              <Lock size='1.2rem' /> Private
            </Button>
          </Flex>
          <Flex justify='flex-end' gap='1rem'>
            <Button>
              <Plus size='1.2rem' /> Create
            </Button>
          </Flex>
        </Flex>
      </form>
    </Modal>
  )
}
