'use client'
import React from 'react'
import {sidebarLinks} from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils';

const Sidebar = () => {
    const pathname = usePathname()
  return (
    <section className='sticky top-0 left-0 flex h-screen w-fit flex-col justify-between bg-black-2 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className='flex flex-1 flex-col gap-6'>
            {
                sidebarLinks.map((link)=>{
                    const isActive =
                    link.route === '/'
                        ? pathname === '/'
                        : pathname.startsWith(link.route);

                    return(
                        <Link href={link.route}
                        key={link.label}
                        className={cn('flex gap-4 items-center p-4 rounded-lg justify-start',{'bg-blue-1':isActive,})}>
                           <Image src={link.imgUrl}
                           alt={link.label}
                           width={24}
                           height={24}/>
                           <p className='text-lg font-semibold max-lg:hidden'>
                            {link.label}
                           </p>
              
                        </Link>
                    )
                }
            )
            }
        </div>
    </section>
  )
}

export default Sidebar
