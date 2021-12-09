import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
  
      <a href="/participant" className={styles.home__link} >Isi survey</a>
      <a href="/survey/result" className={styles.home__link}>Lihat hasil survey</a>
    </div>
  )
}

export default Home
