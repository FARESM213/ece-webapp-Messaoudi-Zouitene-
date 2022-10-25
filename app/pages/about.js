import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/*.module.css'
import Footer from '../content/footer.js'
import Header from '../content/header'
export default function About() {
  return (
    <div >
        
      <Header> About US </Header>
      <main >
        <h1 >
         About us 
        </h1>
        <br></br>

        <div >
         
           <div >
            <h2>Messaoudi Fares &rarr;</h2>
            <p>Etudiante 4 eme année en majeur Systeme d'informations </p>
            <br></br>
            <p > A l'ECE Paris depuis 2019</p>
            </div>

           <div >
            <h2>Lydia Zouitene &rarr;</h2>
            <p>Etudiante 4 eme année en majeur Systeme d'informations </p>
            <br></br>
            <p > A l'ECE Paris depuis 2021</p>
          </div>          
        </div>
      </main>

     <Footer/>
    </div>
  )
}
