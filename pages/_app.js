import React from 'react'
import { Toaster } from 'react-hot-toast'
import '../styles/nav.css'
import '../styles/footer.css'
import '../styles/login.css'
import '../styles/globals.css'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
