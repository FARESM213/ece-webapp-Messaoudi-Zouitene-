
import Header from './header.js'
import Footer from './footer.js'

import { useState } from 'react'


export default function Layout({children}){
  const [darkMode, setDarkMode] =useState(false)
  
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
<div className={`h-full w-full mx-auto py-2 ${darkMode ? "dark" : "light"}`}>
      <Header   darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}  
    />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}
