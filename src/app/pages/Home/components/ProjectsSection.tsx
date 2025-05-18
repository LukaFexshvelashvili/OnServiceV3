import { motion } from "motion/react";
import { projectsList } from "../../../../api/projects";
import ProjectCard from "../../../../components/Cards/ProjectCard";
import SectionStarter from "../../../../components/SectionStarter";
import SectionSeeMore from "./SectionSeeMore";

export default function ProjectsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="os_container my-10 relative flex flex-col justify-center">
      <div className="absolute z-0  right-0   flex justify-between no-select">
        <img src="images/dots/dots_fade_left.png" className="h-[220px]" />
      </div>
      <SectionStarter title="პროექტები" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 flex flex-wrap justify-center gap-12 max-992:gap-6"
      >
        {projectsList.slice(0, 9).map((project) => (
          <ProjectCard project={project} variants={itemVariants} />
        ))}
      </motion.div>
      <div className="mt-12 max-600:mt-3">
        <SectionSeeMore title="მეტის ნახვა" link="/projects" />
      </div>
    </div>
  );
}
