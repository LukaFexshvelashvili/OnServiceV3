import { Link } from "react-router";
import { EmailUsDecoration } from "../../assets/decorations/OS_decorations";
import {
  CallIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  ViberIcon,
  WhatsappIcon,
} from "../../assets/icons/OS_icons";
import axios from "axios";
import { useActionState } from "react";

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

      <div className="absolute bottom-10 left-10 z-0 flex justify-between no-select">
        <img src="images/dots/dots_fade_right.png" className="h-[220px]" />
      </div>
    </div>
  );
}

export function ContactCard() {
  const [data, action] = useActionState(
    async (_prevState: unknown, formData: FormData) => {
      try {
        const res = await axios.post(
          "https://moviesgo.ge/testing/test.php",
          {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          },
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        return res.data;
      } catch (error) {
        return { success: false, message: "Error sending email." };
      }
    },
    { success: false, message: "" }
  );
  return (
    <div className="max-992:flex-col max-992:h-auto relative z-10 max-w-[1200px] w-full h-[450px] bg-white rounded-xl shadow-[0px_4px_30px_rgba(215,_215,_215,_0.25)] flex overflow-hidden">
      <div className=" p-4 px-6 w-2/4 max-992:px-4 max-992:py-3 flex flex-col justify-center max-992:w-full">
        <h3 className="text-headDark60 font-mainBold text-[20px] max-600:text-[18px] tracking-wide max-600:text-center">
          <span className="text-main">და</span>გვიკავშირდით
        </h3>
        <p className="text-desc font-mainMedium text-[18px] tracking-wide mt-2 max-600:text-[16px] max-600:text-center">
          ჩვენ დაგეხმარებით განავითაროთ თქვენი ბიზნესი
        </p>
        <form className="flex flex-col gap-4 mt-6" action={action}>
          <ContactInput name="name" placeholder="სახელი" />
          <ContactInput name="email" placeholder="მეილი" />
          <ContactInput name="message" placeholder="შეტყობინება" long />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-main to-purple h-[50px] max-600:h-[45px] tracking-wider rounded-lg text-white font-mainSemiBold cursor-pointer transition-opacity hover:opacity-90"
          >
            გაგზავნა
          </button>
        </form>
      </div>
      <div className="max-992:w-full max-992:py-8  h-full w-2/4 bg-gradient-to-r from-main to-purple flex flex-col justify-center items-center gap-5">
        <EmailUsDecoration className="h-[180px]" />
        <div className="flex flex-col gap-4">
          <ContactDetail
            icon={MailIcon}
            title="contact@onservice.ge"
            link="mailto:contact@onservice.ge"
          />
          <ContactDetail
            icon={CallIcon}
            title="+995 598 15 92 15"
            link="tel:+995 598 15 92 15"
          />
        </div>
        <div className="flex gap-3 items-center mt-5">
          <Link
            to="facebook_link"
            className="h-[38px] aspect-square flex justify-center items-center bg-white rounded-md cursor-pointer transition-colors hover:bg-whiteHover"
          >
            <FacebookIcon className="h-[20px]" />
          </Link>
          <Link
            to="instagram_link"
            className="h-[38px] aspect-square flex justify-center items-center bg-white rounded-md cursor-pointer transition-colors hover:bg-whiteHover"
          >
            <InstagramIcon className="h-[20px]" />
          </Link>
          <Link
            to="whatsapp_link"
            className="h-[38px] aspect-square flex justify-center items-center bg-white rounded-md cursor-pointer transition-colors hover:bg-whiteHover"
          >
            <WhatsappIcon className="h-[20px]" />
          </Link>
          <Link
            to="viber_link"
            className="h-[38px] aspect-square flex justify-center items-center bg-white rounded-md cursor-pointer transition-colors hover:bg-whiteHover"
          >
            <ViberIcon className="h-[20px]" />
          </Link>
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
      className="w-full h-[50px] max-600:h-[45px] bg-mainClear font-mainSemiBold text-main px-5 rounded-lg tracking-wider focus:bg-mainClearHover transition-colors"
      placeholder={props.placeholder}
      name={props.name}
    ></input>
  );
}
function ContactDetail(props: {
  title: string;
  icon: React.ElementType;
  link: string;
}) {
  return (
    <Link to={props.link} className="flex items-center gap-3">
      <div className=" h-[40px] aspect-square rounded-[50%] flex justify-center items-center bg-whiteClear">
        <props.icon className="w-[20px] h-[19px]" />
      </div>
      <p className="text-white70 tracking-wider font-mainMedium">
        {props.title}
      </p>
    </Link>
  );
}
