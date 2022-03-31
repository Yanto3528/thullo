import React from 'react'

import { Text } from '../text'
import { Wrapper } from './styles'
import { AvatarGroupProps } from './types'

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, maxDisplay = 3 }) => {
  const isChildExceedMax = React.Children.count(children) > maxDisplay
  return (
    <Wrapper>
      {React.Children.toArray(children)
        .slice(0, maxDisplay)
        .map((childElement) => {
          if (React.isValidElement(childElement)) {
            return React.cloneElement(childElement, {
              ...childElement.props,
            })
          }

          return null
        })}
      {isChildExceedMax && (
        <Text color='gray4' size='1.2rem'>
          + {React.Children.count(children) - maxDisplay} others
        </Text>
      )}
    </Wrapper>
  )
}
