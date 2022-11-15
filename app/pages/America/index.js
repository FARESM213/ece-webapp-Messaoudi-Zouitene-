import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/s.module.css'
import Footer from '../../content/footer.js'
import Header from '../../content/header'


export const getStaticProps =async ()=>{
  

  const res= await fetch('http://localhost:8000/America')
  const data= await res.json();
  return {
    props:{pays : data}
  }
}

export default function amerique({pays}) {
  return (
    <div className={styles.container}>

      
      <main className={styles.main} >
      <p className={styles.description}>
        <a  className={styles.card}>
         <strong>Choose which teams you want to know more about ! </strong> 
         </a>
        </p>  
        <div className={styles.grid} >
          { 
          
          pays.map(pay =>(

            <Link href={'/America/'+ pay.name} className={styles.card}>    

              <a className={styles.card}>
 
              <div>

                      <h2> {pay.name} &rarr;</h2>
                      <img src={pay.img} width="400" length="400" alt="amerique image"/>
              </div>
              </a>
              
            </Link>

          ))
          
          }
          </div>
      
      </main>
      
      <p className={styles.description}>
          Get to know more about us ! 
         
          <a href="/about" className={styles.card}>
          <code className={styles.code}>click here </code> </a>
          
        </p>
          
    </div>
  )
}