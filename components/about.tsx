"use client";

import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

import { useSectionInView } from '@/lib/hooks';


export default function About() {

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
