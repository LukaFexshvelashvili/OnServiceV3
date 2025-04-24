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
        <div className="os_container flex items-center py-20 max-992:gap-10 max-992:flex-col-reverse max-992:py-3 max-992:pb-10">
          <div className="flex-1 flex flex-col gap-8 max-992:gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-mainBold tracking-wider text-headDark80 max-992:text-center max-992:text-[24px] max-600:text-[22px]">
                MOVIES<span className="text-rose-700">GO</span>
              </h2>
              <p className="text-descDark max-w-[450px] max-992:text-center text-lg tracking-wider max-600:text-[16px]">
                ფილმების სერიალების ანიმაციების და ანიმეების პლატფორმა
              </p>
            </div>
            <div className="flex gap-3 max-992:justify-center">
              <ProjectAddon title="ვებგვერდი" />
              <ProjectAddon title="დიზაინი" />
            </div>
          </div>
          <div className="flex-1 shrink-0 w-full max-992:w-full">
            <OS_Slider />
          </div>
        </div>
        <PageLine />
        <section className="relative overflow-hidden">
          <div className="absolute z-0 top-10 right-5  flex justify-between no-select">
            <img src="images/dots/dots_fade_left.png" className="h-[220px]" />
          </div>
          <div className="os_container py-8  ">
            <h3 className="flex flex-col font-mainSemiBold text-head text-[22px] max-992:text-[20px] max-600:text-[18px] case_up">
              <span className="text-rose-700">სხვა</span>
              პროექტები
            </h3>

            <div className="flex gap-15 justify-center py-12 flex-wrap ">
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
    <div className="h-[36px] rounded-sm outline outline-lineColor px-6 max-992:px-5 text-sm flex items-center gap-3 font-mainSemiBold case_up text-rose-700 cursor-pointer hover:bg-rose-50  hover:outline-2 hover:outline-rose-700  transition-colors">
      <div className="flex items-center gap-1.5  max-600:text-[14px]">
        {props.title}
      </div>
    </div>
  );
}
