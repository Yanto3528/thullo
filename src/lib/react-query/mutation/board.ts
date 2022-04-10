import { useMutation, useQueryClient } from 'react-query'
import { createBoard } from '@/lib/api'
import { Board, CreateBoardMutationVariables } from '@/generated-api'

export const useCreateBoardMutation = () => {
  const queryClient = useQueryClient()
  return useMutation(
    async (variables: CreateBoardMutationVariables) => {
      const result = await createBoard(variables)

      return result.createBoard
    },
    {
      onSuccess: async (data) => {
        queryClient.setQueryData('boards', (previousBoards) => {
          if (!previousBoards) {
            return []
          }

          return [...(previousBoards as Board[]), data]
        })
      },
    }
  )
}
