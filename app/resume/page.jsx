"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
  info: [
    { Name: "Name", Value: "Moinul Islam Faisal" },
    { Name: "Phone", Value: "(+880) 1402-002561, (+880)1521-224726" },
    { Name: "Experience", Value: "Faisal" },
    { Name: "Vercel", Value: "https://vercel.com/ragnerds-projects" },
    { Name: "Nationality", Value: "Bangladeshi" },
    { Name: "Email", Value: "moinulislamfoysal.ie@gmail.com" },
    { Name: "Freelance", Value: "Available" },
    { Name: "Language", Value: "English(Fluent), Bangla" },
  ],
};

//expertise data
const experience = {
  icon: "my-app/assets/medal.png",
  title: "My Experience",
  description:
    "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "Jan 2020 - Present",
    },
    {
      company: "Tech Solutions Inc",
      position: "Senior/Lead Developer",
      duration: "Jan 2020 - Present",
    },
    {
      company: "Tech Solutions Inc",
      position: "Mid Level Developer",
      duration: "Jan 2019 - 2020 ",
    },
    {
      company: "Tech Solutions Inc",
      position: "Junior Developer and/or Intern",
      duration: "Jan 2018 - 2019",
    },
  ],
};

//education data
const education = {
  icon: "my-app/assets/education.png",
  title: "My Education",
  description:
    "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
  items: [
    {
      institution: "Online Course Platforms",
      degree: "Full Stack Developer",
      duration: "Jan 2020 - Present",
    },
    {
      institution: "Codecademy",
      degree: "Senior/Lead Developer",
      duration: "Jan 2020 - Present",
    },
    {
      institution: "Online Courses",
      degree: "Mid Level Developer",
      duration: "Jan 2019 - 2020 ",
    },
    {
      institution: "Tech Institute",
      degree: "Junior Developer and/or Intern",
      duration: "Jan 2018 - 2019",
    },
    {
      institution: "Design School",
      degree: "Junior Developer and/or Intern",
      duration: "Jan 2018 - 2019",
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description:
    "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
  skillList: [
    { skill: "HTML5", icon: <FaHtml5 /> },
    { skill: "CSS3", icon: <FaCss3 /> },
    { skill: "JavaScript", icon: <FaJs /> },
    { skill: "React", icon: <FaReact /> },
    { skill: "Figma", icon: <FaFigma /> },
    { skill: "Node.js", icon: <FaNodeJs /> },
    { skill: "Tailwind CSS", icon: <SiTailwindcss /> },
    { skill: "Next.js", icon: <SiNextdotjs /> },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "motion/react";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
