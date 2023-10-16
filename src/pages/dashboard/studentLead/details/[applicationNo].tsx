import React from 'react'
import LaptopNav from '@/components/Dashnav'
import { useRouter } from 'next/router'

const Details = () => {
    const router = useRouter()
    const {applicationNo} = router.query
  return (
    <div className="bg-light dark:bg-dark dark:text-light min-h-screen h-fit pb-5">
        <LaptopNav />
        <h1>{applicationNo}</h1>
    </div>
  )
}

export default Details