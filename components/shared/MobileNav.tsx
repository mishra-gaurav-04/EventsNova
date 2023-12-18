import React from 'react'
import Image from 'next/image';
import {
    Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger} from "@/components/ui/sheet"
import { Separator } from '../ui/separator';
import NavItem from './NavItem';
  

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image src="/assets/icons/menu.svg" alt='menu' width={24} height={24}></Image>
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
                <Image src="/assets/images/logo.svg" alt='logo' width={128} height={38}></Image>
                <Separator className='border border-gray-200'/>
                <NavItem/>
            </SheetContent>
        </Sheet>
    </nav>

  )
}

export default MobileNav