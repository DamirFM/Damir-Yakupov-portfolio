"use client";
import React from 'react';
import { experiencesData } from "../lib/data";
import SectionHeading from './section-heading';
import { useSectionInView } from "@/lib/hooks";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useThemeContext } from "@/context/theme-context";

export default function Experience() {
    // SECOND WAY
    const { ref } = useSectionInView("Experience", 0.5)
    const { theme } = useThemeContext();

    return (
        <section
            className='mb-28 max-w-[56rem] text-center leading-8 sm:mb-42 scroll-mt-30 ' 
            ref={ref}
            id="experience">
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline 
            // lineColor = '' - fix the bug with the line not showing
            // properties for this liine located in the app/global.css
            lineColor=''>
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        {/* VerticalTimelineElement do not using the Tailwind properties */}
                        {/* I can not use className, but insted I will use contentStyle = {{}}  */}
                        <VerticalTimelineElement
                            contentStyle={{
                                background:
                                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                borderRadius: "20px",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{ 
                                borderRight:
                                theme === "light"
                                    ? "0.4rem solid #9ca3af"
                                    : "0.4rem solid rgba(255, 255, 255, 0.5)", }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{ 
                                background: 
                                theme === "light" ? "#9ca3af" : "rgba(255, 255, 255, 0.15)", 
                                color: "#fff",
                                fontSize: "1.5rem"
                            }}

                        >
                            <h3 className="font-normal !mt-0">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="font-normal !mt-1 text-gray-700 dark:text-white/75" >{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment >))}
            </VerticalTimeline>
        </section>
    );
}
