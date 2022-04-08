import { QueryClient } from 'react-query'
import toast from 'react-hot-toast'
import { ClientError } from 'graphql-request'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
    mutations: {
      retry: false,
      onError: (error) => {
        let errorMessage = ''
        if (error instanceof ClientError) {
          errorMessage = error?.response?.errors?.[0].message || ''
        } else if (error instanceof Error) {
          errorMessage = error.message
        }

        toast.error(errorMessage)
      },
    },
  },
})
