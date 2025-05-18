import { motion } from "motion/react";
import React from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
export default function OS_ServiceBlock(props: {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden group flex flex-col gap-2 w-[350px] items-center p-5 rounded-md transition-shadow  bg-transparent cursor-pointer hover:shadow-[8px_8px_15px_#4059fd34] group-hover:[&>svg]:bg-rose-900"
    >
      <div className="absolute top-0 left-0 opacity-0 bg-gradient-to-br from-main to-purple duration-300 group-hover:opacity-100 transition-opacity h-full w-full z-0 "></div>
      <props.icon className="relative z-[2] h-[80px] [&>path]:stroke-2" />
      <h2 className="relative mt-2 case_up group-hover:text-white text-[16px] text-headDark tracking-wider duration-300 font-mainSemiBold text-center transition-colors">
        {props.title}
      </h2>
      <p className="relative text-headDark60 block group-hover:text-whiteDesc transition-colors duration-300 text-center text-[14px] tracking-wider leading-5.5">
        {props.description}
      </p>
      {/* <a
        href={props.link}
        className="relative descLight case_up inline-flex items-center gap-2 text-main  mt-2 duration-300 group-hover:text-white transition-colors"
      >
        გაიგე მეტი{" "}
        <DoubleArrowIcon className="[&>path]:stroke-main group-hover:[&>path]:stroke-white  [&>path]:transition-colors" />
      </a> */}
    </motion.div>
  );
}
