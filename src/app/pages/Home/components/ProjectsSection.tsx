import ProjectCard from "../../../../components/Cards/ProjectCard";
import SectionStarter from "../../../../components/SectionStarter";

export default function ProjectsSection() {
  return (
    <div className="os_container my-10">
      <SectionStarter title="პროექტები" />
      <div className="mt-10 flex flex-wrap justify-center gap-12">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
