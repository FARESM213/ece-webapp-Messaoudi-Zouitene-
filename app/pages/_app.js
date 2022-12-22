import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import {UserContextProvider} from '../components/UserContext'
import Layout from '../components/Layout'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
 
  const [darkMode, setDarkMode] =useState()
  const [orangeMode,setOrangeMode]=useState(false)
  const [greenMode,setGreenMode]=useState(false)
  const [blueMode,setBlueMode]=useState(false)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    if(!darkMode)
    {
          setBlueMode(false);
          setGreenMode(false);
          setOrangeMode(false);
    }
  }

  function toggleOrangeMode() {
    setOrangeMode(prevOrangeMode => !prevOrangeMode)
    if(!orangeMode)
    {
          setBlueMode(false);
          setGreenMode(false);
          setDarkMode(false);
    }
  }

  function toggleGreenMode() {
    setGreenMode(prevGreenMode => !prevGreenMode)
    if(!greenMode)
    {
          setBlueMode(false);
          setDarkMode(false);
          setOrangeMode(false);
    }
  }

  function toogleBlueMode() {
    setBlueMode(prevBlueMode => !prevBlueMode)
    if(!blueMode)
    {
          setDarkMode(false);
          setGreenMode(false);
          setOrangeMode(false);
    }
  }
 
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession} 
    >
      <UserContextProvider>

    <div className={`${darkMode ? "dark" : orangeMode?"orange":greenMode?"green":blueMode?"blue":"light"}`}>  
          <Layout   darkMode={darkMode} 
            orangeMode={orangeMode} 
            greenMode={greenMode} 
            blueMode={blueMode} 
            toggleDarkMode={toggleDarkMode} 
            toggleOrangeMode={toggleOrangeMode}  
            toggleGreenMode={toggleGreenMode}  
            toogleBlueMode={toogleBlueMode}  
        >
            <Component {...pageProps} />       
            </Layout>      
        
        </div>
      </UserContextProvider>
    </SessionContextProvider>
  )
}
