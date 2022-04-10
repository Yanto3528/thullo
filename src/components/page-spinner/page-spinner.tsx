import { useIsFetching, useIsMutating } from 'react-query'
import { Portal, Text } from '@/ui-components'

import { Wrapper, StyledSpinner } from './styles'

export const PageSpinner = () => {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  return isFetching || isMutating ? (
    <Portal>
      <Wrapper>
        <StyledSpinner>
          <div />
          <div />
          <div />
        </StyledSpinner>
        <Text color='white' weight={500} size='2rem'>
          Loading...
        </Text>
      </Wrapper>
    </Portal>
  ) : null
}
