import NavBar from './components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Blog',
  description: 'Blog App with next 13 and MUI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
