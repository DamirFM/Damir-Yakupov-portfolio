"use client";
import React from 'react'
// because this component is with PROPS we need to type this PROPS
// metion strickly what type of props we are expecting
type SectionHeadingProps = { children: React.ReactNode }

export default function SectionHeading({children}: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium text-center mb-8">
    {children}
    </h2>
  )
}
