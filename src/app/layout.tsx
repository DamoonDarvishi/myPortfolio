'use client'
import { useState } from 'react'
import { Fira_Code } from 'next/font/google'
import '@/scss/globals.scss'
import '@/scss/index.scss'
import Loader from '@/components/loader/Loader'

const fira = Fira_Code({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fira_code',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoaderLoaded = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 450)
  }
  return (
    <html lang="en" className={fira.variable}>
      <body>
        {/* Layout UI */}
        {showContent && <main>{children}</main>}
        <Loader
          width={48}
          height={48}
          isLoading={isLoading}
          setIsLoading={handleLoaderLoaded}
        />
      </body>
    </html>
  )
}
