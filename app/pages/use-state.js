import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/s.module.css'
import Footer from '../content/footer.js'
import Header from '../content/header'

import React, { useState } from 'react';

export default function Example() {

    const [count, setCount] = useState(0);

    
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  return (
    
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}