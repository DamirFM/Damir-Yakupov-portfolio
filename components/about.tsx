"use client";
import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
export default function About() {
  return (
    <motion.section
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
        I am also familiar with TypeScript. I am always looking to learn new technologies. I am currently looking for a 
        <span className="font-medium">full-time position</span> 
        as a software developer.
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, 
        I enjoy hockey, watching movies, and attending music concerts. 
        I also enjoy <span className="font-medium">learning new things</span>. 
        </p>

    </motion.section>
  )
}
