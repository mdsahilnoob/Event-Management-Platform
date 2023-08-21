import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const initalize_database=async()=>{
      const response=await fetch("./api/connect",{
        method:"GET"
      })
      const data=await response.json();
      if(response.status===200){
        console.log(data.message)
      } else{
        console.log("404")
      }
    }
    initalize_database()
  }, [])
  
  return <Component {...pageProps} />
}
