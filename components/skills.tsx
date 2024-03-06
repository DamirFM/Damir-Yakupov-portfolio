"use client";
import React from 'react';
import { skillsData } from "../lib/data";
import SectionHeading from './section-heading'
import { useSectionInView } from "@/lib/hooks";
import { motion } from 'framer-motion';

export default function Skills() {

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
  const { ref } = useSectionInView("Skills")

  // settings of Fade in animation for each skill
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    // transfer the animate to the function to be able to use the index of eacj skill
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        // by this we can set the delay for each skill
        // skill     will pop up one after another
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
    >
      <SectionHeading>My Skills</SectionHeading>
      <div>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="px-5 py-3 border-black/[0.1] bg-gray-100 rounded-3xl dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              // whileInView is a prop that allows us to animate the element when it is in the viewport only
              whileInView="animate"
              // tetting for viewport to animate only once
              viewport={{
                once: true,
              }}
              custom={index}
              whileHover={{ scale: [null, 1.08, 1.07] }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  )
}
