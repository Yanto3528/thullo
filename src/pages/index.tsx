import { Navbar, Header, CardList } from '@/components'
import { Flex } from '@/ui-components'
import { Container, MainContent } from '@/styles/components'

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <MainContent>
          <Flex gap='3.2rem' alignItems='flex-start'>
            <CardList />
            <CardList />
            <CardList />
          </Flex>
        </MainContent>
      </Container>
    </>
  )
}

export default Home
