import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

export const getStaticProps =async ()=>{
  const res= await fetch("https://flagcdn.com/fr/codes.json")
  const dat= await res.json();

  return {
    props:{flag : dat}

  }
}


const equipe = ({flag}) => {

  const supabaseClient = useSupabaseClient()
  const [equipes, setEquipe] = useState(null)
  
  useEffect(() => {
    async function FetchEquipes() 
    {
        const {data : equipes } = await supabaseClient.from('equipe').select('*')
        setEquipe(equipes)
    }
    FetchEquipes()
  }, [])
  
  if (!equipes) {
    return <p>Aucune Equipes </p>
  }



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

  return ( 

    <div className="py-10 min-h-screen max-w-full md:max-w-4xl md:mx-auto">
      <div className={styles.grid}>

        {equipes.map(equipe => (
          <div className={styles.card}  key={equipe.id}>
              <a href={'/equipe/'+ equipe.id}  >
                      <h2>{equipe.nom}</h2>
                      <p>{equipe.coach}  </p>              
                    <img src={"https://flagcdn.com/w2560/"+Loadflag(equipe.nom,flag)+".jpg"} width="300" length="300" ></img>  
                </a>
          </div>
        ))}

      </div> 
    </div>)
}

export default equipe;
