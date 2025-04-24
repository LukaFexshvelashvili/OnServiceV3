import { Link } from "react-router";
import { CallIcon, LogoIcon } from "../../assets/icons/OS_icons";
import { useState } from "react";

export default function Navbar() {
  const [MobileNav, setMobileNav] = useState<boolean>(false);
  return (
    <nav className="h-[var(--nav-height)] border-b-2 border-lineColor flex items-center max-992:sticky max-992:top-0 bg-bodyBg z-40">
      <div className="os_container flex items-center justify-between   w-full">
        <div className="flex items-center gap-5">
          <Link
            to={"/"}
            className="flex items-center gap-3 font-mainBold text-main text-md tracking-wider cursor-pointer"
          >
            <LogoIcon height={22} width={22} />
            <p>ონ სერვისი</p>
          </Link>
          <div className="h-5 aspect-square rounded-3xl bg-transparent outline-2 outline-lineColor p-[2px] cursor-pointer">
            <img src="images/languages/georgia.png" alt="Georgian Flag" />
          </div>
        </div>

        <ul className="flex items-center gap-8 text-navDesc  max-992:hidden">
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
          className="max-992:hidden flex items-center gap-2 bg-main rounded-md text-buttonText h-[36px] w-[160px] text-sm justify-center cursor-pointer transition-colors hover:bg-mainHover"
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
            className={`h-[2px] w-full bg-main transition-transform duration-300 ${
              MobileNav ? " translate-y-2 rotate-45" : ""
            } `}
          ></span>
          <span
            className={`h-[2px] w-3/4 bg-main transition-opacity duration-300 ${
              MobileNav ? " opacity-0" : ""
            } `}
          ></span>
          <span
            className={`h-[2px] w-2/4 bg-main transition-transform duration-300 ${
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
                <p className="text-head text-[14px]">პროექტები</p>
                <p className="text-head text-[14px]">სერვისები</p>
                <p className="text-head text-[14px]">კონტაქტი</p>
              </div>
              <div className="h-[1px] w-full bg-lineColor"></div>
              <div className="flex flex-col gap-2.5 ">
                <p className="text-desc text-[13px] case_up">პროექტები</p>
                <p className="text-head text-[14px]">ვებგვერდები</p>
                <p className="text-head text-[14px]">დიზაინები</p>
                <p className="text-head text-[14px]">რეკლამები</p>
              </div>
              <div className="h-[1px] w-full bg-lineColor"></div>

              <div className="flex flex-col gap-2.5 ">
                <p className="text-desc text-[13px] case_up">სერვისები</p>
                <p className="text-head text-[14px]">ვებგვერდის დამზადება</p>
                <p className="text-head text-[14px]">დიზაინის დამზადება</p>
                <p className="text-head text-[14px]">
                  რეკლამის დაბეჭდვა / გაკვრა
                </p>
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
