import ProjectCard from "../../../components/Cards/ProjectCard";
import OS_Slider from "../../../components/OS_Components/OS_Slider";
import PageLine from "../../../components/PageLine";

export default function Project() {
  return (
    <>
      <title>- OnService პროექტი</title>
      <main>
        <div className="os_container flex  py-20">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-mainBold tracking-wider text-headDark80">
                MOVIES<span className="text-rose-700">GO</span>
              </h2>
              <p className="text-descDark max-w-[450px] text-lg tracking-wider">
                ფილმების სერიალების ანიმაციების და ანიმეების პლატფორმა
              </p>
            </div>
            <div className="flex gap-3">
              <ProjectAddon title="ვებგვერდი" />
              <ProjectAddon title="დიზაინი" />
            </div>
          </div>
          <div className="flex-1">
            <OS_Slider />
          </div>
        </div>
        <PageLine />
        <div className="os_container py-8">
          <h3 className="flex flex-col font-mainSemiBold text-head text-2xl caseUp">
            <span className="text-main">სხვა</span>
            პროექტები
          </h3>
          <div className="flex gap-15 justify-center py-12 ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </main>
    </>
  );
}

export function ProjectAddon(props: { title: string }) {
  return (
    <div className="h-[36px] rounded-sm outline outline-lineColor px-6 text-sm flex items-center gap-3 font-mainSemiBold caseUp text-rose-700 cursor-pointer hover:bg-rose-50  hover:outline-2 hover:outline-rose-700  transition-colors">
      <div className="flex items-center gap-1.5">{props.title}</div>
    </div>
  );
}
