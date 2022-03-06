import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Navbar } from '../../components/Navbar';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Joaco Mellado</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <h1>Contacto</h1>
      </main>

    </div>
  )
}
