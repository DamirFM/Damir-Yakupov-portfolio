"use client";
import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from './submit-btn';
import { motion } from "framer-motion";
import  toast  from 'react-hot-toast';
// importing server action
import { sendEmail } from "@/actions/sendEmail";


export default function Contact() {
// SECOND WAY
const { ref } = useSectionInView("Contact")



  return (
    <motion.section
    ref={ref}
    id="contact"
    // min width 100% and max width 38rem
    className="mb-28 sm:mb-28 w-[min(100%, 38rem)]] text-center"
    initial={{ opacity: 0,}}
    animate={{ opacity: 1, }} 
    transition={{ duration: 1.35 }}
    viewport={{
        once: true
    }}
    >
    <SectionHeading>Contact me</SectionHeading>
    <p className='text-gray-700 text-center -mt-6 dark:text-white'
    >Feel free to get in touch with me directly at <a
    className='underline'
    // mailto - will open the default email client
    href="mailto:yakupovdamir93@gmail.com">
    yakupovdamir93@gmail.com</a> or by using the contact form.</p>

    <form 
    // Client side part of handle form submission
    // Server side will be on the actions/sendEmail.ts

    // Way how to handle with the value of the input and textarea
    // instead of using onSubmit() and e.preventDefault()
    // we can use action attribute and send the data to the server
    // action will work only with async function and only on NEXT.JS
    // we need to configure the next.config.js file
    action={ async (formData) => {
        console.log("Running on the client")
        console.log(formData.get('senderEmail'))
        console.log(formData.get('message'))

        const { data, error} = await sendEmail(formData);

        if (error) {
            toast.error(error)
            return;
        }
        toast.success("Email sent successfully!")
        
    }}

    // or we can do action={sendEmail}

    // flex flex-col - will make the input and textarea to be in column
    className='mt-10 flex flex-col '>

        <input 
        className='h-14 px-4 rounded-lg border border-black/10  dark:bg-white/10'
        type="email"
        name="senderEmail"
        // Validation
        // required - will make the input to be 
        required

        maxLength={500}
        placeholder='Your email'/>

        <textarea 
        className='h-52 my-3 px-4 py-3 rounded-lg border border-black/10  dark:bg-white/10'
        name="message"
        placeholder='Your message'
        required
        maxLength={500}/>
        
        <SubmitBtn />

    </form>

    </motion.section>
  )
}
 