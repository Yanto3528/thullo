import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getLists, createList, updateList } from '@/lib/api'
import { List, GetListsQuery, CreateListMutationVariables, UpdateListMutationVariables } from '@/generated-api'
import { FlatList } from './types'

const formatListData = (data: GetListsQuery['getLists']) => {
  if (!data) {
    return undefined
  }

  return data.reduce((accum: FlatList, nextData) => {
    if (nextData) {
      accum[nextData.id] = nextData
    }

    return accum
  }, {})
}

export const useGetListsQuery = (boardId: string) => {
  return useQuery(
    'lists',
    async () => {
      const result = await getLists({ boardId })

      return result.getLists
    },
    {
      enabled: !!boardId,
      select: formatListData,
    }
  )
}

export const useCreateListMutation = () => {
  const queryClient = useQueryClient()
  return useMutation(
    async (variables: CreateListMutationVariables) => {
      const result = await createList(variables)

      return result.createList
    },
    {
      onSuccess: async (data) => {
        queryClient.setQueryData('lists', (previousLists) => {
          if (!previousLists) {
            return []
          }

          return [...(previousLists as List[]), data]
        })
      },
    }
  )
}

export const useUpdateListMutation = () => {
  const queryClient = useQueryClient()
  return useMutation(
    async (variables: UpdateListMutationVariables) => {
      const result = await updateList(variables)

      return result.updateList
    },
    {
      onSuccess: async (data) => {
        queryClient.setQueryData('lists', (previousLists) => {
          if (!previousLists) {
            return []
          }

          return [...(previousLists as List[]), data]
        })
      },
    }
  )
}
