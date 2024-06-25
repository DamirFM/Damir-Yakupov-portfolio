// For a having ability to use React Hooks  we need to transform this page to the - client
"use client";
import Image from "next/image";
import React, {useEffect} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// React Icons
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
// import { useInView } from 'react-intersection-observer'; 
import { useSectionInView } from "@/lib/hooks";


export default function Intro() {

  // FIRST WAY

  // // useInView is a hook that returns a boolean value, which tells us if the element is in the viewport or not
  // // it is not reccomended to set State during the rendering, instead we will use UseEffect hook
  // // to synchroniza external system (Global state) with the inView variable value
  // // === 1 ===
  // const {ref, inView} = useInView({
  //   threshold: 0.5
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  
  // // === 2 ===
  // // useEffect is a hook that allows you to perform side effects in your functional components
  // // in this case keep track of the active section
  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Home")
  //   }
  // }, 
  // // if inView - the value of the inView variable is true, then the setActiveSection function is called
  // [inView, setActiveSection, timeOfLastClick])

  // SECOND WAY
 const {ref} = useSectionInView("Home")


 const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    
    <section 
    ref={ref}
    className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
    id="home"
    >
        <div className='flex items-center justify-center'>
            <div>
            <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                type: "spring",
                duration: 0.3,
            }}
            >
            <a href="https://unsplash.com/@damirfm" target="_blank">
             <Image 
             src="/Damir_Yakupov.jpeg" 
             alt="Damir Yakupov portrait"  
             width="192"
             height="192"
             priority={true}
             
             className="h-30 w-25 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-black/10"
             onClick={() => {
                
             }}
            />
            </a>
             </motion.div>
            </div>
        </div>
            <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl dark:text-gray-300"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                type: "spring",
                duration: 0.3,
            }}
            >
                <span className="font-bold">Hello, I'm Damir.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with expertise in 
                <span className="font-bold"> React, Express, Node.js, and MongoDB. </span>
               I've
                polished my skills in crafting
                <span className="italic"> dynamic and efficient </span>
                web applications.
                I enjoy bringing ideas to life.
            </motion.h1>
            {/* Buttons in desktop view will be in the same line */}
            {/* If user will change the scale buttons will stack  */}
            <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={
                {
                    delay: 0.2,
                }
            }
            >
                <Link href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex 
                items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
                // active:scale-105 transition - this is a tailwind class
                // make the button bigger when it's active
                // transition-duration: 150ms;
                onClick={() => {
                    // setActiveSection - is a function that will change the value of the activeSection
                    setActiveSection("Contact");
                    // when we click on the link we set the time of the last click 
                    setTimeOfLastClick(Date.now());
                }}
                >Contact me
                <BsArrowRight /> 
                </Link>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 
                rounded-full outline-none focus:scale-110 hover:scale-110
                 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
                href="/Damir_Yakupov_CV.pdf" download >
                Download CV <HiDownload/>{" "}
                </a>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
                href="https://www.linkedin.com/in/damir-yakupov-73b868223/"
                target="_blank">
                <BsLinkedin/>{" "}
                </a>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
                href="https://github.com/DamirFM"
                target="_blank">
                <FaGithubSquare />{" "}
                </a>
            </motion.div>
    </section>
  )
}
