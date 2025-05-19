import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

import React, { Children, ReactNode } from 'react'

function HomeLayout({children}:{children:ReactNode}) {
  return (
    <div>
      <main className='relative text'>
        <Navbar/>
        <div className='flex'>
          <Sidebar/>
          <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pd-14 sm:px-14'>
          <div className='w-full'>
            {children}
          </div>
          </section>
        </div>
        <div className='flex'></div>
        {/* Footer */}
      </main>
    </div>
  )
}

export default HomeLayout
