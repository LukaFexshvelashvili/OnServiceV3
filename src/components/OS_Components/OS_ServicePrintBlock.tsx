import React from "react";
import { DoubleArrowIcon } from "../../assets/icons/OS_icons";

export default function OS_ServicePrintBlock(props: {
  title: string;
  icon: React.ElementType;
  link: string;
}) {
  return (
    <div className="relative overflow-hidden group flex flex-col gap-1 w-[220px] items-center p-5 rounded-md transition-shadow  bg-transparent cursor-pointer hover:shadow-[8px_8px_15px] shadow-main/20 group-hover:[&>svg]:bg-rose-900">
      <div className="absolute top-0 left-0 opacity-0 bg-gradient-to-br from-main to-purple duration-300 group-hover:opacity-100 transition-opacity h-full w-full z-0"></div>
      <props.icon className="relative z-[2] h-[80px]" />
      <h2 className="relative mt-2 case_up group-hover:text-white text-[16px] text-headDark tracking-wider duration-300 font-mainSemiBold text-center transition-colors">
        {props.title}
      </h2>

      <a
        href={props.link}
        className="relative descLight case_up inline-flex items-center gap-2 text-main text-sm mt-2 duration-300 group-hover:text-white transition-colors"
      >
        შეუკვეთე
        <DoubleArrowIcon className="[&>path]:stroke-main group-hover:[&>path]:stroke-white  [&>path]:transition-colors" />
      </a>
    </div>
  );
}
