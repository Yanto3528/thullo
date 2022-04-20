import { useQuery, useMutation } from 'react-query'

import { getCurrentUser, signupUser, loginUser } from '@/lib/api'

export const useGetUserQuery = () => {
  return useQuery('current-user', async () => {
    const result = await getCurrentUser()
    return result.getCurrentUser
  })
}

export const useSignupUserMutation = () => {
  return useMutation(signupUser)
}

export const useLoginUserMutation = () => {
  return useMutation(loginUser)
}
