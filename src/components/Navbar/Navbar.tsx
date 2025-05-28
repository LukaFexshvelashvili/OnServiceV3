import { Link, useLocation } from "react-router";
import { CallIcon, LogoIcon } from "../../assets/icons/OS_icons";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [MobileNav, setMobileNav] = useState<boolean>(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const heroElement = document.querySelector("#hero_section");
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroElement);

    return () => {
      observer.unobserve(heroElement);
    };
  }, [location.pathname]);
  console.log(isHeroVisible);

  return (
    <nav
      className={`h-[var(--nav-height)] fixed top-0 border-b-2 border-white/5 backdrop-blur-[4px] flex items-center  max-992:top-0 transition-all ${
        isHeroVisible ? "bg-white/5" : "bg-black/80"
      } w-full z-40`}
    >
      <div className="os_container flex items-center justify-between   w-full">
        <div className="flex items-center gap-5">
          <Link
            to={"/"}
            className="flex items-center gap-3 font-mainSemiBold text-white text-md tracking-wider cursor-pointer"
          >
            <LogoIcon height={22} width={22} />
            <p>ონ სერვისი</p>
          </Link>
          <div className="h-5 aspect-square rounded-3xl bg-transparent outline-2 outline-lineColor p-[2px] cursor-pointer">
            <img src="/images/languages/georgia.png" alt="Georgian Flag" />
          </div>
        </div>

        <ul className="flex items-center gap-8 text-white/90 tracking-widest font-main2Medium case_up font-[400] max-992:hidden">
          <li className="cursor-pointer flex items-center justify-center navLi">
            <Link to={"/projects"}>პროექტები</Link>
          </li>
          <li className="cursor-pointer flex items-center justify-center navLi">
            {" "}
            <Link to={"/services"}>სერვისები</Link>
          </li>
          <li className="cursor-pointer flex items-center justify-center navLi">
            {" "}
            <Link to={"/contact"}>კონტაქტი</Link>
          </li>
        </ul>
        <Link
          to={"tel:+995 598 15 92 15"}
          className="max-992:hidden flex items-center gap-2 bg-[#202020] hover:bg-[#161616] font-main2Medium case_up rounded-md text-buttonText h-[36px] w-[160px] text-sm justify-center cursor-pointer transition-colors  "
        >
          <CallIcon height={18} width={18} />
          დაგვირეკე
        </Link>
        <div
          onClick={() => setMobileNav((state) => !state)}
          className={`max-992:flex hidden flex-col h-[40px] w-[42px]  rounded-md p-[8px] z-20  ${
            MobileNav ? " bg-bodyBg shadow-md" : " bg-bodyBg/0 shadow-none"
          } transition-all aspect-square justify-center items-end gap-1.5`}
        >
          <span
            className={`h-[2px] w-full bg-white transition-transform duration-300 ${
              MobileNav ? " translate-y-2 rotate-45" : ""
            } `}
          ></span>
          <span
            className={`h-[2px] w-3/4 bg-white transition-opacity duration-300 ${
              MobileNav ? " opacity-0" : ""
            } `}
          ></span>
          <span
            className={`h-[2px] w-2/4 bg-white transition-transform duration-300 ${
              MobileNav ? " -translate-y-2 -rotate-45 w-full" : ""
            } `}
          ></span>
        </div>
        <div
          className={`hidden max-992:block fixed top-0 left-0 h-[100dvh] w-full transition-all duration-500    ${
            MobileNav ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            onClick={() => setMobileNav(false)}
            className={`absolute h-full w-full bg-black/10 top-0 left-0 `}
          />
          <div
            className={`relative top-0 left-0 h-full w-2/4 min-w-[300px] bg-bodyBg py-6 px-4 flex flex-col duration-300 transition-transform ${
              MobileNav ? "translate-0" : "-translate-x-full"
            }`}
          >
            <Link
              to={"/"}
              className="flex items-center gap-3 justify-center font-mainBold text-main text-md tracking-wider cursor-pointer"
            >
              <LogoIcon height={22} width={22} />
              <p>ონ სერვისი</p>
            </Link>
            <div className="flex flex-col gap-3 mt-6 ">
              <div className="flex flex-col gap-2.5 ">
                <p className="text-desc text-[13px] case_up">ნავიგაცია</p>
                <Link to={"/projects"} className="text-head text-[14px]">
                  პროექტები
                </Link>
                <Link to={"/services"} className="text-head text-[14px]">
                  სერვისები
                </Link>
                <Link to={"/contact"} className="text-head text-[14px]">
                  კონტაქტი
                </Link>
              </div>
              <div className="h-[1px] w-full bg-lineColor"></div>
              <div className="flex flex-col gap-2.5 ">
                <p className="text-desc text-[13px] case_up">პროექტები</p>
                <Link
                  to={"/website_development"}
                  className="text-head text-[14px]"
                >
                  ვებგვერდები
                </Link>
                <p className="text-head text-[14px]">დიზაინები</p>
                <Link
                  to={"advertisement_printing"}
                  className="text-head text-[14px]"
                >
                  რეკლამები
                </Link>
              </div>
              <div className="h-[1px] w-full bg-lineColor"></div>

              <div className="flex flex-col gap-2.5 ">
                <p className="text-desc text-[13px] case_up">სერვისები</p>
                <Link
                  to={"/website_development"}
                  className="text-head text-[14px]"
                >
                  ვებგვერდის დამზადება
                </Link>
                <p className="text-head text-[14px]">დიზაინის დამზადება</p>
                <Link
                  to={"advertisement_printing"}
                  className="text-head text-[14px]"
                >
                  რეკლამის დაბეჭდვა / გაკვრა
                </Link>
                <p className="text-head text-[14px]">პერსონალური კონსულტაცია</p>
                <p className="text-head text-[14px]">ციფრული რეკლამირება</p>
              </div>
            </div>
            <Link
              to={"tel:+995 598 15 92 15"}
              className="mt-auto w-full flex items-center gap-2 bg-main rounded-md text-buttonText h-[40px]  text-sm justify-center cursor-pointer transition-colors hover:bg-mainHover"
            >
              <CallIcon height={18} width={18} />
              დაგვირეკე
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
