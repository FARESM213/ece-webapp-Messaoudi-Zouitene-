import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/*.module.css'
import Footer from '../content/footer.js'
import Header from '../content/header'
export default function Articles() {
    return (
      <div >
      
      
    <Header> Articles</Header>

        <main >

          <h1 >
           Articles 
          </h1>
          <br></br>
        
        <div >

        <p class="italic font-bold"> Cette page est destinée aux articles</p>

             <div >           
                <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.123comparer.fr/photoProd/zoom/3343/apple-iphone-13-256go-product-red-302747111.png"
                alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Iphone 13 </h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">                <ul>
                                <li>Stockage : 128 Gb</li>
                                <li>Couleur : Rouge</li>
                                <li>IMEI : 76543234567654</li>
                                </ul></p>
                    </div>
                </a>
              </div>

             <div >

              <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.backmarket.fr/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/304345_2a60ab2e-8178-4303-b2a9-945f0d319e18.jpg"
              alt=""/>
                  <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ipad Mini 3 </h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">           
                          <ul>
                            <li>Stockage : 256 Gb</li>
                            <li>Couleur : Gris</li>
                            <li>IMEI : 765433546765</li>
                          </ul>
                      </p>
                  </div>
              </a>
              </div>   

          </div>
        </main>
  
             <Footer/>

    </div>
  )
}
