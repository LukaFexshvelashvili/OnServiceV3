import { Link } from "react-router";
import { DoubleArrowIcon } from "../../assets/icons/OS_icons";
import { TprojectItem } from "../../api/projects";

export default function ProjectCard({ project }: { project: TprojectItem }) {
  const get_type = (type: number) => {
    switch (type) {
      case 0:
        return "ვებგვერდი";
        break;
      case 1:
        return "დიზაინი";
        break;
      case 2:
        return "რეკლამა";
        break;
      default:
        return "პროექტი";
        break;
    }
  };

  return (
    <div
      style={{ "--project-color": project.color } as React.CSSProperties}
      className="relative w-[400px] max-992:h-auto max-600:outline-0 h-[400px] bg-bodyBg rounded-md outline-2 outline-lineColor p-5 max-600:px-2 flex flex-col gap-3 pt-9 max-600:gap-1 items-center overflow-hidden"
    >
      <div className="absolute bg-[var(--project-color)] top-0 left-0 max-600:h-[30px] max-600:w-[120px] max-600:text-xs h-[32px] w-[140px] z-10 case_up font-mainMedium flex justify-center items-center text-[14px] text-white">
        {get_type(project.type[0])}
      </div>
      <div className="h-[200px] max-600:h-[150px] w-full  flex justify-center items-center overflow-hidden rounded-md">
        <img
          src={project.images[0]}
          className="h-full object-cover"
          alt={"OnService Project - " + project.name}
        />
      </div>
      <h3 className="font-mainBold text-[22px] max-600:text-[20px] uppercase text-headDark90 text-center tracking-wider w-full mt-2">
        {project.slice_last >= 0 ? (
          <>
            {project.name.slice(0, project.slice_last + 1)}
            <span className="text-[var(--project-color)]">
              {project.name.slice(project.slice_last + 1, project.name.length)}
            </span>
          </>
        ) : (
          <>
            <span className="text-[var(--project-color)]">
              {project.name.slice(0, Math.abs(project.slice_last))}
            </span>
            {project.name.slice(
              Math.abs(project.slice_last),
              project.name.length
            )}
          </>
        )}
      </h3>
      <p className="text-desc font-mainSemiBold text-[16px] max-600:font-mainMedium max-600:text-[15px] text-center tracking-wider leading-6 px-2">
        {project.description}
      </p>
      <Link
        className="max-600:text-[15px] case_up font-mainSemiBold text-[16px] text-[var(--project-color)] inline-flex gap-2 items-center mt-auto ml-auto"
        to={"/projects/" + project.id}
      >
        ნახვა
        <DoubleArrowIcon className="[&>path]:stroke-[var(--project-color)]" />
      </Link>
    </div>
  );
}

// export default function ProjectCard() {
//   return (
//     <div className="relative w-[400px] max-992:h-auto max-600:outline-0 h-[400px] bg-bodyBg rounded-md outline-2 outline-lineColor p-5 max-600:px-2 flex flex-col gap-3 pt-8 max-600:gap-1 items-center overflow-hidden">
//       <div className="absolute top-0 left-0 bg-rose-600 max-600:h-[30px] max-600:w-[120px] max-600:text-xs h-[32px] w-[140px] z-10 case_up font-mainMedium flex justify-center items-center text-[14px] text-white">
//         ვებგვერდი
//       </div>
//       <div className="h-[200px] max-600:h-[150px] w-full  flex justify-center items-center overflow-hidden rounded-md">
//         <img
//           src="images/projects/MoviesGo.png"
//           className="h-full object-cover"
//           alt="OnService Project - MoviesGo"
//         />
//       </div>
//       <h3 className="font-mainBold text-[22px] max-600:text-[20px] uppercase text-headDark90 text-center tracking-wider w-full mt-3">
//         Movies<span className="text-rose-600">Go</span>
//       </h3>
//       <p className="text-desc font-mainSemiBold text-[16px] max-600:font-mainMedium max-600:text-[15px] text-center tracking-wider leading-6 px-2">
//         ფილმების სერიალების ანიმაციების და ანიმეების პლატფორმა
//       </p>
//       <Link
//         className="text-rose-600 max-600:text-[15px] case_up font-mainSemiBold text-[16px] inline-flex gap-2 items-center mt-auto ml-auto"
//         to={"/"}
//       >
//         ნახვა
//         <DoubleArrowIcon className="[&>path]:stroke-rose-600" />
//       </Link>
//     </div>
//   );
// }
