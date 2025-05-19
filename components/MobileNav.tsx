"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

const MobileNav = () => {
  const pathname = usePathname()
  const [clickedRoute, setClickedRoute] = useState<string | null>(null)

  useEffect(() => {
    setClickedRoute(null)
  }, [pathname])

  return (
    <section className="w-full max-w-[220px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="Menu"
            width={30}
            height={30}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="border-none bg-black-2 px-4 py-5 w-[220px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/logo.svg"
                width={50}
                height={50}
                alt="Logo"
                className="max-sm:size-10"
              />
              <p className="text-xl font-bold text-white">Joon's</p>
            </Link>
            <SheetClose className="p-0.5 text-white rounded hover:opacity-100 opacity-70 transition cursor-pointer">
              <X className="w-3.5 h-3.5" />
            </SheetClose>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 text-white">
            {sidebarLinks.map((link) => {
              const isActive =
                clickedRoute === link.route ||
                (!clickedRoute && pathname === link.route)

              return (
                <SheetClose asChild key={link.label}>
                  <Link
                    href={link.route}
                    onClick={() => setClickedRoute(link.route)}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      {
                        'bg-blue-1': isActive,
                        'hover:bg-transparent': true,
                      }
                    )}
                  >
                    <Image
                      src={link.imgUrl}
                      alt={link.label}
                      width={20}
                      height={20}
                    />
                    {link.label}
                  </Link>
                </SheetClose>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
