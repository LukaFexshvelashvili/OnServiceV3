import { motion } from "motion/react";
import {
  LineStartDecoration,
  LineStartRightDecoration,
  StarterDecoration,
} from "../../../../assets/decorations/OS_decorations";
import BarInfo from "./BarInfo";

export default function Starter() {
  return (
    <section className=" relative overflow-hidden flex items-center pb-5">
      <div className="absolute z-0 top-20 left-15  flex justify-between no-select max-992:top-2 max-992:left-2">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          src="images/dots/dots_fade_bottom.png"
          className="h-[220px] max-992:h-[200px] max-600:h-[160px] max-600:opacity-50"
        />
      </div>
      <div className="os_container w-full flex items-center flex-col justify-center min-h-[calc(100vh-var(--nav-height))] max-h-[900px] max-1200:max-h-none  relative">
        <div className="max-1200:hidden absolute z-0 top-0 left-0 translate-x-30 flex justify-between no-select">
          <LineStartDecoration />
        </div>
        <div className="max-1200:hidden absolute z-0 -translate-y-2/4 translate-x-full right-0  flex justify-between no-select">
          <LineStartRightDecoration />
        </div>
        <div className="flex items-center w-full relative max-1200:flex-col max-1200:gap-15 max-1200:pt-20 max-600:pt-15">
          <div className="flex flex-col gap-2 tracking-wider flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.2,
                ease: "easeInOut",
              }}
              className="text-main text-[36px] font-mainBold max-1200:text-center max-1200:text-[28px] max-992:text-[24px] max-600:text-[22px]"
            >
              ონ სერვისი
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="text-desc text-[20px] leading-9 max-w-[630px] font-mainMedium max-1200:leading-7 max-600:text-[16px] max-600:text-descDark max-600:leading-6.5 max-1200:text-[17px] max-1200:text-center"
            >
              ჩვენ გთავაზობთ თანამედროვე ციფრული სერვისების მომსახურებას,
              ხელმისაწვდომად და სწრაფად
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.6,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2 mt-5 max-1200:justify-center"
            >
              <button className="os_b w-[160px]">შეკვეთა</button>
              <button className="os_sb os_line_hover w-[160px]">
                პროექტები
              </button>
            </motion.div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <StarterDecoration
              className="max-600:w-[90%] max-600:h-auto"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 0.6,
                delay: 0.3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.6,
            delay: 0.6,
            ease: "easeInOut",
          }}
          className="shrink-0 w-full rounded-lg bg-gradient-to-r  from-main to-purple p-5 h-[160px] max-992:h-auto  mt-20 max-992:mt-15 max-600:mt-10 flex items-center justify-center gap-20 relative overflow-hidden"
        >
          <div className="absolute h-full w-full top-0 left-0  flex justify-between px-3 no-select items-center select-none">
            <img
              src="images/dots/wide-left-fade.png"
              className="h-full w-auto py-4 object-cover max-992:opacity-50"
            />
            <img
              src="images/dots/center-fade.png"
              className="h-full w-auto py-4 object-cover max-992:hidden"
            />
            <img
              src="images/dots/wide-right-fade.png"
              className="h-full w-auto py-4 object-cover max-992:hidden"
            />
          </div>
          <div className="relative flex items-center z-[2] max-600:py-0 max-992:flex-wrap max-992:gap-8 max-992:py-5 max-992:justify-center">
            <BarInfo title="პარტნიორები" data="12" />
            <BarInfo title="დასრულებული პროექტი" data="50+" />
            <BarInfo title="პერსონალური მომსახურება" data="120+" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
