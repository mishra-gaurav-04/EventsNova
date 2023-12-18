import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='flex flex-col md:items-center md:flex-row md:gap-7 justify-center items-center gap-3'>
            <Link href='/'>
                <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38}/>
            </Link>
            <p className='text-gray-600 font-mono font-semibold'>All rights reserved Copyright@2023</p>
        </div>
    </footer>
  )
}

export default Footer