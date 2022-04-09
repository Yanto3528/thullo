import { useMutation, useQueryClient } from 'react-query'
import { createBoard } from '@/lib/api'

export const useCreateBoardMutation = () => {
  const queryClient = useQueryClient()
  return useMutation(createBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards')
    },
  })
}
