import styles from '../styles/pages/home.module.scss'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={`${styles.container} container`}>
          <div className={styles.home__posts}>
            <Posts />
          </div>
          <div className={styles.home__sidebar}>
            <Sidebar />
          </div>
      </div>
    </div>
  )
}
