'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Grandstander } from 'next/font/google'

// import MainNavigation from './components/MainNavigation'

const grandstander = Grandstander({ subsets: ['latin-ext'], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: 'Plus/Minus Game Demo',
  description:
    'Interactive Math game designed for learning purposes of students aiming to teach how to add to/subtract from a number.',
}

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={grandstander.className}>
        {/* <section> */}
          {/* Include shared UI here e.g. a header or sidebar */}
          {/* <MainNavigation /> */}
        {/* </section> */}
        {props.children}
      </body>
    </html>
  )
}
