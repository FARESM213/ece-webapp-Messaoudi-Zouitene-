import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function contacts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacts </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Contacts
        </h1>
        <br></br>

        <div className={styles.grid}>
         
           <div className={styles.card}>
            <h2>Messaoudi Fares &rarr;</h2>
            <ul>
            <li>Telephone : 07 83 25 75 42</li>
            <li>Adresse : 98 rue de porte morte </li>
            <li>Email : Fares.Messaoudi@edu.ece.fr</li>
            </ul>
            </div>

           <div className={styles.card}>
            <h2>Lydia Zouitene &rarr;</h2>
           <ul>
            <li>Telephone : 07 34 53 13 75 </li>
            <li>Adresse : 109 rue de l'imaginaire</li>
            <li>Email : Lydia.Zouitene@edu.ece.fr</li>
            </ul>
          </div>          
        </div>
      </main>

      <footer className={styles.footer}>

      <Link href="/about"> 
           <a> About
          </a>
          </Link>

          <Link href="/contacts"> 
          <a >
            Contacts
          </a>
          </Link>
          
          <Link href="/articles"> 
          <a >
          Articles
          </a>
          </Link>

          <Link href="/"> 
          <a >
          HomePage
          </a>
          </Link>
        
      </footer>
    </div>
  )
}
