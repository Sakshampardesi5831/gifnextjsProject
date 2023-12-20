import React from 'react'
import Link from 'next/link'
const index = () => {
  return (
    <div>
     <h1><Link href="/login" >Login</Link></h1>
     <h1><Link href="/register">Register</Link></h1>
    </div>
  )
}

export default index