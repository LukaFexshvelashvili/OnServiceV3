import {
  LineStartDecoration,
  LineStartRightDecoration,
  StarterDecoration,
} from "../../../../assets/decorations/OS_decorations";
import BarInfo from "./BarInfo";

export default function Starter() {
  return (
    <section className=" relative overflow-hidden flex items-center">
      <div className="absolute z-0 top-20 left-15  flex justify-between no-select">
        <img src="images/dots/dots_fade_bottom.png" className="h-[220px]" />
      </div>
      <div className="os_container  flex items-center flex-col justify-center h-[calc(100vh-var(--nav-height))] max-h-[900px] relative">
        <div className="absolute z-0 top-0 left-0 translate-x-30 flex justify-between no-select">
          <LineStartDecoration />
        </div>
        <div className="absolute z-0 -translate-y-2/4 translate-x-full right-0  flex justify-between no-select">
          <LineStartRightDecoration />
        </div>
        <div className="flex items-center w-full relative ">
          <div className="flex flex-col gap-2 tracking-wider flex-1">
            <h1 className="text-main text-[36px] font-mainBold">ონ სერვისი</h1>
            <h2 className="text-desc text-[20px] leading-9 max-w-[630px] font-mainMedium">
              ჩვენ გთავაზობთ თანამედროვე ციფრული სერვისების მომსახურებას,
              ხელმისაწვდომად და სწრაფად
            </h2>
            <div className="flex items-center gap-2 mt-5">
              <button className="os_b w-[160px]">შეკვეთა</button>
              <button className="os_sb os_line_hover w-[160px]">
                პროექტები
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <StarterDecoration />
          </div>
        </div>
        <div className="w-full rounded-lg bg-gradient-to-r from-main to-purple p-5 h-[160px] mt-20 flex items-center justify-center gap-20 relative overflow-hidden">
          <div className="absolute h-full w-full top-0 left-0  flex justify-between px-3 no-select">
            <img
              src="images/dots/wide-left-fade.png"
              className="h-full w-auto py-4 object-cover"
            />
            <img
              src="images/dots/center-fade.png"
              className="h-full w-auto py-4 object-cover"
            />
            <img
              src="images/dots/wide-right-fade.png"
              className="h-full w-auto py-4 object-cover"
            />
          </div>
          <div className="relative flex items-center z-[2]">
            <BarInfo title="პარტნიორები" data="12" />
            <BarInfo title="დასრულებული პროექტი" data="50+" />
            <BarInfo title="პერსონალური მომსახურება" data="120+" />
          </div>
        </div>
      </div>
    </section>
  );
}
