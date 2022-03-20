import React, { useState } from 'react'

import { AvatarContainer, StyledImage } from './styles'
import { AvatarProps } from './types'

export const Avatar = ({ radius = 'md', size = '2.8rem', name, src, ...props }: AvatarProps) => {
  const [isError, setIsError] = useState(false)

  const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsError(true)

    event.currentTarget.src = '/images/avatar-placeholder.png'
  }

  const namePart = name?.includes(' ') ? name?.split(' ') : [name, '']
  const nameInitial =
    name && typeof name === 'string'
      ? namePart[0]!.substring(0, 1).toUpperCase() + namePart[1]!.substring(0, 1).toUpperCase() // eslint-disable-line
      : ''

  return (isError || !src) && name ? (
    <AvatarContainer radius={radius} size={size} data-testid='avatar-container'>
      {nameInitial}
    </AvatarContainer>
  ) : (
    <StyledImage radius={radius} size={size} src={src} {...props} onError={onError} />
  )
}
