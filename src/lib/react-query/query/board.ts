import { useQuery } from 'react-query'
import { getBoards } from '@/lib/api'

export const useGetBoardsQuery = () => {
  return useQuery('boards', async () => {
    const result = await getBoards()

    return result.getBoards
  })
}
