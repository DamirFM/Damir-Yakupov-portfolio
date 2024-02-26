import React, { useState, createContext } from 'react'
import { links } from "../lib/data";


type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

// we need type SectionName for the activeSection state
// we can use typeof to get the type of the name property of the links array
// this way we can be sure that the activeSection state will always be one of the names of the sections 
// number is used to get the type of the name property of the links array(it could be any of links)
type SectionName = typeof links[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);
export default function ActiveSectionContextProvider ({ children }: ActiveSectionContextProviderProps) {
// for keeping track of the active section we need to use the context state
const [ activeSection, setActiveSection ] = useState<SectionName>("Home");

  return (
  <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection
  
  }}>
    {children}
  </ActiveSectionContext.Provider>)
  
}
