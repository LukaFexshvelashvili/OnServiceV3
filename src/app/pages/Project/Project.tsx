import { useNavigate, useParams } from "react-router";
import OS_Slider from "../../../components/OS_Components/OS_Slider";
import PageLine from "../../../components/PageLine";
import { projectsList, TprojectItem, typesList } from "../../../api/projects";

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project_data: TprojectItem | null = id
    ? projectsList.filter((project) => project.id == parseInt(id))[0]
    : null;

  if (project_data === null) {
    navigate("/");
    return null;
  }

  return (
    <section
      className=" relative overflow-hidden "
      style={{ "--project-color": project_data.color } as React.CSSProperties}
    >
      <div className="absolute z-0 top-10 left-5  flex justify-between no-select">
        <img src="/images/dots/dots_fade_right.png" className="h-[220px]" />
      </div>
      <title>{project_data?.name} - OnService პროექტი</title>
      <main>
        <div className="os_container flex items-center py-20 max-992:gap-10 max-992:flex-col-reverse max-992:py-3 max-992:pb-10">
          <div className="flex-1 flex flex-col gap-8 max-992:gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-mainBold tracking-wider text-headDark80 max-992:text-center max-992:text-[24px] max-600:text-[22px]">
                {project_data.slice_last >= 0 ? (
                  <>
                    {project_data.name.slice(0, project_data.slice_last + 1)}
                    <span className="text-[var(--project-color)]">
                      {project_data.name.slice(
                        project_data.slice_last + 1,
                        project_data.name.length
                      )}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[var(--project-color)]">
                      {project_data.name.slice(
                        0,
                        Math.abs(project_data.slice_last)
                      )}
                    </span>
                    {project_data.name.slice(
                      Math.abs(project_data.slice_last),
                      project_data.name.length
                    )}
                  </>
                )}
              </h2>
              <p className="text-descDark max-w-[450px] max-992:text-center text-lg tracking-wider max-600:text-[16px]">
                {project_data.description}
              </p>
            </div>
            <div className="flex gap-3 max-992:justify-center">
              {project_data.type.map((type) => (
                <ProjectAddon title={typesList[type]} />
              ))}
            </div>
          </div>
          <div className="flex-1 shrink-0 w-full max-992:w-full">
            <OS_Slider list={project_data.images} />
          </div>
        </div>
        <PageLine />
        <section className="relative overflow-hidden">
          <div className="absolute z-0 top-10 right-5  flex justify-between no-select">
            <img src="/images/dots/dots_fade_left.png" className="h-[220px]" />
          </div>
          <div className="os_container py-8  ">
            <h3 className="flex flex-col font-mainSemiBold text-head text-[22px] max-992:text-[20px] max-600:text-[18px] case_up">
              <span className="text-[var(--project-color)]">სხვა</span>
              პროექტები
            </h3>

            <div className="flex gap-15 justify-center py-12 flex-wrap ">
              {/* <ProjectCard />
              <ProjectCard />
              <ProjectCard /> */}
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export function ProjectAddon(props: { title: string }) {
  return (
    <div className="h-[36px] rounded-sm outline outline-lineColor px-6 max-992:px-5 text-sm flex items-center gap-3 font-mainSemiBold case_up text-[var(--project-color)] cursor-pointer hover:bg-[var(--project-color)]/5  hover:outline-2 hover:outline-[var(--project-color)]  transition-colors">
      <div className="flex items-center gap-1.5  max-600:text-[14px]">
        {props.title}
      </div>
    </div>
  );
}
