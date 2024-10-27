import React from 'react'
import Navbar from '../components/pages/Navbar'
import Hero from '@/components/pages/Hero'

const page = () => {
  return (
    <>
    <main className='h-full w-full overflow-x-hidden'>
      <Navbar/>
      <Hero/>
    </main>
    </>
  )
}

export default page