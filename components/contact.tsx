"use client";
import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from "framer-motion";
export default function Contact() {
// SECOND WAY
const { ref } = useSectionInView("Skills")

const sendEmail = async (formData: FormData) => {
    'use server';
console.log(formData.get('senderEmail'))
console.log(formData.get('message'))
}
  return (
    <motion.section
    ref={ref}
    id="contact"
    // min width 100% and max width 38rem
    className="mb-20 sm:mb-28 w-[min(100%, 38rem)]] text-center"
    initial={{ opacity: 0,}}
    animate={{ opacity: 1, }} 
    transition={{ duration: 1.35 }}
    viewport={{
        once: true
    }}
    >
    <SectionHeading>Contact me</SectionHeading>
    <p className='text-gray-700 text-center -mt-6'
    >Feel free to get in touch with me directly at <a
    className='underline'
    // mailto - will open the default email client
    href="mailto:yakupovdamir93@gmail.com">
    yakupovdamir93@gmail.com</a> or by using the contact form.</p>

    <form 
    // Way how to handle with the value of the input and textarea
    // instead of using onSubmit() and e.preventDefault()
    // we can use action attribute and send the data to the server
    // action will work only with async function and only on NEXT.JS
    // we need to configure the next.config.js file
    action={async FormData => {
        console.log(FormData)
    }}

    // flex flex-col - will make the input and textarea to be in column
    className='mt-10 flex flex-col'>

        <input 
        className='h-14 px-4 rounded-lg border border-black/10'
        type="email"
        name="senderEmail"
        // Validation
        // required - will make the input to be 
        required

        maxLength={500}
        placeholder='Your email'/>

        <textarea 
        className='h-52 my-3 px-4 py-3 rounded-lg border border-black/10'
        name="message"
        placeholder='Your message'
        required
        maxLength={500}/>
        
        <button 
        // added group to make the button to have a hover effect
        className='group h-[3rem] w-[8rem] bg-gray-900 rounded-full 
        flex justify-center text-white items-center gap-2 outline-none transition-all
        focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 cursor-pointer' 
        type="submit">
        Send <FaPaperPlane
        className='text-xs opacity-70 transition-all
        // over hover effect move FaPaperPlane horizontally and vertically
        group-hover:translate-x-1
        group-hover:-translate-y-1
        '
        />{' '}
        </button>

    </form>

    </motion.section>
  )
}
 