import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import supabase from '../../supabase'
import { useEffect, useState } from 'react'

export const getServerSideProps = async ({params}) => {
  const supabaseClient = useSupabaseClient()

const {data : contact,erreur}= await supabase.from('contacts').select('*').eq('id',params.id).single()
return {
    props :
    {
        contact
    }
}
}
export default function Profile({ contact }) {
    const [data, setData] = useState()
    
    useEffect(() => {
        async function loadData() {
          setData(contact)
        }
        // Only run query once user is logged in.
        loadData()
      })
  return <div>{JSON.stringify(data,null,10)}</div>
}