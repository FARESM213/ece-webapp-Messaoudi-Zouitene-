import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export const getServerSideProps =async ({params})=>{

  const res= await fetch("https://flagcdn.com/fr/codes.json")
  const dat= await res.json();

  return {
    props:{
        flag : dat,
        nom : params.id
    }
  }
}


const equipe = ({flag,nom}) => {

  const supabaseClient = useSupabaseClient()
  const [equipes, setEquipe] = useState(null)
  
  useEffect(() => {
    async function FetchEquipes() 
    {
        const {data : equipes } = await supabaseClient.from('equipe').select('*').eq("Continent",nom).order('nom', { ascending: true })
        setEquipe(equipes)
    }
    FetchEquipes()
  }, [])

  function Loadflag(name,flag)
  {  
      var flag2=-1
      for (let key in flag) {
          if(flag[key]==name)
          {
                flag2=key
          }
        }
    return  flag2;
  }
  
  if (!equipes) {    
    return (
      <div  className={styles.aucun}>
                Aucune Equipe
      </div>
)
  }
  else
  {
    if(equipes.length==0)
    {
      return (
              <div  className={styles.aucun}>
                        Aucune Equipe
              </div>
      )
    }
    else
    {

    return ( 

      <div className="py-10 min-h-screen max-w-full md:max-w-4xl md:mx-auto">
        <div className={styles.grid}>
  
          {equipes.map(equipe => (
            <div className={styles.card}  key={equipe.id}>

              <a href=''>
              <Link href={'/equipe/'+ equipe.id}>
                  <div>
                      <h2>{equipe.nom}</h2>
                          <p>{equipe.coach}  </p>              
                        <img src={"https://flagcdn.com/w2560/"+Loadflag(equipe.nom,flag)+".jpg"} width="300" length="300" ></img>  
                  </div>
                </Link>
                </a>
            </div>
          ))}
  
        </div> 
      </div>)
    }


  }


}

export default equipe;