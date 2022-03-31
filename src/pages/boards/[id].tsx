import { Navbar, Header, CardList } from '@/components'
import { Container, MainContent } from '@/styles/components'

const SingleBoardPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <MainContent>
          <CardList />
        </MainContent>
      </Container>
    </>
  )
}

export default SingleBoardPage
