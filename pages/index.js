import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InfoBasicas from '../components/InfoBasica'
import FooterPagina from '../components/FooterPagina'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu portfólio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InfoBasicas></InfoBasicas>

      <FooterPagina></FooterPagina>
    </div>
  )
}
