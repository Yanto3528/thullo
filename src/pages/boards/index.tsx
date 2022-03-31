import { Navbar, BoardList } from '@/components'
import { Container, GrayBody } from '@/styles/components'

const BoardsPage = () => {
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
