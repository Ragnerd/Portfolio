"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative mb-6 xl:mb-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* imgae */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[297px] h-[297px] xl:w-[497px] xl:h-[497px] mix-blend-lighten absolute"
        >
          <Image
            src="/1680372823413.png"
            fill
            priority
            quality={100}
            alt="Moinul Faisal"
            className="object-contain"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="251"
            cy="251"
            r="251"
            stroke="#24EAEA"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92, 72",
                "4, 250, 22, 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
