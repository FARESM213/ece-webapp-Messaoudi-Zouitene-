import Head from 'next/head' 
import Link from 'next/link'
import { useContext } from 'react'
import styles from '../styles/s.module.css'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import Context from './userContext'

export default function Header() {
  return (

    <header>
        <div class="header">
        <a  class="logo" > <img src="../logoooo.png" width="200" ></img></a>
        <div class="header-right">
        <Link class="active" href="/" >Home </Link>
        <Link href="/contacts">Contact</Link>
        <Link href="/AjouterPays">About Us</Link>
        </div>
        </div> 
    </header>
  )
}

