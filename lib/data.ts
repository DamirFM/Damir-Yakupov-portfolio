import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bookShelf from "@/public/bookShelf.png";
import fruitWave from "@/public/fruitWave.png";
import collection from "@/public/collection.png";
import vulcan from "@/public/vulcan.png";
import seven from "@/public/seven.png";
import oddsPulse from "@/public/oddsPulse.png";
import aiChatBotImage from "@/public/aiChatBotImage.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  // we mention specifically this ^ strings as a path
] as const;

export const experiencesData = [
  {
    title: "AI Chat Bot App 🤖💬",
    description:
      "A simple AI-powered chat application built with Next.js and OpenAI's GPT-4-turbo model.",
    tags: ["Next.js", "OpenAI GPT-4", "Tailwind CSS"],
    imageUrl: aiChatBotImage, // Replace with the actual image variable you have
    link: "https://ai-chat-bot-ivory-ten.vercel.app",
  },

{
  title: "Full-stack Developer, SevenDot Analytics Inc.",
  location: "Toronto, On",
  description:
    "As a Full-stack Developer, I lead the development of a sports betting application, implementing dynamic and interactive features using React Native and enhancing user experience. My role involves collaborating with cross-functional teams, optimizing application performance, and integrating advanced functionalities to meet user needs.",
  icon: React.createElement(CgWorkAlt),
  date: "2024 - Present",
},
  {
    title: "Graduated UofT bootcamp",
    location: "Toronto, On",
    description:
      "I completed a program where I mastered the basics of full-stack web development. This comprehensive training equipped me to embark on my career journey as a versatile developer, proficient in both front-end and back-end development.",

    icon: React.createElement(LuGraduationCap), 
    date: "2024",
  },
  {
    title: "Electronics Technician, Assurant",
    location: "Toronto, On",
    description:
      "I worked as technician, diagnose and repair electronic faults, meet deadlines, and reduce failures through data analysis. I also optimize team productivity by delegating tasks and training technicians.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full Stack  Developer, Transneft",
    location: "Kazan, Russia",
    description:
      "Led the development of a pipeline leak detection and localization system, effectively preventing emergency spills and thefts of oil and oil products",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2021",
  },
  {
    title: "Master’s Degree, Ufa State Petroleum Technological University",
    location: "Ufa, Russia",
    description:
      "I earned a Master's degree in Automation of Production Processes in the Oil and Gas Industry, where I gained expertise in optimizing production workflows, implementing advanced automation techniques, and enhancing operational efficiency within the oil and gas sector.",
      icon: React.createElement(LuGraduationCap), 
    date: "2015 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Odds Pulse",
    description:
      "A sports analytics platform providing real-time NFL betting line movements, player props, and interactive trends. ",
    tags: ["React Native", "Expo", "AWS S3", "TypeScript"],
    imageUrl: oddsPulse,
    link: "https://apps.apple.com/us/app/odds-pulse/id6736870855?platform=iphone"
  },
  {
    title: "Dream Collection",
    description:
      "Next.js platform enables users to create galleries and explore content.",
    tags: ["Next.js", "TypeScript", "AWS S3", "Tailwind"],
    imageUrl: collection,
    link: "https://github.com/DamirFM/Project-6"
  },
  {
    title: "SevenDot Analytics Inc.",
    description:
      "Alter the gambling landscape through research and education.",
    tags: ["React Native", "Python", "PostgreSQL", "Node.js", "Jest"],
    imageUrl: seven,
    link: "https://www.linkedin.com/company/sevendot-analytics-inc/about/"
  }
  ,
  {
    title: "FruitWave",
    description:
      "Angular-based e-commerce platform that allows users to browse and purchase a variety of products.",
    tags: ["Stripe", "TypeScript", "Angular Material", "Angular"],
    imageUrl: fruitWave,
    link: "https://github.com/DamirFM/FruitWave"
  },
  {
    title: "The Bookshelf",
    description:
      "Bookshelf App: Search, save, and manage books with ease. User can save them to their personal bookshelf",
    tags: [ "MongoDB","Express", "React", "Node.js", "JWT", "Bootstrap"],
    imageUrl: bookShelf,
    link: "https://github.com/DamirFM/Bookshelf-MERN_APP"
  },
  {
    title: "Vulcan's Computer Emporium",
    description:
      "An ecommerce storefront. The store's niche is selling high end computer equipment to consumers.",
    tags:["MongoDB","Express", "React", "Node.js", "Chakra UI"],
    imageUrl: vulcan,
    link: "https://github.com/DamirFM/Vulcan-s-Computer-Emporium"
  },

] as const;

export const skillsData = [
  "Next.js",
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "Angular",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "AWS",
  "Stripe",
  "Jest",
  "Chakra UI",
  "Python",
  "PostgreSQL",
  "Docker",
  "Expo",
  "Xcode",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "GraphQL",
  "Apollo",
  "Insomnia",
  "MySQL",
  "Sequelize",
  "JWT",
  "Babel",
  "PWA",
  "Webpack",
  "IndexedDB",
  "Framer Motion",
] as const;