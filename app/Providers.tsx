"use client"

import React from 'react'
import { SessionProvider } from "next-auth/react"

function Providers({children} : {children : React.ReactNode}) {
  return (
   <SessionProvider>
        {children}
   </SessionProvider> 
  )
}

export default Providers