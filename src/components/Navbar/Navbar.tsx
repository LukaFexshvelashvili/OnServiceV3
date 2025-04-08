import { Link } from "react-router";
import { CallIcon, LogoIcon } from "../../assets/icons/OS_icons";

export default function Navbar() {
  return (
    <nav className="h-[var(--nav-height)] border-b-2 border-lineColor flex items-center">
      <div className="os_container flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link
            to={"/"}
            className="flex items-center gap-3 font-mainBold text-main text-lg tracking-wider cursor-pointer"
          >
            <LogoIcon height={26} width={26} />
            <p>ონ სერვისი</p>
          </Link>
          <div className="h-5 aspect-square rounded-3xl bg-transparent outline-2 outline-main p-[2px] cursor-pointer">
            <img src="images/languages/georgia.png" alt="Georgian Flag" />
          </div>
        </div>

        <ul className="flex items-center gap-8 text-navDesc">
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
          className="flex items-center gap-3 bg-main rounded-md text-buttonText h-[40px] w-[180px]  justify-center cursor-pointer transition-colors hover:bg-mainHover"
        >
          <CallIcon height={18} width={18} />
          დაგვირეკე
        </Link>
      </div>
    </nav>
  );
}
