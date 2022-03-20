import styled from 'styled-components'

import { AvatarProps } from './types'

export const StyledImage = styled.img<AvatarProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ theme, radius }) => radius && theme.radius[radius]};
  object-fit: cover;
  display: block;
`

export const AvatarContainer = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ theme, radius }) => radius && theme.radius[radius]};
  background-color: ${({ theme }) => theme.colors.gray4};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ size }) => `calc(${size} / 3)`};
  font-weight: 600;
  letter-spacing: 1px;
`
