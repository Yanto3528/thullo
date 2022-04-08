import { Navbar, BoardList } from '@/components'
import { Container, GrayBody } from '@/styles/components'
import { useGetUserQuery } from '@/lib/react-query/query'

const BoardsPage = () => {
  const { data } = useGetUserQuery()

  // eslint-disable-next-line
  console.log('data: ', data)
  return (
    <GrayBody>
      <Navbar />
      <Container maxWidth='114.6rem'>
        <BoardList />
      </Container>
    </GrayBody>
  )
}

export default BoardsPage
