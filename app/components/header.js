import Link from 'next/link'
import { useContext } from 'react'  
import SignedIn from './SignedIn'
import UserContext from './UserContext'

export default function Header(props) {

  const { user, logout, loading } = useContext(UserContext)

  if(user)
  {

    return (
        <header>
            <div className={props.darkMode ?"header2":props.orangeMode?"header3":props.greenMode?"header4":props.blueMode?"header5":"header"}>
              <SignedIn/>  
              <a  className="logo" > <img src="../logoooo.png" width="200" ></img></a>       
               <span className="footic font-semibold text-2xl tracking-tight"> Footix</span>

            <div className="changement">              
            
                <img onClick={props.toggleDarkMode} className="self-left justify-self-end" src={props.darkMode ? "../ON.png" : "../OFF.png"} width="75" height={"38"} />
                <img onClick={props.toggleOrangeMode} className="self-left justify-self-end" src={props.orangeMode ? "../ON.png" : "../OFF.png"} width="75" height={"38"} />
                <img onClick={props.toggleGreenMode} className="self-left justify-self-end" src={props.greenMode ? "../ON.png" : "../OFF.png"} width="75" height={"38"} />
                <img onClick={props.toogleBlueMode} className="self-left justify-self-end" src={props.blueMode ? "../ON.png" : "../OFF.png"} width="75" height={"38"} />
            </div>
                <div className={props.darkMode ?"header2-right":"header-right"}>

                    <Link className="active" href="/" >Home </Link>
                    <Link className="active" href="/profile" >Profile </Link>
                    <Link href="/equipe">Equipes</Link>
                    <Link href="/contacts">Contact</Link>
                </div>
            </div> 
        </header>
    )

  }
  else
  {
    return (
      <header>
          <div className={props.darkMode ?"header2":props.orangeMode?"header3":props.greenMode?"header4":props.blueMode?"header5":"header"}>
            <a  className="logo" > <img src="../logoooo.png" width="200" ></img></a>          
            <pre >Aucun utilisateur connecté </pre>            
            
            <span className="footic font-semibold text-xl tracking-tight"> Footix</span>

            <div className="changement">            

                <img onClick={props.toggleDarkMode} className="self-left justify-self-end" src={props.darkMode ? "../ON.png" : "../OFF.png"} width="75" height={"38"} />
                <img onClick={props.toggleOrangeMode} className="self-left justify-self-end" src={props.orangeMode ? "../ON.png" : "../OFF.png"} width="75" height={"38"} />
                <img onClick={props.toggleGreenMode} className="self-left justify-self-end" src={props.greenMode ? "../ON.png" : "../OFF.png"} width="75" height={"38"} />
                <img onClick={props.toogleBlueMode} className="self-left justify-self-end" src={props.blueMode ? "../ON.png" : "../OFF.png"} width="75" height={"38"} />
            </div>
              <div className={props.darkMode ?"header2-right":"header-right"}>
 
                  <Link className="active" href="/" >Home </Link>
                  <Link className="active" href="/Login" >Login </Link>
                  <Link href="/equipe">Equipes</Link>
                  <Link href="/contacts">Contact</Link>
              </div>
          </div> 
      </header>
    )

  }

}

