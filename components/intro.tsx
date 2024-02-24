// For a having ability to use React Hooks  we need to transform this page to the - client
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div>
            <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                type: "spring",
                duration: 0.3,
            }}
            >
             <Image 
             src="/Damir_Yakupov.jpeg" 
             alt="Damir Yakupov portrait"  
             width="192"
             height="192"
             priority={true}
             className="h-30 w-25 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
             </motion.div>
            </div>
        </div>
            <motion.p
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                type: "spring",
                duration: 0.3,
            }}
            className="text-lg text-center mt-3"
            >
                <span className="font-bold">Hello, I'm Damir.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with expertise in 
                <span className="font-bold"> React, Express, Node.js, and MongoDB. </span>
                As a University of Toronto bootcamp graduate, 
                I've polished my skills in crafting dynamic and efficient web applications.
                I enjoy bringing ideas to life through web applications.
            </motion.p>

    </section>
  )
}
