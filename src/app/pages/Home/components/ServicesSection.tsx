import { motion, MotionProps } from "motion/react";
import {
  AdIcon,
  AdPrintIcon,
  DesignIcon,
  DoubleArrowIcon,
  ServiceIcon,
  WebsiteIcon,
} from "../../../../assets/icons/OS_icons";
import SectionStarter from "../../../../components/SectionStarter";
import SectionSeeMore from "./SectionSeeMore";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
export default function ServicesSection() {
  return (
    <section className=" relative overflow-hidden flex items-center max-600:mt-6 pt-8">
      <div className="absolute z-0 top-0 left-15  max-992:left-0 flex justify-between no-select">
        <img
          src="images/dots/dots.png"
          className="h-[220px] max-992:h-[150px] max-992:opacity-50"
        />
      </div>
      <div className="absolute z-0 bottom-5 right-15 max-992:right-0 flex justify-between no-select">
        <img
          src="images/dots/dots.png"
          className="h-[220px] max-992:h-[150px] max-992:opacity-50"
        />
      </div>
      <div className="os_container max-600:mb-6">
        <SectionStarter title="სერვისები" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-start gap-10  justify-center flex-wrap my-20 max-600:gap-2 max-600:my-6"
        >
          <ServiceBlock
            icon={WebsiteIcon}
            title="ვებგვერდის"
            subtitle="დამზადება"
            link="/"
            variants={itemVariants}
          />{" "}
          <ServiceBlock
            icon={DesignIcon}
            title="დიზაინის"
            subtitle="დამზადება"
            link="/"
            variants={itemVariants}
          />{" "}
          <ServiceBlock
            icon={AdPrintIcon}
            title="რეკლამის"
            subtitle="დაბეჭდვა"
            link="/"
            variants={itemVariants}
          />{" "}
          <ServiceBlock
            icon={AdIcon}
            title="პროდუქტის"
            subtitle="რეკლამირება"
            link="/"
            variants={itemVariants}
          />
          <ServiceBlock
            icon={ServiceIcon}
            title="პერსონალური"
            subtitle="მომსახურება"
            link="/"
            variants={itemVariants}
          />
        </motion.div>
        <SectionSeeMore title="მეტის ნახვა" link="/services" />
      </div>
    </section>
  );
}
type ServiceBlockProps = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  link: string;
} & MotionProps;
function ServiceBlock({
  title,
  subtitle,
  icon: Icon,
  link,
  ...divProps
}: ServiceBlockProps) {
  return (
    <motion.div
      {...divProps}
      className="relative overflow-hidden group flex flex-col gap-5 max-600:gap-3 max-600:w-[150px] w-[200px] items-center p-5 rounded-md transition-shadow  bg-transparent cursor-pointer hover:shadow-[8px_8px_15px_#4059fd34] group-hover:[&>svg]:bg-rose-900"
    >
      <div className="absolute top-0 left-0 opacity-0 bg-gradient-to-br from-main to-purple duration-300 group-hover:opacity-100 transition-opacity h-full w-full z-0"></div>
      <Icon className="relative z-[2] h-[60px]" />
      <h2 className="relative group-hover:text-white text-[18px] max-600:text-[16px] text-headDark tracking-wider duration-300 font-mainSemiBold text-center transition-colors">
        {title}
        <span className=" text-headDark60 block group-hover:text-whiteDesc transition-colors duration-300">
          {subtitle}
        </span>
      </h2>
      <a
        href={link}
        className="relative descLight case_up inline-flex items-center gap-2 text-descLight max-600:text-[14px] mt-1 duration-300 group-hover:text-white transition-colors"
      >
        შეუკვეთე{" "}
        <DoubleArrowIcon className="[&>path]:stroke-descLight group-hover:[&>path]:stroke-white  [&>path]:transition-colors" />
      </a>
    </motion.div>
  );
}
