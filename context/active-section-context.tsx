"use client";
import React, { useState, createContext } from 'react'
// === 3 ===
// Import the links array from the data file for the type of the activeSection state
import { links } from "../lib/data";
// === 2 ===
// we need type SectionName for the activeSection state
// we can use typeof to get the type of the name property of the links array
// this way we can be sure that the activeSection state will always be one of the names of the sections 
// number is used to get the type of the name property of the links array(it could be any of links)
type SectionName = (typeof links)[number]["name"];
// === 6 ===
// ActiveSectionContextProviderProps is a type for the props of the ActiveSectionContextProvider function
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
}
// === 8 === ActiveSectionContextType is a type for the value of the ActiveSectionContext
type ActiveSectionContextType = {
  // to know what is the type of the activeSection, or setActiveSection just hover over the name of the variable
  // we already defined SectionName type, it uses links array, so we can be sure that the activeSection will be one of the names of the sections
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}
// === 7 ===
// to use activeSection and setActiveSection in the Header component we need to crate a Context Provider (global state)
// ActiveSectionContext - creating a React context
// This context is going to be used to share a certain state 
// and its updater function across different components in your React application.
// The type of the context is ActiveSectionContextType | null. This means that the context can either hold 
// a value of type ActiveSectionContextType or null.
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);


export default function ActiveSectionContextProvider ({ children }: ActiveSectionContextProviderProps) {
// === 5 ===
// because on the root level we wrapped the children with the context provider 
// we have to set the { children } as a prop of ActiveSectionContextProvider function

// === 1 ===
// for keeping track of the active section we need to use the context state
// we are setting useState to string - ("Home"), but it can't be anything else than the name of the section
// we neen tell to TS what type is going to be
// === 4 ===
// for access to this state we need to go to root component and wrap it with the context provider

const [ activeSection, setActiveSection ] = useState<SectionName>("Home");



  return (
    // createContext returns an object with Provider and Consumer properties
    // we are wrapping the children with the context provider
  <ActiveSectionContext.Provider 
  // value is an object with the activeSection and setActiveSection properties
  // we define what value we want to share with the children
  value={{
    // for read an activeSection we need to use activeSection
    activeSection,
    // for setting an activeSection we need to use setActiveSection
    setActiveSection
  }}>
    {children}
  </ActiveSectionContext.Provider>
  )
  
}
