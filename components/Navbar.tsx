import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
const Navbar = () => {
  return (
    <div>
      <nav className='flex-between fixed z-50 w-full bg-black-2 px-6 py-4 lg:px-10'>
        <Link href='/' className='flex items-center gap-1'>
        <Image
        src="/icons/logo.svg"
        width={32}
        height={32}
        alt="Joon's logo"
        className='max-sm:size-10'
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">Joon's</p>
        </Link>
        <div className="flex-between gap-5">
          <SignedIn>
              <UserButton />
            </SignedIn>
            
            <MobileNav/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
