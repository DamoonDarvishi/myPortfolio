import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Frontend Developer',
    default:
      'Frontend Developer - UI / UX enthusiast - JavaScript / React / Next.Js',
  },
  description:
    'As a Frontend Developer, I bring almost 5 years of experience in JavaScript application development. I specialize in using frameworks like React, and Next.Js, along with foundational HTML, CSS, and JavaScript. Able to develop web applications from scratch, as well as maintain existing ones, and add new features. My focus is on writing clean, scalable code that is easy to maintain and thoroughly tested. I enjoy working with managers, designers, and developers to create great products that are both useful and user-friendly. I am committed to continuous learning and am always eager to explore new technologies and refine existing solutions.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
