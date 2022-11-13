import Head from 'next/head' 
import styles from '../styles/s.module.css'

export default function Header() {
  return (

    <header>
      <div class="header">
      <a  class="logo" > <img src="logoooo.png" width="200" ></img></a>
     
      
      <div class="header-right">
      <a class="active" href="/" >Home </a>
      <a href="/contacts">Contact</a>
      <a href="/about">About Us</a>
      </div>
      </div> 


    </header>
  )
}

