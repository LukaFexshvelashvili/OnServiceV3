import { useLayoutEffect } from "react";
import {
  AbraIcon,
  BannerIcon,
  BusinessCardIcon,
  PosterIcon,
  TitleIcon,
  TruckIcon,
} from "../../../assets/icons/OS_icons";
import PageLine from "../../../components/PageLine";
import SectionStarter from "../../../components/SectionStarter";
import OS_ServicePrintBlock from "../../../components/OS_Components/OS_ServicePrintBlock";

export default function AdPrinting() {
  useLayoutEffect(() => {
    document.documentElement.style.setProperty("--color-main", "#F69000");
    document.documentElement.style.setProperty("--color-mainHover", "#e68600");
    document.documentElement.style.setProperty("--color-purple", "#f0a400");
    return () => {
      document.documentElement.style.removeProperty("--color-main");
      document.documentElement.style.removeProperty("--color-mainHover");
      document.documentElement.style.removeProperty("--color-purple");
    };
  }, []);
  return (
    <main className=" relative overflow-hidden ">
      <div className="absolute z-0 top-5 left-5  flex justify-between no-select">
        <img src="images/dots/dots_fade_bottom.png" className="h-[200px]" />
      </div>
      <div className="os_container ">
        <div className="w-full flex justify-between py-16 pt-8 items-center">
          <div className="w-[330px]">
            <img
              src="images/projects/Citroen.png"
              alt="Advertisement Printing / Setup - OnService"
            />
          </div>
          <div className="flex items-center flex-col gap-4 text-center">
            <div className="flex items-center gap-8 mb-2">
              <img
                src="images/logos/onservice.png"
                alt="OnService - ციფრული სერვისები"
                className="h-[22px]"
              />
              <div className="h-6 w-[3px] rounded-md bg-lineColor"></div>
              <img
                src="images/logos/new_ad.png"
                alt="New Ad - რეკლამის ბანერის დამზადება / დაბეჭდვა / გაკვრა"
                className="h-[32px]"
              />
            </div>
            <h1 className="font-mainSemiBold text-2xl tracking-wider text-head">
              <span className="text-main">რეკლამის</span> დამზადება / დაბეჭვა
            </h1>
            <h3 className="text-desc max-w-[550px] leading-7">
              ჩვენ დაგეხმარებით თქვენთვის სასურველი რეკლამის, ბანერის, პოსტერის,
              სავიზიტო ბარათის, აბრის დამზადებაში და მის დაყენებაში
            </h3>
            <div className="flex gap-2 mt-3 case_up text-md text-sm">
              <button className="os_b font-mainMedium">შეუკვეთე ახლავე</button>
              <button className="os_sb min-w-[190px]">გაიგე მეტი</button>
            </div>
          </div>
          <div className="w-[330px]">
            <img
              src="images/projects/Cafe.png"
              alt="რეკლამის დამზადება გაკვრა - ონსერვისი"
            />
          </div>
        </div>
      </div>
      <PageLine />

      <section className="py-5 relative overflow-hidden">
        <div className="absolute z-0 bottom-10 left-5  flex justify-between no-select">
          <img src="images/dots/dots_fade_right.png" className="h-[220px]" />
        </div>
        <div className="absolute z-0 top-10 right-5  flex justify-between no-select">
          <img src="images/dots/dots_fade_left.png" className="h-[220px]" />
        </div>
        <div className="os_container">
          <SectionStarter title="სერვისები" line />
          <div className="flex justify-between py-17">
            <OS_ServicePrintBlock icon={BannerIcon} title="ბანერი" link="" />
            <OS_ServicePrintBlock icon={PosterIcon} title="პოსტერი" link="" />
            <OS_ServicePrintBlock icon={AbraIcon} title="აბრა" link="" />
            <OS_ServicePrintBlock icon={TitleIcon} title="წარწერა" link="" />
            <OS_ServicePrintBlock
              icon={BusinessCardIcon}
              title="სავიზიტო ბარათი"
              link=""
            />
            <OS_ServicePrintBlock
              icon={TruckIcon}
              title="რეკლამის გაკვრა"
              link=""
            />
          </div>
        </div>
      </section>
      <PageLine />

      <section className="py-5 relative">
        <div className="absolute z-0 top-2/4 right-5  flex justify-between no-select">
          <img src="images/dots/dots_fade_left.png" className="h-[220px]" />
        </div>
        <div className="os_container">
          <SectionStarter
            coloredTitle="ყველაფერი "
            title=" რაც უნდა იცოდე"
            line
          />

          <div className="py-10 flex flex-col [&>h2]:text-headDark60 [&>h2]:tracking-wider [&>h2]:font-mainSemiBold [&>h2]:text-lg [&>h2]:mb-4 [&>h2]:mt-6  [&>p]:text-desc [&>p]:tracking-wider [&>p]:font-mainSemiBold [&>p]:text-md [&>p]:mb-4 [&>p]:max-w-[900px]">
            <h2 className="case_up">როგორ ვქმნით ვებგვერდებს</h2>
            <p className="text-head mb-3 ">
              ვებგვერდისთვის ხდება უნიკალური დიზაინის აწყობა (დამოკიდებულია
              მომხარებლის მოთხოვნაზე)
            </p>
            <p className="text-head mb-3 ">
              ჩვენი ვებგვერდები იწერება თანამედროვე პროგრამული ენების დახმარებით{" "}
            </p>
            <p className="text-head mb-3 ">
              ვებგვერდში ხდება ჩვენი სისტემების ინტეგრაცია რომლებიცაა:{" "}
              <span className="text-main">ფოტოების ოპტიმიზაცია</span>,{" "}
              <span className="text-main">სისწრაფის ოპტიმიზაცია</span>,{" "}
              <span className="text-main">დაცვის სისტემა</span>,{" "}
              <span className="text-main">SEO ოპტიმიზაცია</span>,{" "}
              <span className="text-main">საკონტროლო პანელი</span>
            </p>
            <p className="text-head mb-3 ">
              ინტეგრაციების და დასრულების შემდეგ იწყება ვებგვერდის ტესტირება და
              მისი წარმატებით დასრულების შემდეგ გადაეცემა მომხმარებელს ვიდეო
              რგოლით თუ როგორ მართოს ვებგვერდი{" "}
              <span className="text-main">საკონტროლო პანელიდან</span>
            </p>

            <h2 className="case_up">რა არის ვებგვერდის ფასი</h2>
            <p className="text-head mb-3 ">
              ვებგვერდის ფასი განისაზღვრება თქვენი მოთხოვნებით და საიტის
              ფუნქციების მიხედვით, მცირე პორტფოლიო ვებგვერდის ფასი იწყება 400
              ლარიდან, რომელიც შეადგენს მინიმუმს
            </p>

            <h2 className="case_up">რისთვის არის საჭირო SEO ოპტიმიზაცია?</h2>
            <p className="text-head mb-3 ">
              SEO ოპტიმიზაცია ეხმარება თქვენს ვებგვერდს მარტივად გამოჩნდეს
              საძიებო სისტემებში როგორიცაა Google. და მეტად ხელმისაწვდომი გახდეს
              მომხარებლისთვის
            </p>

            <h2 className="case_up">უსაფრთხოება</h2>
            <p className="text-head mb-3 ">
              ვებგვერდის უსაფრთხოება ხდება ჩვენი დაცვის სისტემის ჩაშენებით,
              რომელიც უზრუნველყოფს ინფორმაციის ენკოდირებას, მომხმარებლის დაცულ
              ვერიფიკაციას და სხვა ასპექტებს
            </p>

            <h2 className="case_up">
              რისთვის არის საჭირო ფოტოების ოპტიმიზაცია?
            </h2>
            <p className="text-head mb-3 ">
              ფოტოების ოპტიმიზაცია უზრუნველყოფს ვებგვერდის სისწრაფეს და
              ჩატვირთვას, ჩვენი სისტემით ხდება ფოტოების ავტომატური გადაყვანა
              თანამედროვე ფორმატში და ზომის შემცირება ხარისხის დაკარგვის გარეშე
            </p>

            <h2 className="case_up">რა შემეძლება საკონტროლო პანელში?</h2>
            <p className="text-head mb-3 ">
              საკონტროლო პანელიდან შეგიძლიათ მართოთ პროდუქტები, ანგარიშები,
              სლაიდერები, მარაგი, ბანერები, ვებგვერდის პარამეტრები და სხვა
            </p>

            <h2 className="case_up">ტექნიკური სერვისი</h2>
            <p className="text-head mb-3 ">
              ვებგვერდთან დაკავშირებულ შეკითხვებზე ჩვენ ამომწურავ პასუხს გაგცემთ
              და დაგეხმარებით მის საკითხებში
            </p>

            <h2 className="case_up">ვებგვერდის ოპტიმიზაცია</h2>
            <p className="text-head mb-3 ">
              ვებგვერდის ოპტიმიზაცია მიმდინარეობს სხვადასხვა ტექნოლოგიებით
              როგორებიცაა: ქეშირება, ფაილების ფორმატირება, მინიმალიზაცია და სხვა
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
