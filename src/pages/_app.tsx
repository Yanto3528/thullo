import 'normalize.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Hydrate, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Toaster } from 'react-hot-toast'

import { queryClient } from '@/lib/react-query'
import { PageSpinner } from '@/components'

import { GlobalStyles } from '../styles/global-styles'
import { theme } from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <PageSpinner />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Toaster />
    </ThemeProvider>
  )
}

export default MyApp
