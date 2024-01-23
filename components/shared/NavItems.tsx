'use client'
import React from 'react'
import { headerLink } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeaderLink = {
    lable : string,
    route : string
}

const NavItems = () => {
    const pathName = usePathname()
  return (
    <ul className='md:flex-between gap-5 flex flex-col items-start md:flex-row'>
        {
            headerLink.map((item : HeaderLink) => {
                const isActive = pathName === item.route;
                return (
                    <li key={item.route} className={`${isActive && 'text-primary-500 flex-center p-medium-16 whitespace-nowrap'}`} >
                        <Link href={item.route}>{item.lable}</Link>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default NavItems