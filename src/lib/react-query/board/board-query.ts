import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getBoards, createBoard } from '@/lib/api'
import { Board, CreateBoardMutationVariables } from '@/generated-api'

export const useGetBoardsQuery = () => {
  return useQuery('boards', async () => {
    const result = await getBoards()

    return result.getBoards
  })
}

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
