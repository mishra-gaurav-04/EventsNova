import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import NavItems from './NavItems';


const MobileNav = () => {
    return (
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <Image src="/assets/icons/menu.svg" alt="menu icon" width={24} height={24} className='cursor-pointer'/>
                </SheetTrigger>
                <SheetContent className='flex flex-col bg-white gap-6 md:hidden'>
                    <Link href="/"><h1 className='text-4xl font-bold text-slate-600'>Events<span className='text-slate-400'>Nova</span></h1></Link>
                    <Separator className='border border-gray-300'/>
                    <NavItems/>
                </SheetContent>
            </Sheet>

        </nav>
    )
}

export default MobileNav;