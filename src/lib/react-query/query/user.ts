import { useQuery } from 'react-query'
import { getUser } from '@/api'

export const useGetUserQuery = () => {
  return useQuery('users', () => getUser())
}
