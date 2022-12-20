import Link from 'next/link'
import { useContext } from 'react'  
import SignedIn from './SignedIn'
import UserContext from './UserContext'

export default function Header() {

  const { user, logout, loading } = useContext(UserContext)

  if(user)
  {

    return (
      <header>
          <div className="header">
          <SignedIn/>  

          <a  className="logo" > <img src="../logoooo.png" width="200" ></img></a>
          <div className="header-right">  
          <Link className="active" href="/" >Home </Link>   
          <Link className="active" href="/profile" >Profile </Link>
          <Link href="/equipe">Equipes</Link>

          <Link href="/contacts">Contact</Link>
          {/* <Link href="/AjouterPays">About Us</Link> */}
          </div>
          </div> 
      </header>
    )

  }
  else
  {

    return (
      <header>
          <div className="header">

          <pre>Aucun utilisateur connecté </pre>
          <a  className="logo" > <img src="../logoooo.png" width="200" ></img></a>
          <div className="header-right">
            
          <Link className="active" href="/" >Home </Link>
          <Link className="active" href="/Login" >Login </Link>
          <Link href="/equipe">Equipes</Link>

          <Link href="/contacts">Contact</Link>

          {/* <Link href="/AjouterPays">About Us</Link> */}
          </div>
          </div> 
      </header>
    )

  }

}

