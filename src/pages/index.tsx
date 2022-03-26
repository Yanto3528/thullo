import { Navbar, Header, CardList } from '@/components'
import { Container, MainContent } from '@/styles/components'

const Home = () => {
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

export default Home
