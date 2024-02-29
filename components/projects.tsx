"use client";
import React, {useEffect} from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
// import { useInView } from 'react-intersection-observer'; 
// import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';


export default function Projects() {
  // FIRST WAY
  // // useInView is a hook that returns a boolean value, which tells us if the element is in the viewport or not
  // // it is not reccomended to set State during the rendering, instead we will use UseEffect hook
  // // to synchroniza external system (Global state) with the inView variable value
  // // === 1 ===
  // const {ref, inView} = useInView({
  //   threshold: 0.5
  // });
  // const { setActiveSection,  timeOfLastClick} = useActiveSectionContext()

  
  // // === 2 ===
  // // useEffect is a hook that allows you to perform side effects in your functional components
  // // in this case keep track of the active section
  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Projects")
  //   }
  // }, 
  // // if inView - the value of the inView variable is true, then the setActiveSection function is called
  // [inView, setActiveSection, timeOfLastClick])

  // SECOND WAY
  
  // SECOND WAY
 const {ref} = useSectionInView("Projects")


  return (

    <section 
    ref={ref}
    id="projects"
    className='scroll-mt-28 mb-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
         projectsData.map((project, index) => (
            <React.Fragment key={index}>
            <Project {...project} />
            </React.Fragment>
          ))

        }
      </div>
    </section> 
  )
}

