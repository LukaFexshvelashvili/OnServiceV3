import { motion } from "motion/react";

export default function ControlPanelSection() {
  return (
    <section className=" relative overflow-hidden flex-col flex justify-center">
      <div className="my-10 flex flex-col items-center justify-center text-center gap-4 max-992:mb-0">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className={`text-head text-center text-[26px] max-992:text-[24px] font-mainBold tracking-wide max-600:text-[22px]`}
        >
          <span className="text-main">ონ სერვის</span> პანელი
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="leading-8 text-desc text-[18px] max-w-[650px] max-992:text-[18px] max-600:text-[16px] max-600:leading-6.5"
        >
          გთავაზობთ ჩვენს მიერ დამზადებულ ვებგვერდის სამართავ პანელს
        </motion.p>
      </div>
      <div className=" max-w-[600px] mx-auto w-[90%] my-15 max-992:my-10 z-10 relative ">
        <motion.img
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          src="images/services/control_panel.png"
          alt="საკონტროლო პანელი - OnService"
        />
      </div>
      <div className="absolute w-full flex justify-between no-select">
        <LineBackDecoration />
      </div>
    </section>
  );
}
export const LineBackDecoration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="2001"
    height="270"
    viewBox="0 0 2001 270"
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M1996.5 200.5C1833.5 192.667 1384 176 1297 78"
      stroke="black"
      stroke-opacity="0.05"
      stroke-width="8"
      stroke-linecap="round"
      stroke-dasharray="20 20"
      initial={{ strokeDashoffset: 300, opacity: 0 }}
      whileInView={{ strokeDashoffset: 0, opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: true, amount: 0.2 }}
    />
    <motion.path
      d="M4.5 266C147.667 173.167 483.5 -8.89991 681.5 5.50009"
      stroke="black"
      stroke-opacity="0.05"
      stroke-width="8"
      stroke-linecap="round"
      stroke-dasharray="20 20"
      initial={{ strokeDashoffset: 300, opacity: 0 }}
      whileInView={{ strokeDashoffset: 0, opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: true, amount: 0.2 }}
    />
  </svg>
);
