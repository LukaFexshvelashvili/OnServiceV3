import { LineChartDecoration } from "../../../../assets/decorations/OS_decorations";

export default function DigitalAdsSection() {
  return (
    <div className="os_container flex items-center py-20 relative">
      <div className="flex-1">
        <div className="flex flex-col gap-5">
          <h2 className="text-headDark90 font-mainBold text-[26px] tracking-wide">
            <span className="text-main">ციფრული</span> რეკლამა
          </h2>
          <p className=" text-[18px] max-w-[600px] text-descDark leading-7 tracking-wide">
            ჩვენ დაგეხმარებით განათავსოთ რეკლამები თანამედროვე ციფრულ
            პლატფორმებზე, რათა მაქსიმალურად შევძლოთ თქვენი ბიზნესის განვითარება
          </p>
          <div className="mt-2 flex gap-5">
            <DigitalAdBlock
              image="images/digital/google_ads.png"
              title="Google"
              subtitle="Ads"
            />
            <DigitalAdBlock image="images/digital/meta.png" title="Meta" />{" "}
            <DigitalAdBlock
              image="images/digital/youtube.png"
              title="Youtube"
            />
          </div>
          <div className="mt-2 z-0 relative left-0flex justify-between no-select">
            <img
              src="images/dots/dots_fade_right_horizontal.png"
              className="w-[260px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <LineChartDecoration className="max-h-[350px] w-auto mask_horizontal_fade" />
      </div>
    </div>
  );
}

export function DigitalAdBlock(props: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <div className="h-[50px] rounded-sm outline outline-lineColor px-4 flex items-center gap-3 font-mainSemiBold text-headDark50 cursor-pointer hover:bg-mainClear hover:outline-2 hover:outline-main transition-colors">
      <img
        src={props.image}
        height={20}
        width={20}
        className="h-auto w-auto max-h-[24px] max-w-[24px]"
        alt={`${props.title} ${props.subtitle}`}
      />
      <div className="flex items-center gap-1.5">
        {props.title}{" "}
        {props.subtitle ? (
          <span className=" font-mainMedium">{props.subtitle}</span>
        ) : null}
      </div>
    </div>
  );
}
