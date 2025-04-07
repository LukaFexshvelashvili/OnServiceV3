import { DoubleArrowIcon } from "../../../../assets/icons/OS_icons";

type TServiceBlock = {
  title: React.ReactNode;
  subtitle: string;
  link: string;
  list?: string[];
  previewImage: React.ReactNode;
  right?: boolean;
};
export default function SeviceBlock({
  title,
  subtitle,
  link,
  list,
  previewImage,
  right,
}: TServiceBlock) {
  return (
    <section className="py-8">
      <div
        className={`os_container flex justify-between items-center ${
          right && "flex-row-reverse"
        } `}
      >
        <div
          className={`flex-1 flex flex-col gap-3  ${
            right ? "flex-end text-end items-end" : "items-start"
          } `}
        >
          <h2 className=" caseUp text-headDark text-[24px] font-mainSemiBold tracking-wider">
            {title}
          </h2>
          <p className="text-descDark text-[16px] font-mainMedium leading-7">
            {subtitle}
          </p>
          {list && (
            <div className="flex flex-col gap-2 mt-3">
              {list?.map((item: string, index: number) => (
                <div
                  key={index}
                  className="flex gap-2 items-center text-headDark80"
                >
                  <div className="h-2 aspect-square rounded-[10px] bg-main"></div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}

          <a
            href={link}
            className={`inline-flex items-center gap-2 caseUp text-main mt-4  ${
              right && "flex-row-reverse"
            }`}
          >
            მეტის ნახვა{" "}
            <DoubleArrowIcon className={`${right && "rotate-180"}`} />
          </a>
        </div>
        <div
          className={`flex-1 flex ${right ? "justify-start" : "justify-end"} `}
        >
          {previewImage}
        </div>
      </div>
    </section>
  );
}
