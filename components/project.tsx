"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

// lets metion ProjectProps here, by this way we can use it in the Project component
type ProjectProps = {
    title: string,
    description: string,
    tags: string[],
    imageUrl: string
}

export default function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) {
    // we need to use useRef hook to get the reference to the element
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        // first we need actual HTML reference to the element
        target: ref,
        // then we need to define the viewport offset
        // this mean when we actually will start the animation
        // start animation "0 1" mean when the bottom of the element is at the top of the viewport
        // finish animation "1.33 1" mean when the bottom of the element is at the bottom of the viewport
        offset: ["0 1", "1.33 1"]
    })
    // managing the scale and opacity of the element (I do not want section appear from 0 scale and 0 opacity to 1 scale and 1 opacity, I want to start from 0.8 scale and 0.6 opacity to 1 scale and 1 opacity)
    // we need to use useTransform hook to transform the scrollYProgress
    // we need to define the range of the scrollYProgress
    // we need to define the range of the scaleProgess and opacityProgess
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div
            ref={ref}
            style={{ scale: scaleProgess, opacity: opacityProgess }}
            className='group mb-3 sm:mb-8 last:mb-0'
        >
            <section
                className=' bg-gray-100 max-w-[42rem] rounded-lg border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
                    <h3 className='text-2xl font-semibold '>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700  text-[1.07rem] dark:text-white'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt={"Project I've worked on"}
                    quality={95}
                    className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                    transition 
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2
                
                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2
                
                    group-even:right-[initial] group-even:-left-40' />
            </section>
        </motion.div>
    )
}