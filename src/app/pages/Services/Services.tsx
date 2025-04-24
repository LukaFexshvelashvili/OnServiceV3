import {
  LineChartDecoration,
  LineDecorationConsultation,
  LineDecorationPanel,
} from "../../../assets/decorations/OS_decorations";
import SeviceBlock from "./components/SeviceBlock";

export default function Services() {
  return (
    <main className="py-10 flex flex-col   relative overflow-hidden">
      <div className="absolute z-0 top-5 left-5  flex justify-between no-select">
        <img src="images/dots/dots_fade_bottom.png" className="h-[200px]" />
      </div>
      <div className="flex flex-col gap-10 max-1200:gap-5 divide-y divide-lineColor">
        <SeviceBlock
          title={
            <>
              <span className="text-main">ვებგვერდის</span> დამზადება
            </>
          }
          previewImage={
            <img
              src="images/projects/MoviesGo.png"
              className="max-h-[300px]"
              alt="ვებგვერდის დამზადება"
            />
          }
          subtitle="ჩვენ დაგიმზადებთ ვებგვერდს თანამედროვე ტექნოლოგიებით რომლებიც უზრუნველყოფს ვებგვერდის ხელმისაწვდომობას სისწრაფეს და ოპტიმიზაციას"
          link="/website_development"
        />
        <SeviceBlock
          title={
            <>
              <span className="text-main">ციფრული</span> რეკლამირება
            </>
          }
          previewImage={
            <LineChartDecoration className="max-h-[350px] h-auto w-full  mask_horizontal_fade" />
          }
          subtitle="ჩვენ დაგეხმარებით განათავსოთ რეკლამები თანამედროვე ციფრულ პლატფორმებზე, რათა მაქსიმალურად შევძლოთ თქვენი ბიზნესის განვითარება"
          link="/digital_advertising"
          right
        />
        <SeviceBlock
          outsideDesign={
            <LineDecorationConsultation className="absolute left-0 z-0" />
          }
          insideDesign={
            <img
              src="images/dots/dots_fade_left.png"
              className="absolute right-0 z-0 h-full max-h-[340px]  max-1200:opacity-30"
            />
          }
          title={
            <>
              <span className="text-main">პერსონალური</span> მომსახურება
            </>
          }
          previewImage={
            <img
              src="images/services/consultation.png"
              className="max-h-[340px] "
              alt="კონსულტაცია"
            />
          }
          subtitle="ჩვენ ვეცდებით დაგეხმაროთ ციფრულ პროფბლემებთან დაკავშირებულს საკითხებზე მარტივი კონსულტაციით"
          link="/consultation"
        />
        <SeviceBlock
          title={
            <>
              <span className="text-main">დიზაინის</span> დამზადება
            </>
          }
          previewImage={
            <img
              src="images/services/design_making.png"
              className="max-h-[300px] shadow-xl "
              alt="დიზაინის დამზადება"
            />
          }
          outsideDesign={
            <img
              src="images/dots/dots.png"
              className="absolute right-0 z-0 h-[250px] opacity-50 left-2/4 bottom-0 translate-x-[-20%] translate-y-[50%] max-1200:opacity-20"
            />
          }
          subtitle="ჩვენ შეგვიძლია დაგიმზადოთ დიზაინი თქვენი მოთხოვნების შესაბამისად თანამედროვე პროგრამის Figma-ს გამოყენებით"
          link="/design_making"
          right
        />
        <SeviceBlock
          title={
            <>
              <span className="text-main">ვიდეო</span> ფლეიერი
            </>
          }
          previewImage={
            <img
              src="images/services/video_player.png"
              className="max-h-[350px]"
              alt="ვიდეო ფლეიერი"
            />
          }
          subtitle="მაყურებლის კომფორტზე მორგებული ვიდეო ფლეიერი თანამედროვე და საჭირო ფუნქციებით როგორებიცაა:"
          list={[
            "დროის დამახსოვრება",
            "სეზონის/სერიის დამახსოვრება",
            "HLS SUPPORT",
            "Preroll რეკლამები",
          ]}
          link="/video_player"
        />
        <SeviceBlock
          title={
            <>
              <span className="text-main">რეკლამის</span> დაბეჭდვა / გაკვრა
            </>
          }
          insideDesign={
            <img
              src="images/dots/dots_center_faded.png"
              className="absolute right-0 z-0 h-[350px] opacity-50 left-2/4 translate-x-[-50%] max-1200:opacity-40"
            />
          }
          previewImage={
            <img
              src="images/services/ad_printing.png"
              className="max-h-[400px]"
              alt="რეკლამის დაბეჭდვა / გაკვრა"
            />
          }
          subtitle="ჩვენ დაგეხმარებით დაბეჭდოთ: ბანერები, წარწერები, სავიზიტო ბარათები, პოსტერები და სხვა. ასევე გთავაზობთ მათი დაყენების დაკვრის სერვისს"
          link="/ad_printing"
          right
        />
        <SeviceBlock
          title={
            <>
              <span className="text-main">ONSERVICE</span> კონტროლ პანელი
            </>
          }
          outsideDesign={
            <LineDecorationPanel className="absolute left-0 z-0" />
          }
          previewImage={
            <img
              src="images/services/control_panel.png"
              className="max-h-[350px]"
              alt="ონსერვის კონტროლ პანელი"
            />
          }
          subtitle="გთავაზობთ ჩვენს მიერ დამზადებულ ვებგვერდის სამართავ პანელს"
          link="/control_panel"
        />
      </div>
    </main>
  );
}
