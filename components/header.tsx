// For a having ability to use React Hooks  we need to transform this page to the - client
// all the children have to consume the global context
"use client";

import React  from "react";
// import { useContext } from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
// clsx - for applying some styles conditionally, based on the state of the component
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
// import { ActiveSectionContext } from "@/context/active-section-context";


export default function Header() {
// FIRST WAY
// we need use useContext hook to access the value of the global context
// useContext have access to   
// value={{activeSection,setActiveSection}}>
// from the active-section-context.tsx
// BUT using this way might be a confusing, because ActiveSectionContextType could be null

// const {activeSection, setActiveSection} = useContext(ActiveSectionContext);   

// go back to the active-section-context.tsx and use onother hook - useActiveSectionContext  
    
// SECONR WAY

const {activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return <header className='z-[999] relative'> 
    <motion.div className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
    // after applying motion we can use special props
    // initial state
    // crating new transform
    initial={{y: -200, x:'-50%', opacity: 0}}
    // we will overwrite initial state
    animate={{y: 0,x:'-50%', opacity: 1}}
    ></motion.div>
    <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li 
            // we do not need x:'-50%' here because we have 
            className="h-3/4 flex items-center justify-center relative" 
            key={link.hash}
            initial={{y: -200, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            >
                <Link 
                // clsx takes two arguments, first is the default class, second is the class that will be applied conditionally
                className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition", { "text-gray-950": activeSection === link.name })} 
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  // when we click on the link we set the time of the last click 
                  setTimeOfLastClick(Date.now()) ;
                }}>
               
                {link.name}
                {/* we should apply span only if section is active */}
                {
                  link.name === activeSection && (                
                  <motion.span                    
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-200"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  ></motion.span>)
                }
                

                </Link>
            </motion.li>
        ))}
        </ul>
    </nav>
  </header>;

  
}
