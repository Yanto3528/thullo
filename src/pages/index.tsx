import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Link href='/boards/123'>
        <a>Go to single board</a>
      </Link>
      <Link href='/boards'>
        <a>Go to all board</a>
      </Link>
    </div>
  )
}

export default Home
