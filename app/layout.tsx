import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// import MainNavigation from './components/MainNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plus/Minus Game Demo',
  description:
    'Interactive Math game designed for learning purposes of students aiming to teach how to add to/subtract from a number.',
}

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          {/* Include shared UI here e.g. a header or sidebar */}
          {/* <MainNavigation /> */}
        </section>
        {props.children}
      </body>
    </html>
  )
}
