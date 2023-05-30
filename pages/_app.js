/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
</>
  )
}

export default MyApp