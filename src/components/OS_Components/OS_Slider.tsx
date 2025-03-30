import { useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../assets/icons/OS_icons";

type Titem = {
  alt: string;
  image: string;
};

export default function OS_Slider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const items: Titem[] = [
    {
      alt: "MoviesGo - OnService პროექტი",
      image: "images/projects/MoviesGo.png",
    },
    {
      alt: "MoviesGo - OnService პროექტი",
      image: "images/projects/MoviesGo1.png",
    },
    {
      alt: "MoviesGo - OnService პროექტი",
      image: "images/projects/MoviesGo.png",
    },
    {
      alt: "MoviesGo - OnService პროექტი",
      image: "images/projects/MoviesGo1.png",
    },
  ];
  const sliderLeft = () => {
    if (activeIndex == 0) {
      setActiveIndex(items.length - 1);
    } else {
      setActiveIndex((state: number) => state - 1);
    }
  };
  const sliderRight = () => {
    if (activeIndex == items.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((state: number) => state + 1);
    }
  };

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center">
      <div className="relative w-[90%] h-[90%] flex justify-start overflow-hidden">
        {items.map((_, i) => (
          <div
            className={`w-full min-w-full absolute h-full flex justify-center transition-[opacity,visibility] ${
              activeIndex == i ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <img
              className={"max-w-full max-h-full object-cover"}
              src={items[i].image}
              loading={activeIndex == i ? "eager" : "lazy"}
              alt={items[i].alt}
            />
          </div>
        ))}
      </div>
      <button
        onClick={sliderLeft}
        className={`h-[46px] aspect-square rounded-[25px] absolute left-0 p-3.5 flex justify-center items-center cursor-pointer ${
          activeIndex == 0
            ? "bg-mainClear hover:bg-mainClearHover"
            : "bg-main hover:bg-mainHover"
        } transition-colors`}
      >
        <LeftArrowIcon
          className={`h-full aspect-square -translate-x-0.5  ${
            activeIndex == 0 ? "[&>path]:fill-main" : "[&>path]:fill-white"
          } `}
        />
      </button>
      <button
        onClick={sliderRight}
        className={`h-[46px] aspect-square rounded-[25px] absolute right-0 p-3.5 flex justify-center items-center cursor-pointer ${
          activeIndex == items.length - 1
            ? "bg-mainClear hover:bg-mainClearHover"
            : "bg-main hover:bg-mainHover"
        } transition-colors`}
      >
        <RightArrowIcon
          className={`h-full aspect-square translate-x-0.5  ${
            activeIndex == items.length - 1
              ? "[&>path]:fill-main"
              : "[&>path]:fill-white"
          } `}
        />
      </button>
      <div className="absolute bottom-0 flex gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`cursor-pointer h-1 w-6 rounded-md  transition-colors ${
              activeIndex == i ? "bg-main" : "bg-lineColor"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
