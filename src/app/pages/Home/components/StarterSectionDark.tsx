import { motion } from "motion/react";
import {
  CircleDecoration,
  LineStartRightDecoration,
} from "../../../../assets/decorations/OS_decorations";
import BarInfo from "./BarInfo";
import { FacebookIcon, InstagramIcon } from "../../../../assets/icons/OS_icons";
import { Link } from "react-router";

export default function Starter() {
  return (
    <section
      id="hero_section"
      className=" relative overflow-hidden flex items-center pb-5 hero_bg min-h-[100dvh] "
    >
      <div className="absolute z-0 top-20 left-15  flex justify-between no-select max-992:top-2 max-992:left-2">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          src="images/dots/dots_fade_bottom_white.png"
          className="h-[220px] max-992:h-[200px] max-600:h-[160px] max-600:opacity-50"
        />
      </div>
      <div className="absolute z-0 bottom-12 left-8  flex justify-between no-select ">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          src="images/dots/wide-left-fade-white.png"
          className="h-[150px]  "
        />
      </div>
      <div className="os_container  h-full  w-full flex items-center pt-16 justify-center min-h-[calc(100vh-var(--nav-height))]  relative">
        <div className="max-1200:hidden absolute z-0  translate-x-full right-0  flex justify-between no-select text-white">
          <LineStartRightDecoration />
        </div>
        <CircleDecoration
          className="absolute top-20 -translate-x-[50%] "
          height={250}
          width={250}
        />
        <CircleDecoration
          className="absolute left-20 "
          height={220}
          width={220}
        />
        <CircleDecoration
          className="absolute bottom-30 "
          height={200}
          width={200}
        />

        <div className="flex items-stretch w-full relative max-1200:flex-col max-1200:gap-10 max-992:pt-8 ">
          <div className="flex flex-col tracking-wider flex-1 h-full justify-between gap-20 max-600:gap-10">
            <div className="flex flex-col gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                className="text-white font-main2Medium case_up text-[36px]  max-992:text-center max-1200:text-[28px] max-992:text-[24px] max-600:text-[22px]"
              >
                <span className="font-main2Bold">ონ</span> სერვისი
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
                className="text-white/60 text-[20px] leading-9 max-w-[630px] font-main2Medium case_up max-1200:leading-7 max-600:text-[16px]  max-600:leading-6.5 max-1200:text-[17px] max-992:mx-auto  max-992:text-center"
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
                className="flex items-center gap-2 mt-5 max-992:justify-center font-main2Medium case_up"
              >
                <button className="os_b w-[160px]">შეკვეთა</button>
                <button className="os_sb os_line_hover w-[160px] text-white">
                  პროექტები
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.8,
                ease: "easeInOut",
              }}
              className="flex gap-5 mt-auto max-600:flex-col"
            >
              <BarInfo title="დასრულებული პროექტი" data="50+" />
              <BarInfo title="პერსონალური მომსახურება" data="120+" />
            </motion.div>
          </div>
          <div className="flex-1 flex items-center justify-end max-992:pb-6">
            <motion.img
              className="max-h-[450px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              src="images/services/control_panel.png"
              alt="საკონტროლო პანელი - OnService"
            />
          </div>
        </div>
        {/* <motion.div
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
        </motion.div> */}
      </div>
      <div className="flex gap-3 items-center text-white absolute bottom-5 right-5">
        <Link to={"FACEBOOK_LINK"}>
          <FacebookIcon />
        </Link>
        <Link to={"INSTAGRAM_LINK"}>
          <InstagramIcon />
        </Link>
      </div>
    </section>
  );
}
