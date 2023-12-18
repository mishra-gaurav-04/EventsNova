'use client'
import React from 'react'
import {headerLinks} from '../../constants/index';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

type HeaderLink = {
    label : string,
    route : string
}

const NavItem = () => {
    const pathname = usePathname()
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
        {
            headerLinks.map((item:HeaderLink) => {
                const isActive:boolean = pathname === item.route;
                return (
                    <li key={item.route} className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}>
                        <Link href={item.route}>{item.label}</Link>
                    </li>
                )
            }
        )}
        
    </ul>
  )
}

export default NavItem