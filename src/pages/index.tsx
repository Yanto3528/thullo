import { hello } from '@/components'

import styles from '../styles/Home.module.css'

const Home = () => {
  return <div className={styles.container}>{hello}</div>
}

export default Home
