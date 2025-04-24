import { DoubleArrowIcon } from "../../../../assets/icons/OS_icons";

type TServiceBlock = {
  title: React.ReactNode;
  subtitle: string;
  link: string;
  list?: string[];
  previewImage: React.ReactNode;
  right?: boolean;
  outsideDesign?: React.ReactNode;
  insideDesign?: React.ReactNode;
};
export default function SeviceBlock({
  title,
  subtitle,
  link,
  list,
  previewImage,
  right,
  outsideDesign,
  insideDesign,
}: TServiceBlock) {
  return (
    <section className="py-8 relative">
      {outsideDesign}
      <div
        className={`os_container flex justify-between  max-1200:flex-col-reverse max-1200:gap-10 relative items-center ${
          right && "flex-row-reverse"
        } `}
      >
        {insideDesign}

        <div
          className={`flex-1 flex flex-col gap-3 max-600:gap-2 relative ${
            right ? " text-end items-end" : "items-start"
          }  max-1200:items-center max-1200:text-center `}
        >
          <h2 className=" case_up text-headDark text-[24px] font-mainSemiBold tracking-wider  max-600:text-[20px] max-992:text-[22px]">
            {title}
          </h2>
          <p className="text-descDark text-[16px] font-mainMedium leading-7  max-600:text-[15px] max-600:leading-6.5">
            {subtitle}
          </p>
          {list && (
            <div className="flex flex-col gap-2 mt-3 max-1200:w-full">
              {list?.map((item: string, index: number) => (
                <div
                  key={index}
                  className="flex gap-2 items-center text-headDark80"
                >
                  <div className="h-2 aspect-square rounded-[10px]  bg-main"></div>
                  <p className="max-600:text-[15px]"> {item}</p>
                </div>
              ))}
            </div>
          )}

          <a
            href={link}
            className={`inline-flex items-center gap-2 case_up text-main mt-4 max-600:text-[15px] ${
              right && "flex-row-reverse"
            }`}
          >
            მეტის ნახვა{" "}
            <DoubleArrowIcon className={`${right && "rotate-180"}`} />
          </a>
        </div>
        <div
          className={`flex-1 relative flex ${
            right ? "justify-start" : "justify-end"
          } `}
        >
          {previewImage}
        </div>
      </div>
    </section>
  );
}
