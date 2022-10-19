import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const Post = () => {
  const router = useRouter()
  const { articleID } = router.query

  if(articleID.toString()==="76543234567654")
  {
  return (
    <div> 
          <p>IMEI: {articleID}</p>
          <div className={styles.card}>
                    <img
                        src="https://www.123comparer.fr/photoProd/zoom/3343/apple-iphone-13-256go-product-red-302747111.png"
                        alt="car"
                        width="50" 
                        height="50" 
                    />
                      <h2>Iphone 13  &rarr;</h2>
                        <ul>
                        <li>Stockage : 128 Gb</li>
                        <li>Couleur : Rouge</li>
                        <li>IMEI : 76543234567654</li>
                        </ul>
                      </div> 
      </div>
     )

  }
  else if(articleID.toString()==="765433546765")
  {
    return ( 

    <div>
          <p>IMEI: {articleID}</p>

             <div className={styles.card}>
                 <img
                src="https://www.backmarket.fr/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/304345_2a60ab2e-8178-4303-b2a9-945f0d319e18.jpg"
                alt="car"
                width="50" 
                height="50" />
                <h2>Ipad Mini 3  &rarr;</h2>
                <ul>
                <li>Stockage : 256 Gb</li>
                <li>Couleur : Gris</li>
                <li>IMEI : 765433546765</li>
                </ul>
              </div>     
          </div>


    )

  }

}

export default Post
