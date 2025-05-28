import { motion, MotionProps } from "motion/react";
import { LineChartDecoration } from "../../../../assets/decorations/OS_decorations";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function DigitalAdsSection() {
  return (
    <div className="os_container flex items-center py-20  max-992:py-10 relative max-1200:flex-col max-1200:gap-10 overflow-x-hidden">
      <div className="flex-1">
        <div className="flex flex-col gap-5 max-600:gap-3.5">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
            className="text-headDark90 font-mainBold text-[26px] max-600:text-[22px] max-992:text-[24px] tracking-wide max-1200:text-center"
          >
            <span className="text-main">ციფრული</span> რეკლამა
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
            className=" text-[18px]  max-992:text-[17px] max-w-[600px] text-descDark leading-7 tracking-wide max-1200:text-center max-600:text-[16px] max-600:px-3 max-600:leading-6.5"
          >
            ჩვენ დაგეხმარებით განათავსოთ რეკლამები თანამედროვე ციფრულ
            პლატფორმებზე, რათა მაქსიმალურად შევძლოთ თქვენი ბიზნესის განვითარება
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-2 flex gap-5 max-1200:justify-center flex-wrap"
          >
            <DigitalAdBlock
              variants={itemVariants}
              image="images/digital/google_ads.png"
              title="Google"
              subtitle="Ads"
            />
            <DigitalAdBlock
              variants={itemVariants}
              image="images/digital/meta.png"
              title="Meta"
            />{" "}
            <DigitalAdBlock
              variants={itemVariants}
              image="images/digital/youtube.png"
              title="Youtube"
            />
          </motion.div>
          <div className="mt-2 z-0 relative left-0flex justify-between no-select">
            <img
              src="images/dots/dots_fade_right_horizontal.png"
              className="w-[260px] object-cover max-600:hidden"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex-1 flex justify-end"
      >
        <LineChartDecoration className="max-h-[350px] w-auto mask_horizontal_fade max-992:w-full max-992:max-w-[700px] max-992:h-auto" />
      </motion.div>
    </div>
  );
}

type DigitalAdBlockProps = {
  title: string;
  subtitle?: string;
  image: string;
} & MotionProps;

export function DigitalAdBlock({
  title,
  subtitle,
  image,
  ...motionProps
}: DigitalAdBlockProps) {
  return (
    <motion.div
      {...motionProps}
      className="h-[50px] select-none rounded-sm outline outline-lineColor px-4 flex items-center gap-3 font-mainSemiBold text-headDark50 cursor-pointer hover:bg-mainClear hover:outline-2 hover:outline-main transition-colors"
    >
      <img
        src={image}
        height={20}
        width={20}
        className="h-auto w-auto max-h-[24px] max-w-[24px] max-600:max-h-[22px] max-600:mmax-w-[22px]"
        alt={`${title} ${subtitle}`}
      />
      <div className="flex items-center gap-1.5 max-600:text-[14px]">
        {title}{" "}
        {subtitle ? <span className=" font-mainMedium">{subtitle}</span> : null}
      </div>
    </motion.div>
  );
}
