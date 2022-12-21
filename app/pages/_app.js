import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import {UserContextProvider} from '../components/UserContext'
import Layout from '../components/Layout'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  const [darkMode, setDarkMode] =useState(false)
  
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession} 
    >
      <UserContextProvider>
       <Layout  
       darkMode={darkMode} 
       toggleDarkMode={toggleDarkMode} 
    >
         <Component {...pageProps} />       
        </Layout>
      </UserContextProvider>
    </SessionContextProvider>
  )
}
