import './globals.css'
import { Inter } from 'next/font/google'
// instantiating the font
const inter = Inter({ subsets: ['latin'] })
// metadata is for the name of the Browser Tab
export const metadata = {
  title: 'Damir Yakupov | Portfolio',
  description: 'Damir Yakupov: Full-stack developer, U of T bootcamp grad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* applying the font inter */}
      <body className={inter.className}>
        {/* page.tsx */}
        {children}
        </body>
    </html>
  )
}
