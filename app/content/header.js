import Head from 'next/head' 
import { useContext } from 'react'
import styles from '../styles/s.module.css'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import Context from './userContext'

export default function Header() {
  const {user} = useContext(Context)
  return (

    <header>
       <div>{user ? <LoggedIn/>:<LoggedOut/>}</div>

        <div class="header">
        <a  class="logo" > <img src="../logoooo.png" width="200" ></img></a>
        <div class="header-right">
        <a class="active" href="/" >Home </a>
        <a href="/contacts">Contact</a>
        <a href="/about">About Us</a>
        </div>
        </div> 
    </header>
  )
}

