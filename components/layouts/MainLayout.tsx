import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';
import { FC } from 'react';

export const MainLayout:FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Joaco Mellado</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )

};
