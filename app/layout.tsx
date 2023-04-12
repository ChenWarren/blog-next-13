import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { siteInfo } from '@/settings/siteInfo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteInfo.name || "Site title",
  description: siteInfo.description || "Site description",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
