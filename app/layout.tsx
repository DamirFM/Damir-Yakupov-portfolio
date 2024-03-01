// server side component
// children component become CLIENT SIDE COMPONENT if we mention "use client" at the top of the file
// or if we import them to the client side component 
import './globals.css'
import Header from "@/components/header";
import ActiveSectionContextProvider from '@/context/active-section-context';
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
    // !scroll-smooth is a custom class to enable smooth scrolling (! - is a custom prefix to avoid purging the class)
    <html lang="en" className='!scroll-smooth'>
      {/* applying the font inter */}
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative py-28 sm:pt-36`}>
        <div className="bg-[#fbe2e8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#d7ecfb] absolute top-[-6rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[15rem] 2xl:left-[-5rem]"></div>
        {/* page.tsx */}

       {/* we are wraped by client component rest of the application, but as long as we use children PROP inside the ActiveSectionContextProvider */}

       {/* // for access to useState we need to wrap all components we want with the context provider */}

       {/* === 1 === */}
       {/* here we are PROVIDED the global context */}
    
       <ActiveSectionContextProvider>
       {/* === 2 === */}
       {/* all the children have to consume the global context */}
       <Header/> 
       {/* children => page.tsx */}
       {children}
      </ActiveSectionContextProvider>        
       
        </body>
    </html>
  )
}
