import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/s.module.css'
import Footer from '../../content/footer.js'
import Header from '../../content/header'


export const getStaticProps =async ()=>{
  const res= await fetch('http://localhost:3002/Articles')
  const data= await res.json();

  return {
    props:{articles : data}

  }
}
export default function Articles({articles}) {
    return (
      <div >
    <Header> Articles</Header>
        <main >
          <h1 >
           Articles 
          </h1>  <br></br>
          <p class="italic font-bold"> Cette page est destinée aux articles</p>

        <div >
          { articles.map(article =>(

              <div key={article.IMEI} >           
                           <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                           <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={article.Photo}
                           alt=""/>
                               <div class="flex flex-col justify-between p-4 leading-normal">
                                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.Models} </h5>
                                           <ul class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                <li>Stockage : {article.Stockage} </li>
                                                <li>Couleur : {article.Couleur} </li>
                                                <li>IMEI : {article.IMEI}</li>
                                           </ul>
                                    
                               </div>
                           </a>
                </div>

          ))}
          </div>
        </main>
  
             <Footer/>

    </div>
  )
}
