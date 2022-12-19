import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const equipe = () => {

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

  return equipes.map((equipe) => (
    <div>
       <Link href={'/equipe/'+ equipe.id}  > Detaile de l'equipe </Link>        <br/>
       <img src={"https://countryflagsapi.com/png/"+equipe.flag} alt="Chargement du drapeau"/>
        Nom : {equipe.nom}
       Entraineur : {equipe.coach}
    </div>
  ))  


}

export default equipe;
