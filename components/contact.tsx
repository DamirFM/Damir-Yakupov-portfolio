"use client";
import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from "@/lib/hooks";
export default function Contact() {
// SECOND WAY
const { ref } = useSectionInView("Skills")
  return (
    <section
    ref={ref}
    id="contact"
    >
    <SectionHeading>Contact me</SectionHeading>
    </section>
  )
}
