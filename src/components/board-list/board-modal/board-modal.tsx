import React, { useState } from 'react'
import { Image as ImageIcon, Lock, Plus } from 'react-feather'
import { useForm } from 'react-hook-form'
import { IKContext, IKUpload } from 'imagekitio-react'

import { Modal, Input, Flex, Button } from '@/ui-components'

import { ImagePlaceholder, CoverUploadLabel, UploadIconContainer } from './styles'
import { BoardModalProps, BoardFormValues, ImageUploadData } from './types'

const tempImageSrc =
  'https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT
const authenticationEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_AUTHENTICATION_ENDPOINT

export const BoardModal: React.FC<BoardModalProps> = ({ onClose, onAddNewBoard, ...props }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('')

  const { register, reset, handleSubmit } = useForm<BoardFormValues>()

  const onSubmit = (data: BoardFormValues) => {
    onAddNewBoard(data)
    reset()
    onClose()
  }

  const onImageUploadSuccess = (data: ImageUploadData) => {
    setImagePreviewUrl(data.url)
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
              <IKContext
                publicKey={publicKey}
                urlEndpoint={urlEndpoint}
                authenticationEndpoint={authenticationEndpoint}
              >
                <IKUpload id='file' folder='/thullo' useUniqueFileName onSuccess={onImageUploadSuccess} />
              </IKContext>
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
