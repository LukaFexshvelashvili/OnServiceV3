import ProjectCard from "../../../components/Cards/ProjectCard";
import OS_Slider from "../../../components/OS_Components/OS_Slider";
import PageLine from "../../../components/PageLine";

export default function Project() {
  return (
    <section className=" relative overflow-hidden ">
      <div className="absolute z-0 top-10 left-5  flex justify-between no-select">
        <img src="images/dots/dots_fade_right.png" className="h-[220px]" />
      </div>
      <title>[PROJECT_TITLE] - OnService პროექტი</title>
      <main>
        <div className="os_container flex items-center py-20">
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
        <section className="relative overflow-hidden">
          <div className="absolute z-0 top-10 right-5  flex justify-between no-select">
            <img src="images/dots/dots_fade_left.png" className="h-[220px]" />
          </div>
          <div className="os_container py-8  ">
            <h3 className="flex flex-col font-mainSemiBold text-head text-[22px] case_up">
              <span className="text-rose-700">სხვა</span>
              პროექტები
            </h3>

            <div className="flex gap-15 justify-center py-12 ">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export function ProjectAddon(props: { title: string }) {
  return (
    <div className="h-[36px] rounded-sm outline outline-lineColor px-6 text-sm flex items-center gap-3 font-mainSemiBold case_up text-rose-700 cursor-pointer hover:bg-rose-50  hover:outline-2 hover:outline-rose-700  transition-colors">
      <div className="flex items-center gap-1.5">{props.title}</div>
    </div>
  );
}
