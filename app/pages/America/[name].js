import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/s.module.css'
import Footer from '../../content/footer.js'
import Header from '../../content/header.js'


export const getStaticPaths = async ()=>{
    const res= await fetch('http://localhost:8000/America')
    const data= await res.json();
    const paths=data.map(pays=>{
        return {
            params : {name:pays.name.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const name=context.params.name;
    console.log('http://localhost:8000/America/'+name);
    const res= await fetch('http://localhost:8000/America/'+name)
    const data =await res.json(); 
    return {     
        props:{pays:data}
    }
}


export default function usa({pays}) {
  return (
    <div className={styles.container}>
      
      <main className={styles.main} >
      <p className={styles.description}>
        <a  className={styles.card}>
         <strong> {pays.group}</strong> 
         </a>
        </p>  

        <h1 className={styles.title}>
          <img src= {pays.img2}width="100" length="100" alt="usa image"/>
        </h1>
        
        
        <br/><br/><br/><br/>

        
        <strong> <font size="+2">Composition équipe : </font></strong>
        <br/><br/><br/><br/>


        <strong>Gardiens de but : </strong><br/>{pays.Gardiens}<br/>
        <strong> Défenseurs : </strong> {pays.Defenseurs} <br/>
        <strong>Milieux de terrain :</strong> {pays.Milieux}<br/>
        <strong> Attaquants : </strong> {pays.Attaquants} <br/>
        <strong> Entraîneur : </strong> {pays.Entraîneur} 

         
         
      </main>
      
      <p className={styles.description}>
          Get to know more about us ! 
         
          <a href="/about" className={styles.card}>
          <code className={styles.code}>click here </code> </a>
          
        </p>
          
    </div>
  )
}