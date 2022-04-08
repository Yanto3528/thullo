import { useMutation } from 'react-query'

import { signupUser, loginUser } from '@/lib/api'

export const useSignupUserMutation = () => {
  return useMutation(signupUser)
}

export const useLoginUserMutation = () => {
  return useMutation(loginUser)
}
