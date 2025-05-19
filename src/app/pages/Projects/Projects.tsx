import { useState } from "react";
import ProjectCard from "../../../components/Cards/ProjectCard";
import { projectsList } from "../../../api/projects";
import { motion } from "motion/react";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
export default function Projects() {
  const [filters, setFilters] = useState([0, 1, 2, 3, 4]);
  const handleFilterChange = (filter: number, active: boolean) => {
    setFilters((prev) =>
      active ? [...prev, filter] : prev.filter((f) => f !== filter)
    );
  };

  return (
    <main>
      <div className="os_container py-8">
        <div className="relative w-full min-h-[80px] h-auto outline-2 py-5 outline-lineColor rounded-md">
          <p className="absolute case_up font-mainSemiBold tracking-wider text-main left-4 top-0 -translate-y-2/4 px-2 bg-bodyBg">
            ფილტრები
          </p>
          <div className="flex justify-center gap-10 items-center w-full h-full flex-wrap gap-y-3">
            <FilterButton
              id={0}
              title="ვებგვერდები"
              onToggle={handleFilterChange}
            />
            <FilterButton
              id={1}
              title="დიზაინები"
              onToggle={handleFilterChange}
            />
            <FilterButton
              id={2}
              title="რეკლამები"
              onToggle={handleFilterChange}
            />
            <FilterButton
              id={3}
              title="სხვა სერვისები"
              onToggle={handleFilterChange}
            />
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex mt-10 justify-center gap-10 flex-wrap"
        >
          {projectsList.map(
            (project) =>
              project.type.some((type) => filters.includes(type)) && (
                <ProjectCard project={project} variants={itemVariants} />
              )
          )}
        </motion.div>
      </div>
    </main>
  );
}

function FilterButton({
  id,
  title,
  onToggle,
}: {
  id: number;
  title: string;
  onToggle: (id: number, active: boolean) => void;
}) {
  const [active, setActive] = useState(true);
  return (
    <button
      onClick={() => {
        setActive((state) => {
          const newState = !state;
          onToggle(id, newState);
          return newState;
        });
      }}
      className="flex items-center gap-3 cursor-pointer px-2 h-[40px] tracking-[1px] text-headDark60 font-mainSemiBold case_up"
    >
      <div
        className={`h-[16px] aspect-square border-2 border-main rounded-sm flex justify-center items-center transition-colors ${
          active ? "bg-main" : "bg-transparent"
        }`}
      >
        {/* Checkmark */}
        <svg
          width="12"
          height="14"
          viewBox="0 0 9 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.18005 2.63154C8.371 2.81359 8.37864 3.1153 8.1966 3.30626L3.9529 7.76191C3.90832 7.80871 3.85469 7.84596 3.79528 7.87142C3.73587 7.89687 3.67191 7.91 3.60727 7.91C3.54264 7.91 3.47867 7.89687 3.41926 7.87142C3.35985 7.84596 3.30623 7.80871 3.26164 7.76191L1.14011 5.53408C1.09502 5.48907 1.0594 5.43549 1.03534 5.3765C1.01128 5.3175 0.999279 5.25429 1.00003 5.19058C1.00079 5.12687 1.01429 5.06396 1.03973 5.00555C1.06518 4.94715 1.10206 4.89442 1.1482 4.85049C1.19435 4.80656 1.24881 4.7723 1.3084 4.74975C1.36799 4.7272 1.43148 4.7168 1.49515 4.71917C1.55882 4.72154 1.62137 4.73663 1.67911 4.76355C1.73686 4.79047 1.78863 4.82868 1.83137 4.87592L3.60727 6.74093L7.50533 2.64809C7.59263 2.55646 7.71274 2.50325 7.83926 2.50014C7.96578 2.49704 8.08836 2.5443 8.18005 2.63154Z"
            fill="white"
          />
        </svg>
      </div>
      {title}
    </button>
  );
}
