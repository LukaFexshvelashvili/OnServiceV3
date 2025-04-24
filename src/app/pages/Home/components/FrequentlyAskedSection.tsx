import { useState } from "react";
import { DownArrowIcon } from "../../../../assets/icons/OS_icons";
import { Link } from "react-router";

export default function FrequentlyAskedSection() {
  return (
    <section className="relative overflow-hidden">
      {" "}
      <div className="my-10 flex flex-col items-center text-center gap-4">
        <h2
          className={`text-head text-center text-[26px] font-mainBold tracking-wide max-992:text-[24px] max-600:text-[22px] max-600:px-2`}
        >
          ხშირად დასმული <span className="text-main">კითხვები</span>
        </h2>
      </div>
      <div className="os_container pb-14 relative z-10">
        <div className="flex flex-col gap-6">
          <Question
            title="რამდენ ხანში ხდება პროდუქტის ჩაბარება?"
            answer={
              <p>
                პროდუქტის ჩაბარების თარიღი დამოკიდებულია მის მოთხოვნებზე და
                გრაფიკზე, მომსახურების გასაუმჯობესებლად სავარაუდო თარიღს
                შეკვეთის მიღებისას გაცნობებთ და ამ ვადის ფარგლებში იქნება
                პროდუქტი ჩაბარებული წინააღმდეგ შემთხვევაში, ისარგებლებთ ჩვენი
                შეღავათებით მეტი ინფორმაციისთვის გადახედეთ{" "}
                <Link className="text-main underline" to={""}>
                  პროდუქტის ჩაბარების პოლიტიკას.
                </Link>
              </p>
            }
          />
          <Question
            title="რა ფასის შუალედით განისაზღვრება სერვისი?"
            answer={
              <p>
                სერვისის ფასი დამოკიდებულია მის ზომაზე, შეკვეთამდე გაგაცნობთ
                მოცემული სერვისის ფასს სადაც ყველაფერი იქნება გათვალისწინებული,
                ჩვენ მაქსიმალურად ვიზრუნებთ რომ, რაც შეიძლება დიდი შეღავათი
                მოვახდინოთ სერვისის ღირებულებაზე და შემოგთავაზოთ ის მისაღებ
                ფასში. დამატებითი ინფორმაციისთვის ეწვიეთ კონკრეტული სერვისის
                გვერდს ან მიმართეთ საფორთს.
              </p>
            }
          />
          <Question
            title="პროდუქტის ჩაბარების შემდეგ მაქვს თუარა დახმარების სერვისი?"
            answer={
              <p>
                ჩვენ გთავაზობთ ჩვენი პროდუქციის ჩაბარების შემდეგ, დახმარების
                სერვისს რომელიც იქნება ულიმიტო თუ ის იქნება დაკავშირებული ჩვენს
                მიერ დამზადებულ პროდუქტთან.
              </p>
            }
          />
          <Question
            title="შემიწყდება თუ არა სერვისის განახლებები პროდუქტის ჩაბარების შემდეგ?"
            answer={
              <p>
                სერვისის განახლებებზე წვდომა უშუალოდ ყველა ჩვენს მომხმარებელზე
                ვრცელდება და იქნება ხელმისაწვდომი თუ მას თქვენ მიერ შეკვეთილი
                პაკეტი ითვალისწინებს.
              </p>
            }
          />
        </div>
      </div>
      <div className="absolute bottom-10 right-10 z-0 flex justify-between no-select">
        <img src="images/dots/dots.png" className="h-[220px]" />
      </div>
    </section>
  );
}

function Question(props: { title: string; answer: React.ReactNode }) {
  const [show, setshow] = useState(false);
  return (
    <div
      className={`flex flex-col max-h-max bg-bodyBg ${
        show
          ? "h-[200px] max-992:h-[300px] max-600:h-[400px]"
          : "h-[60px] max-992:h-[65px]"
      } w-full rounded-lg outline-2 outline-lineColor transition-[height] duration-300 text-[17px] max-992:text-[15px] max-600:text-[14px]  cursor-pointer overflow-hidden select-none`}
      onClick={() => setshow((state) => !state)}
    >
      <div
        className={`h-[60px] max-992:h-[65px] max-600:h-[70px] shrink-0 px-5 max-600:px-3.5 flex items-center ${
          show ? "text-main" : "text-desc"
        } text-desc font-mainSemiBold  transition-colors tracking-wider justify-between `}
      >
        {" "}
        <p className="line-clamp-2 text-ellipsis overflow-hidden">
          {props.title}
        </p>
        <DownArrowIcon
          height={10}
          className={`${
            show ? "rotate-180" : "rotate-0"
          } transition-transform max-600:h-3 aspect-square shrink-0`}
        />
      </div>
      <div className="h-[2px] w-full bg-lineColor shrink-0"></div>
      <div className="text-descDark leading-8 font-mainSemiBold max-992:text-[15px] max-992:leading-7 tracking-wider py-3 px-5">
        {props.answer}
      </div>
    </div>
  );
}
