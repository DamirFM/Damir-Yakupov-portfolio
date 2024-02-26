import React, { useState } from 'react'
import { links } from "../lib/data";

// we need type SectionName for the activeSection state
// we can use typeof to get the type of the name property of the links array
// this way we can be sure that the activeSection state will always be one of the names of the sections
type SectionName = typeof links[number]["name"];
export default function ActiveSectionContextProvider () {
// for keeping track of the active section we need to use the context state
const [ activeSection, setActiveSection ] = useState<SectionName>("Home");


  return (
    <div>ActiveSectionContextProvider
        
    </div>
  )
}
