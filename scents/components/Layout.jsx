import React from 'react';

import Head from 'next/head';
import {Navbar, Footer} from './index.js'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>SCENTS</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout;