import Navbar from '../layouts/navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <header>
          <Navbar />
        </header>
        <div className={styles.left}>
          <ul>
            <li><a href="#">Git</a></li>
            <li><a href="#">Git</a></li>
            <li><a href="#">Git</a></li>
            <li><a href="#">Git</a></li>
            <li><a href="#">Git</a></li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className='email'>
            <a href="#">Damoon.darvishi@gmail.com</a>
          </div>
        </div>
        <section className={styles.section1}>
          <div className={styles.horizontal}></div>
          <div className={styles.vertical}></div>
        </section>
        <section className={styles.section2}>Mobina</section>
        <section className={styles.section3}>Woman</section>
        <section className={styles.section4}>Live</section>
        <section className={styles.section5}>Freedom</section>
      </div>
    </div>
  )
}
