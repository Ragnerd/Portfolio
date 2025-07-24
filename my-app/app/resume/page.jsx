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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "motion/react";

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
      degree: "Full Stack Web Development/Bootcamp",
      duration: "2024 - 2025",
    },
    {
      institution: "Codecademy",
      degree: "Best Coding Practices",
      duration: "2023 - 2024",
    },
    {
      institution: "Online Courses",
      degree: "Learn Intermediate JavaScript",
      duration: "2022",
    },
    {
      institution: "Tech Institute",
      degree: "Lear Front-end Stack",
      duration: "2020 - 2021",
    },
    {
      institution: "Design School",
      degree: "UI/UX Concept",
      duration: "2019",
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

//about data
const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
  info: [
    { Name: "Name", Value: "Moinul Islam Faisal" },
    { Name: "Phone", Value: "(+880) 1402-002561, (+880)1521-224726" },
    { Name: "Experience", Value: "2+ Years" },
    { Name: "Vercel", Value: "https://vercel.com/ragnerds-projects" },
    { Name: "Nationality", Value: "Bangladeshi" },
    { Name: "Email", Value: "moinulislamfoysal.ie@gmail.com" },
    { Name: "Freelance", Value: "Available" },
    { Name: "Language", Value: "English(Fluent), Bangla(Native)" },
  ],
};

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
            <TabsTrigger value="experience" className="hover:cursor-pointer">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="hover:cursor-pointer">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="hover:cursor-pointer">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about" className="hover:cursor-pointer">
              About Me
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[70vh]">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/75 text-justify mx-auto px-3 xl:mx-0 xl:px-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 lg:mb-5 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] mx-3 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start lg:mx-0 gap-2"
                        >
                          <span className="text-accent-default">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[30px] leading-7 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/75 text-justify mx-auto px-3 xl:mx-0 xl:px-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 lg:mb-5 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] mx-3 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start lg:mx-0 gap-2"
                        >
                          <span className="text-accent-default">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[30px] leading-7 text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] mx-3">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/75 text-justify mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 mt-4 xl:mt-5 gap-9 sm:grid-cols-3 xl:grid-cols-4 xl:gap-[40px] xl:mb-6">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl hover:text-accent-default transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.skill}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full h-full">
              <div className="flex flex-col gap-[30px] mx-3">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/75 text-justify mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center xl:justify-start gap-6"
                      >
                        <span className="text-white/75">{item.Name}</span>
                        <span className="text-xl">{item.Value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
