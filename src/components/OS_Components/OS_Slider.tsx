import { useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../assets/icons/OS_icons";

type Titem = {
  alt: string;
  image: string;
};

export default function OS_Slider(props: { list: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const items: string[] = props.list;
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
    <div className="relative w-full  h-[450px] max-1200:h-[350px] max-600:h-[280px] flex items-center justify-center">
      <div className="relative w-[90%] h-[90%] max-992:w-[calc(100%-40px)] flex justify-start overflow-hidden">
        {items.map((_, i) => (
          <div
            className={`w-full overflow-hidden min-w-full absolute h-full flex justify-center items-center transition-[opacity,visibility] ${
              activeIndex == i ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <img
              className={
                "max-w-full max-h-full w-full h-auto object-contain max-992:h-full max-992:w-full"
              }
              src={items[i]}
              loading={activeIndex == i ? "eager" : "lazy"}
              // alt={items[i].alt}
            />
          </div>
        ))}
      </div>
      <button
        onClick={sliderLeft}
        className={`h-[46px] max-1200:h-[42px] max-1200:p-3 shadow-lg shadow-mainClear aspect-square rounded-[25px] absolute left-0 p-3.5 flex justify-center items-center cursor-pointer ${
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
        className={`h-[46px] max-1200:h-[42px] max-1200:p-3 shadow-lg shadow-mainClear aspect-square rounded-[25px] absolute right-0 p-3.5 flex justify-center items-center cursor-pointer ${
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
