"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX design",
    description:
      "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
    href: "",
  },
  {
    num: "03",
    title: "Adobe Suits",
    description:
      "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end technologies, allowing me to build complete solutions that meet user needs.",
    href: "",
  },
];

import { easeInOut, motion } from "motion/react";

const Services = () => {
  return (
    <section className="min-[80vh] flex flex-col justify-center py-16 xl:py-16">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-9 group px-6 xl:px-3"
              >
                {/* serial number */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white hover:bg-accent-default transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-accent-default trasition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/85 font-stretch-expanded">{service.description}</p>
                <div className="border-b border-white/30 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
