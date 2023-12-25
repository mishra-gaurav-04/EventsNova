import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItem from './NavItem'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href="/" className='text-4xl font-bold  text-slate-600'>
                Events<span className='text-slate-400'>Nova</span>
            </Link>
            <SignedIn>
                <nav className='hidden md:flex-between w-full max-w-xs'>
                    <NavItem/>
                </nav>
            </SignedIn>
            <div className='flex w-32 justify-end gap-3'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/'/>
                    <MobileNav/>  
                </SignedIn>
                <SignedOut>
                    <Button asChild className='rounded-full' size="lg" >
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header