import { createContext, useState, useEffect } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

const UserContext = createContext()
export default UserContext

export function UserContextProvider({
  children
}) {
  const supabaseClient = useSupabaseClient()
  const supabaseUser = useUser()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] =useState(true)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}

  useEffect(function() {
    if (supabaseUser) {
      setUser(supabaseUser)
      setLoading(false)
    } 
  }, [supabaseUser])
  return (
    <UserContext.Provider
      value={{
        user: user,
        username: async function() {
          let { data, error, status } = await supabase
            .from('profiles')
            .select("*")
            .eq('id', user.id)
            .single()
            return data.username    
        },
        logout: async function() {
          await supabaseClient.auth.signOut()
          setUser(null)
        }
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
