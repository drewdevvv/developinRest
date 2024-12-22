import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { Logo } from '@/components/logo'
import { SpeedInsights } from "@vercel/speed-insights/next"

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: 'develop in Rest | Tech Consulting Agency',
  description: 'Empowering your digital journey with innovative solutions and peace of mind.',
  icons: {
    icon: '/dir-logo.svg',
  },
  openGraph: {
    title: 'develop in Rest | Tech Consulting Agency',
    description: 'Empowering your digital journey with innovative solutions and peace of mind.',
    images: ['/dir-logo.svg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} font-lexend antialiased`}
      >
        <div className="mx-auto max-w-screen-2xl aspect-[21/9] overflow-y-auto">
          <header className="w-full py-6 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <nav className="container px-4 md:px-6 mx-auto flex justify-between items-center">
              <Logo />
              <div className="space-x-6">
                <a href="#services" className="text-gray-600 hover:text-[#4C9F70] dark:text-gray-300 dark:hover:text-white transition-colors">
                  Services
                </a>
                <a href="#contact" className="text-gray-600 hover:text-[#4C9F70] dark:text-gray-300 dark:hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </nav>
          </header>
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}

