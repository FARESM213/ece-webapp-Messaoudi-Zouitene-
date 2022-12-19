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
          console.log("key", key)
          console.log("value", flag[key])
          if(flag[key]==name)
          {
                flag2=key
          }
        }
    return  flag2;
  }

  return ( 
      
      <div className={styles.grid}>

        {equipes.map(equipe => (
          <div>
              <a className={styles.card} href={'/equipe/'+ equipe.id}  >
                <Link href={'/equipe/'+ equipe.id}  > Detaile de l'equipe </Link>   
                    Nom : {equipe.nom}
                    Entraineur : {equipe.coach}                
                  <img src={"https://flagcdn.com/w2560/"+Loadflag(equipe.nom,flag)+".jpg"} width="300" length="300" ></img>
                </a>
              </div>
            
        ))  }

      </div> )
}

export default equipe;
