import { useState, useEffect } from 'react'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import UserContext from './UserContext'
import { useContext } from 'react'  

export default function SignedIn() {

  const session= useSession();
  const supabase = useSupabaseClient()
  const { user, logout, loading } = useContext(UserContext)
  const [load, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select("*")
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
   //   alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if(session)
  {
      return (
     <pre>Bonjour {username}</pre>
  )
  }
  else
  {
    return (
      <>Aucun utilisateur conneecté</>
    )
  }

}