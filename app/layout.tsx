import './globals.css'
import Header from "@/components/header";
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
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] py-28 sm:pt-36`}>
        <div className="bg-[#fbe2e8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#d7ecfb] absolute top-[-6rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[15rem] 2xl:left-[-5rem]"></div>
        {/* page.tsx */}
        <Header/>
        {children}
        </body>
    </html>
  )
}
