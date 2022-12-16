import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>

    <div className={styles.container}>
      
      <main className={styles.main} >
        
      
        <h1 className={styles.title}>
          <img src="lol.png" width="400" length="400" alt="amerique image"/>
        </h1>
        
        <p className={styles.description}>
        <a  className={styles.card}>
         <strong>Choose your continent and Find which teams have qualified for Qatar tournament ! </strong> 
         </a>
        </p>  

        <div className={styles.grid}>
        <a href="/America"className={styles.card}>
            <h2>America &rarr;</h2>
            <img src="amerique.png" width="400" length="400" alt="amerique image"/>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Africa &rarr;</h2>
            <img src="afrique.png" width="400"  length="400"  alt="afrique image"/>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Asia &rarr;</h2>
            <img src="asiii2.png" width="400" length="400" alt="asia image"/>
          </a>

         
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Europe &rarr;</h2>
            <img src="europe12.png" width="400" length="400" alt="europe image"/>
          </a>
        </div>
      </main>
      
      <p className={styles.description}>
          Get to know more about us ! 
         
          <a href="/about" className={styles.card}>
          <code className={styles.code}>click here </code> </a>
          
        </p>
          
    </div>

    </>
  )
}



   
  

   
