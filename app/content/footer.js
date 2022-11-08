import Link from 'next/link'
import styles from '../styles/s.module.css'

export default function Footer() {
  return (
     <div >
      <footer className={styles.footer} >
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
