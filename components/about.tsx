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
        As a Front-End Developer at <span className="font-medium">SevenDot Analytics Inc.</span>, I focus on optimizing performance and implementing scalable features. I've <span className="font-medium">reduced development time by 40%</span>  and enhanced app stability through Redux for state management and GraphQL with PostgreSQL for efficient data synchronization. I also improved mobile app performance and UI by leveraging <span className="font-medium">React Native, TypeScript, and Expo</span>, achieving a 25% boost in performance. My work emphasizes cross-platform compatibility, clean code, and thorough testing with <span className="font-medium">Jest and Mocha</span> to ensure stability.
      </p>



    </motion.section>
  )
}
