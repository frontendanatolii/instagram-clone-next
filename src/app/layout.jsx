'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head>
        <title>Instagram App</title>
      </head>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <RecoilRoot>
            {children}
          </RecoilRoot>
        </SessionProvider>
      </body>
    </html>
  )
}
