"use client";

import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
// import { useInView } from 'react-intersection-observer'; 
// import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';


export default function About() {
  // FIRST WAY


  // // useInView is a hook that returns a boolean value, which tells us if the element is in the viewport or not
  // // it is not reccomended to set State during the rendering, instead we will use UseEffect hook
  // // to synchroniza external system (Global state) with the inView variable value
  // // === 1 ===
  // const {ref, inView} = useInView({
  //   threshold: 0.75
  // });

  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext()


  // // === 2 ===
  // // useEffect is a hook that allows you to perform side effects in your functional components
  // // in this case keep track of the active section
  // useEffect(() => {
  //   // current time minus the time of the last click, and if it is greater than 1000ms
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("About")
  //   }
  // }, 
  // // if inView - the value of the inView variable is true, then the setActiveSection function is called
  // [inView, setActiveSection, timeOfLastClick])

  // SECOND WAY
  const { ref } = useSectionInView("About")


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      id="about">

      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After graduating with a master's degree in
        <span className="font-medium"> Automation in Manufacturing</span>,
        I decided to pursue my passion for programming.
        I enrolled in
        a <span className="underline">University of Toronto coding bootcamp</span> and learned
        <span className="font-medium"> full-stack web development</span>.
        <span className="italic"> My favorite part of programming</span> is
        the problem-solving aspect. I
        <span className="underline"> love</span> the
        feeling of finally figuring out a solution to a problem.
        My core stack is
        <span className="font-medium"> MERN (MongoDB, Express.js, React.js, Node.js)</span>.
        I possess  of TypeScript fundamentals and continually seek avenues for mastering valuable technologies.
        Presently, I'm actively looking fo a <span className="font-medium">full-time role</span>
        as a software developer.
      </p>

      <p>
        <span className="italic">During my non-coding hours,</span>,
        I find pleasure in photography, watching movies, and attending music concerts.
      </p>

    </motion.section>
  )
}
