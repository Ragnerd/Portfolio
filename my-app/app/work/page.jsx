"use client";
import { motion } from "motion/react";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/modules";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
    stack: [
      { name: "Html 5", name: "Css3", name: "JavaScript", name: "React" },
    ],
    Image: "assets/assets/work/thumb1.png",
    Live: "",
    Github: "",
  },
  {
    num: "02",
    category: "full-stack",
    title: "project 1",
    description:
      "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
    stack: [{ name: "Next.js", name: "Tailwind.css", name: "Node.js" }],
    Image: "assets/assets/work/thumb2.png",
    Live: "",
    Github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
    stack: [{ name: "Next.js", name: "Tailwind.css" }],
    Image: "assets/assets/work/thumb3.png",
    Live: "",
    Github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">projects</div>
    </motion.section>
  );
};

export default Work;
