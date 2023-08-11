import React from 'react'
import Image from 'next/image'

const About = () => {
  
  return (
    <div className='flex md:flex-row flex-col md:gap-0 gap-5 w-full justify-between pb-10 md:px-16 px-2 min-h-[50vh]'>
        <div className='dark:bg-light bg-dark md:w-1/4 flex md:flex-col w-full flex-row items-center justify-between mr-10'>
            <div className='w-full h-8 dark:bg-light bg-dark'></div>
            <div className='w-full h-8 bg-light dark:bg-dark'></div>
            <Image src='/japanese-ibento.svg' alt='japanese-ibento' height={32} width={32} className='filter invert dark:filter-none h-1/2 w-full hidden md:block'/>
            <Image src='/japanese-ibento-horizontal.svg' alt='japanese-ibento' height={32} width={32} className='filter invert dark:filter-none h-full w-full md:hidden block'/>
            <div className='w-full h-8 bg-light dark:bg-dark'></div>
            <div className='w-full h-8 dark:bg-light bg-dark'></div>
        </div>
        <div className='border-dark dark:border-light border-2 md:px-20 px-10 py-10 w-full flex flex-col justify-center'>
            <h2 className='text-4xl tracking-[8px] leading-relaxed font-medium max-w-sm'>IBENTO CAN CHANGE THE WAY YOU PLAN EVENTS</h2>
            <p className='text-xl mt-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ullam explicabo architecto magni quod harum molestias vitae animi aut ipsum necessitatibus eius ex quasi, veritatis porro debitis minima voluptas reiciendis.
            </p>
        </div>
    </div>
  )
}

export default About