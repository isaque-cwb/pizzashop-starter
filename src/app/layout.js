// css
import './globals.css'

import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google'

import Nav from './components/Nav'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400']
})

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotoCondensed',
  weight: ['300', '400', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
      ${quicksand.variable}
      ${bangers.variable}
      ${robotoCondensed.variable} font-quicksand
      `}
      >
        <Nav />
        {children}
      </body>
    </html>
  )
}
