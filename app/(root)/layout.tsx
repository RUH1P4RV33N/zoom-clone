import React, { Children, ReactNode } from 'react'

function RootLayout({children}:{children:ReactNode}) {
  return (
    <div>
      <main>
        {/* Navbar */}
        {children}
        {/* Footer */}
      </main>
    </div>
  )
}

export default RootLayout
