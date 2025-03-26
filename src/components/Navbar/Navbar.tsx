import { CallIcon, LogoIcon } from "../../assets/icons/OS_icons";

export default function Navbar() {
  return (
    <nav className="h-[var(--nav-height)] border-b-2 border-lineColor flex items-center">
      <div className="os_container flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 font-mainBold text-main text-lg tracking-wider cursor-pointer">
            <LogoIcon height={26} width={26} />
            <p>ონ სერვისი</p>
          </div>
          <div className="h-5 aspect-square rounded-3xl bg-transparent outline-2 outline-main p-[2px] cursor-pointer">
            <img src="images/languages/georgia.png" alt="Georgian Flag" />
          </div>
        </div>

        <ul className="flex items-center gap-8 text-navDesc">
          <li className="cursor-pointer flex items-center justify-center navLi">
            პროექტები
          </li>
          <li className="cursor-pointer flex items-center justify-center navLi">
            სერვისები
          </li>
          <li className="cursor-pointer flex items-center justify-center navLi">
            კონტაქტი
          </li>
        </ul>
        <button className="flex items-center gap-3 bg-main rounded-md text-buttonText h-[40px] w-[180px]  justify-center cursor-pointer transition-colors hover:bg-mainHover">
          <CallIcon height={18} width={18} />
          დაგვირეკე
        </button>
      </div>
    </nav>
  );
}
