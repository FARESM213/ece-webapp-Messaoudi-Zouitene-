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
          <div class="header">
          <SignedIn/>  

          <a  class="logo" > <img src="../logoooo.png" width="200" ></img></a>
          <div class="header-right">  
          <Link class="active" href="/" >Home </Link>   
          <Link class="active" href="/profile" >Profile </Link>
     
          <Link href="/contacts">Contact</Link>
          <Link href="/AjouterPays">About Us</Link>
          </div>
          </div> 
      </header>
    )

  }
  else
  {

    return (
      <header>
          <div class="header">

          <pre>Aucun utilisateur connecté </pre>
          <a  class="logo" > <img src="../logoooo.png" width="200" ></img></a>
          <div class="header-right">
            
          <Link class="active" href="/" >Home </Link>
          <Link class="active" href="/Login" >Login </Link>

          <Link href="/contacts">Contact</Link>

          <Link href="/AjouterPays">About Us</Link>
          </div>
          </div> 
      </header>
    )

  }

}

