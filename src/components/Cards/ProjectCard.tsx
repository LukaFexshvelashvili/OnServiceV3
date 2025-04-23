import { Link } from "react-router";
import { DoubleArrowIcon } from "../../assets/icons/OS_icons";

export default function ProjectCard() {
  return (
    <div className="relative w-[400px] h-[400px] rounded-md outline-2 outline-lineColor p-5 flex flex-col gap-3 pt-8 items-center overflow-hidden">
      <div className="absolute top-0 left-0 bg-rose-600 h-[32px] w-[140px] z-10 case_up font-mainMedium flex justify-center items-center text-[14px] text-white">
        ვებგვერდი
      </div>
      <div className="h-[200px]">
        <img
          src="images/projects/MoviesGo.png"
          className="h-full object-cover"
          alt="OnService Project - MoviesGo"
        />
      </div>
      <h3 className="font-mainBold text-[22px] uppercase text-headDark90 text-center tracking-wider w-full mt-3">
        Movies<span className="text-rose-600">Go</span>
      </h3>
      <p className="text-desc font-mainSemiBold text-[16px] text-center tracking-wider leading-6 px-2">
        ფილმების სერიალების ანიმაციების და ანიმეების პლატფორმა
      </p>
      <Link
        className="text-rose-600 case_up font-mainSemiBold text-[16px] inline-flex gap-2 items-center mt-auto ml-auto"
        to={"/"}
      >
        ნახვა
        <DoubleArrowIcon className="[&>path]:stroke-rose-600" />
      </Link>
    </div>
  );
}
