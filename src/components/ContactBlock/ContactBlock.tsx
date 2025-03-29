import { EmailUsDecoration } from "../../assets/decorations/OS_decorations";
import {
  CallIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  ViberIcon,
  WhatsappIcon,
} from "../../assets/icons/OS_icons";

export default function ContactBlock() {
  return (
    <div className="relative w-full  py-15 ">
      <div className="w-full h-[200px] bg-gradient-to-r from-main to-mainLight absolute top-0 left-0 z-0 flex justify-center">
        <img
          src="images/dots/center-full-fade.png"
          className="h-full w-auto py-2.5 object-cover"
        />
      </div>
      <div className="os_container relative flex flex-col items-center">
        <ContactCard />
      </div>
    </div>
  );
}

export function ContactCard() {
  return (
    <div className="max-w-[1200px] w-full h-[450px] bg-white rounded-xl shadow-[0px_4px_30px_rgba(215,_215,_215,_0.25)] flex overflow-hidden">
      <div className=" p-4 px-6 w-2/4 flex flex-col justify-center">
        <h3 className="text-headDark60 font-mainBold text-[20px] tracking-wide">
          <span className="text-main">და</span>გვიკავშირდით
        </h3>
        <p className="text-desc font-mainMedium text-[18px] tracking-wide mt-2">
          ჩვენ დაგეხმარებით განავითაროთ თქვენი ბიზნესი
        </p>
        <form className="flex flex-col gap-4 mt-6">
          <ContactInput name="name" placeholder="სახელი" />
          <ContactInput name="email" placeholder="მეილი" />
          <ContactInput name="message" placeholder="შეტყობინება" long />
          <button className="w-full bg-gradient-to-r from-main to-purple h-[50px] tracking-wider rounded-lg text-white font-mainSemiBold cursor-pointer transition-opacity hover:opacity-90">
            გაგზავნა
          </button>
        </form>
      </div>
      <div className=" h-full w-2/4 bg-gradient-to-r from-main to-purple flex flex-col justify-center items-center gap-5">
        <EmailUsDecoration className="h-[180px]" />
        <div className="flex flex-col gap-4">
          <ContactDetail icon={MailIcon} title="contact@onservice.ge" />
          <ContactDetail icon={CallIcon} title="+995 598 15 92 15" />
        </div>
        <div className="flex gap-3 items-center mt-5">
          <button className="h-[38px] aspect-square flex justify-center items-center bg-white rounded-md cursor-pointer transition-colors hover:bg-whiteHover">
            <FacebookIcon className="h-[20px]" />
          </button>
          <button className="h-[38px] aspect-square flex justify-center items-center bg-white rounded-md cursor-pointer transition-colors hover:bg-whiteHover">
            <InstagramIcon className="h-[20px]" />
          </button>
          <button className="h-[38px] aspect-square flex justify-center items-center bg-white rounded-md cursor-pointer transition-colors hover:bg-whiteHover">
            <WhatsappIcon className="h-[20px]" />
          </button>
          <button className="h-[38px] aspect-square flex justify-center items-center bg-white rounded-md cursor-pointer transition-colors hover:bg-whiteHover">
            <ViberIcon className="h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactInput(props: {
  long?: boolean;
  placeholder: string;
  name: string;
}) {
  return props.long ? (
    <textarea
      className="w-full bg-mainClear font-mainSemiBold text-main px-5 py-3.5 h-[100px] resize-none rounded-lg tracking-wider focus:bg-mainClearHover transition-colors"
      placeholder={props.placeholder}
      name={props.name}
    ></textarea>
  ) : (
    <input
      className="w-full h-[50px] bg-mainClear font-mainSemiBold text-main px-5 rounded-lg tracking-wider focus:bg-mainClearHover transition-colors"
      placeholder={props.placeholder}
      name={props.name}
    ></input>
  );
}
function ContactDetail(props: { title: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-3">
      <div className=" h-[40px] aspect-square rounded-[50%] flex justify-center items-center bg-whiteClear">
        <props.icon className="w-[20px] h-[19px]" />
      </div>
      <p className="text-white70 tracking-wider font-mainMedium">
        {props.title}
      </p>
    </div>
  );
}
