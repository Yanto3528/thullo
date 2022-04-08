import { useQuery } from 'react-query'

import { signupUser } from '@/lib/api'

export const useGetUserQuery = () => {
  return useQuery('users', () => signupUser())
}
