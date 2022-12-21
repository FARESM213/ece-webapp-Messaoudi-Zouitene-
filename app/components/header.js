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
      <div className={props.darkMode ?"header2":"header"} >
      <SignedIn/>  
        <a  className="logo" > <img src="../logoooo.png" width="200" ></img></a>
          <div className={props.darkMode ?"header2-right":"header-right"}>
              <img onClick={props.toggleDarkMode} className="self-left justify-self-end" src={props.darkMode ? "../ON.png" : "../OFF.png"} width="100" height={"50"} />

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
          <div className={props.darkMode ?"header2":"header"} >
          <pre >Aucun utilisateur connecté </pre>
            <a  className="logo" > <img src="../logoooo.png" width="200" ></img></a>
              <div className={props.darkMode ?"header2-right":"header-right"}>
                  <img onClick={props.toggleDarkMode} className="self-left justify-self-end" src={props.darkMode ? "../ON.png" : "../OFF.png"} width="100" height={"50"} />

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

