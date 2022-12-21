
import Header from './header.js'
import Footer from './footer.js'

import { useState } from 'react'


export default function Layout({children}){

  const [darkMode, setDarkMode] =useState(false)
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
<div className={`${darkMode ? "dark" : orangeMode?"orange":greenMode?"green":blueMode?"blue":"light"}`}>
      <Header   darkMode={darkMode} 
        orangeMode={orangeMode} 
        greenMode={greenMode} 
        blueMode={blueMode} 
        toggleDarkMode={toggleDarkMode} 
        toggleOrangeMode={toggleOrangeMode}  
        toggleGreenMode={toggleGreenMode}  
        toogleBlueMode={toogleBlueMode}  
    />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}
