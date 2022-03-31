import { Navbar, BoardList } from '@/components'
import { Container } from '@/styles/components'

const BoardsPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='114.6rem'>
        <BoardList />
      </Container>
    </>
  )
}

export default BoardsPage
