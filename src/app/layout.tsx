import type { Metadata } from 'next'
import { Lobster, Lato } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Socials } from '@/components/socials'
import { PageAdjustmentsProvider } from '@/contexts/PageAdjustmentsContext'

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
})

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster',
})

export const metadata: Metadata = {
  title: 'Micaela Paredes',
  description:
    'Dev FullStack & Designer: Landing pages, UX design, UI design, Web developer, app, react.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PageAdjustmentsProvider>
      <html
        lang="en"
        className={`${lato.variable} ${lobster.variable} scroll-smooth`}
      >
        <body className="h-screen font-lato">
          <Header />
          {children}
          <Socials />
        </body>
      </html>
    </PageAdjustmentsProvider>
  )
}
