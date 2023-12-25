import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex flex-col md:items-center md:flex-row md:gap-7 justify-center items-center gap-3'>
        <Link href="/" className='text-4xl font-bold  text-slate-600'>
          Events<span className='text-slate-400'>Nova</span>
        </Link>
        <p className='text-gray-600 font-mono font-semibold'>All rights reserved Copyright@2023</p>
      </div>
    </footer>
  )
}

export default Footer