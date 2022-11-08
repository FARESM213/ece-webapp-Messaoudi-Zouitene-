import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/s.module.css'
import Footer from '../content/footer.js'
import Header from '../content/header'



export default function Home() {
  return (
    <div >

      
     <Header/>

      <main >
        <h1 className="wt-title">
         Bienvenue sur la HomePage en <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <br></br>

        <div class="grid grid-cols-3 gap-3 place-content-center h-25 ml-10 ">

          <Link href="/about" class="place-content-center">
           <a class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">               
            Sur cette page, retrouvez toute les informations nous concernant.
          </p>
          </a>
          </Link>

          <Link href="/contacts"> 
          <a class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contacts</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">               
            Sur cette page, veuillez retrouvez tout nos contacts
          </p>
          </a>
          </Link>
          
          <Link href="/articles"> 
          <a class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Articles</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">               
          Cette page contiendra la liste effectives de tout nos articles.
          </p>
          </a>
          </Link>
        </div>
      </main>

      <Footer/>

    </div>
  )
}
