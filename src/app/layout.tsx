import './globals.scss'
import '../styles/Home.scss'
import { Fira_Code } from 'next/font/google'

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
  return (
    <html lang="en" className={fira.variable}>
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}
