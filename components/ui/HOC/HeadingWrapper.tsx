import React, { FC } from "react";
import { ContainerProps } from "@/typings";
import { motion } from "framer-motion";

const HeadingWrapper: FC<ContainerProps> = ({ children }) => {
  return (
    <motion.figcaption
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden uppercase tracking-[3px] sm:tracking-[7px] text-gray-400 text- sm:text-lg md:text-2xl px-6 pt-8 pb-6 rounded-full justify-center"
    >
      <span className="text-[#ffd700]">[</span>
      {children}
      <span className="text-[#ffd700]">]</span>
    </motion.figcaption>
  );
};

export default HeadingWrapper;
