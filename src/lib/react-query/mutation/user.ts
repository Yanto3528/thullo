import { useMutation } from 'react-query'

import { signupUser } from '@/lib/api'

export const useSignupUserMutation = () => {
  return useMutation(signupUser)
}
