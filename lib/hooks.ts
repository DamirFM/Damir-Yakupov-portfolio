import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
import type { SectionName } from '@/lib/types';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  // useInView is a hook that returns a boolean value, which tells us if the element is in the viewport or not
  // it is not reccomended to set State during the rendering, instead we will use UseEffect hook
  // to synchroniza external system (Global state) with the inView variable value
  // === 1 ===
  const { ref, inView } = useInView({
    // threshold is a number between 0 and 1, which tells us how much of the element should be in the viewport
    threshold: threshold
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()


  // === 2 ===
  // useEffect is a hook that allows you to perform side effects in your functional components
  // in this case keep track of the active section
  useEffect(() => {
    // current time minus the time of the last click, and if it is greater than 1000ms
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  },
    // if inView - the value of the inView variable is true, then the setActiveSection function is called
    [inView, setActiveSection, timeOfLastClick, sectionName]);
  return {
    ref
  }

}