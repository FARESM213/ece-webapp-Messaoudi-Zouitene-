import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import {UserContextProvider} from '../components/UserContext'
import Layout from '../components/Layout'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <UserContextProvider>
        <Layout>
         <Component {...pageProps} />       
        </Layout>
      </UserContextProvider>
    </SessionContextProvider>
  )
}
