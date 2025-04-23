import ProjectCard from "../../../../components/Cards/ProjectCard";
import SectionStarter from "../../../../components/SectionStarter";
import SectionSeeMore from "./SectionSeeMore";

export default function ProjectsSection() {
  return (
    <div className="os_container my-10 relative flex flex-col justify-center">
      <div className="absolute z-0  right-0 translate-x-2/4  flex justify-between no-select">
        <img src="images/dots/dots_fade_left.png" className="h-[220px]" />
      </div>
      <SectionStarter title="პროექტები" />

      <div className="mt-10 flex flex-wrap justify-center gap-12">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="mt-12">
        <SectionSeeMore title="მეტის ნახვა" link="/" />
      </div>
    </div>
  );
}
