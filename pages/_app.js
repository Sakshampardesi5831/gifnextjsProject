import '@/styles/globals.css'
import { AuthUserProvider } from '@/firebase/auth'
import { Fragment } from 'react'
export default function App({ Component, pageProps }) {
  
  return (
    <AuthUserProvider>
    <Component {...pageProps} />
    </AuthUserProvider>
  )
}
