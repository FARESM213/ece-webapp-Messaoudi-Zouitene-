import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/s.module.css'
import Footer from '../content/footer.js'
import Header from '../content/header'

export default function usa() {
  return (
    <div className={styles.container}>
      
      <main className={styles.main} >
      <p className={styles.description}>
        <a  className={styles.card}>
         <strong>Groupe B </strong> 
         </a>
        </p>  

        <h1 className={styles.title}>
          <img src="usa.png" width="100" length="100" alt="usa image"/>
        </h1>
        
        
        <p>
        <br></br><br></br>
        <strong> <font size="+2">Composition équipe : </font></strong><br></br><br></br>
         <strong>Gardiens de but : </strong>Ethan Horvath (Luton Town/ANG), Matt Turner (Arsenal/ANG),
         Sean Johnson (New York City FC) <br></br>
          <strong> Défenseurs : </strong>Tim Ream (Fulham/ANG), Sergiño Dest (AC Milan/ITA), 
          Antonee Robinson (Fulham/ANG), Cameron Carter-Vickers (Celtic Glasgow/ECO), Walker Zimmerman (Nashville),
           DeAndre Yedlin (Inter Miami), Shaquell Moore (Nashville SC), Joe Scally (Mönchengladbach/ALL), Aaron Long (New York Red Bulls)<br></br>
         <strong>Milieux de terrain :</strong> Brenden Aaronson (Leeds/ANG), Kellyn Acosta (Los Angeles FC), 
          Tyler Adams (Leeds/ANG), Luca de la Torre (Celta Vigo/ESP), Weston McKennie (Juventus Turin/ITA), 
          Yunus Musah (Valence/ESP), Cristian Roldan (Seattle Sounders)<br></br>
         <strong>Attaquants : </strong>Jesus Ferreira (Dallas), Jordan Morris (Seattle Sounders), 
          Christian Pulisic (Chelsea/ANG), Giovanni Reyna (Borussia Dortmund/ALL), Josh Sargent (Norwich/ANG), 
          Timothy Weah (Lille/FRA), Haji Wright (Antalyaspor/TUR)<br></br>
         <strong> Entraîneur : </strong>Gregg Berhalter </p> 
         
         
      
      </main>
      
      <p className={styles.description}>
          Get to know more about us ! 
         
          <a href="/about" className={styles.card}>
          <code className={styles.code}>click here </code> </a>
          
        </p>
          
    </div>
  )
}