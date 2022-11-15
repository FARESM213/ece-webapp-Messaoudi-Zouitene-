import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/s.module.css'

import Footer from '../content/footer.js'
import Header from '../content/header.js'

export default function contacts() {
  return (
    <div >
      <main >
        <h1>
        Contacts
        </h1>
        <br></br>

        <div >
         
           <div>
            <h2>Messaoudi Fares &rarr;</h2>
            <ul>
            <li>Telephone : 07 83 25 75 42</li>
            <li>Adresse : 98 rue de porte morte </li>
            <li>Email : Fares.Messaoudi@edu.ece.fr</li>
            </ul>
            </div>

           <div>
            <h2>Lydia Zouitene &rarr;</h2>
           <ul>
            <li>Telephone : 07 34 53 13 75 </li>
            <li>Adresse : 109 rue de l'imaginaire</li>
            <li>Email : Lydia.Zouitene@edu.ece.fr</li>
            </ul>
          </div>          
        </div>
      </main>

    </div>
  )
}
