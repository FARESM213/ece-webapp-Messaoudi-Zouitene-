import { useEffect, useState } from 'react'
import supabase from '../../supabase'

export const getServerSideProps = async ({params}) => {

const {data : equipe,erreur}= await supabase.from('equipe').select('*').eq('id',params.id).single()
return {
    props :
    {
      equipe
    }
}
}

export default function Profile({ equipe }) {
    const [data, setData] = useState()
    
    useEffect(() => {
        async function loadData() {
          setData(equipe)
        }
        loadData()
      })

  return (
          
          <div>

            Nom : {equipe.nom}
            Entraineur : {equipe.coach}

        </div>
  )

}
