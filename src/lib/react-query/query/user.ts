import { useQuery } from 'react-query'

import { getCurrentUser } from '@/lib/api'

export const useGetUserQuery = () => {
  return useQuery('current-user', () => getCurrentUser())
}
