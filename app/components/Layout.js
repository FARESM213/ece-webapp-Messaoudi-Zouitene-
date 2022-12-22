
import Header from './header.js'
import Footer from './footer.js'
export default function Layout(props){


  return (
<div className={`${props.darkMode ? "dark" : props.orangeMode?"orange":props.greenMode?"green":props.blueMode?"blue":"light"}`}>
      <Header   darkMode={props.darkMode} 
        orangeMode={props.orangeMode} 
        greenMode={props.greenMode} 
        blueMode={props.blueMode} 
        toggleDarkMode={props.toggleDarkMode} 
        toggleOrangeMode={props.toggleOrangeMode}  
        toggleGreenMode={props.toggleGreenMode}  
        toogleBlueMode={props.toogleBlueMode}  
    />
      <main className='main'>
      {props.children}
      </main>
      <Footer   darkMode={props.darkMode} 
        orangeMode={props.orangeMode} 
        greenMode={props.greenMode} 
        blueMode={props.blueMode} 
        />
    </div>
  )
}
