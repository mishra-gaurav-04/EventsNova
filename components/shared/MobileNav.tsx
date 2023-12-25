import React from 'react'
import Link from 'next/link';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import { Separator } from '../ui/separator';
import NavItem from './NavItem';
import Image from 'next/image';


const MobileNav = () => {
    return (
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <Image src="/assets/icons/menu.svg" alt='menu' width={24} height={24}></Image>
                </SheetTrigger>
                <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
                    <Link href="/" className='text-4xl font-bold  text-slate-600'>Events<span className='text-slate-400'>Nova</span></Link>
                    <Separator className='border border-gray-200' />
                    <NavItem />
                </SheetContent>
            </Sheet>
        </nav>

    )
}

export default MobileNav