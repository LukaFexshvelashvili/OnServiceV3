import { Link } from "react-router";
import { LogoIcon } from "../../assets/icons/OS_icons";

export default function Footer() {
  return (
    <footer className="mt-5 border-t border-lineColor">
      <div className="os_container py-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3 max-w-[300px]">
            {" "}
            <Link
              to={"/"}
              className="flex items-center gap-3 font-mainBold text-main text-lg tracking-wider cursor-pointer"
            >
              <LogoIcon height={26} width={26} />
              <p>ონ სერვისი</p>
            </Link>
            <p className="text-desc leading-6.5">
              ჩვენ გთავაზობთ თანამედროვე ციფრული სერვისების მომსახურებას,
              ხელმისაწვდომად და სწრაფად
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <p className=" text-head font-mainSemiBold">ნავიგაცია</p>
            <div className="flex flex-col gap-1">
              <Link className="text-desc leading-6.5" to="/">
                მთავარი
              </Link>
              <Link className="text-desc leading-6.5" to="/projects">
                პროექტები
              </Link>
              <Link className="text-desc leading-6.5" to="/services">
                სერვისები
              </Link>
              <Link className="text-desc leading-6.5" to="/contact">
                კონტაქტი
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <p className=" text-head font-mainSemiBold">კონტაქტი</p>
            <div className="flex flex-col gap-1">
              <Link className="text-desc leading-6.5" to="facebook_link">
                Facebook
              </Link>
              <Link className="text-desc leading-6.5" to="instagram_link">
                Instagram
              </Link>
              <Link
                className="text-desc leading-6.5"
                to="mailto:contact@onservice.ge"
              >
                contact@onservice.ge
              </Link>
              <Link
                className="text-desc leading-6.5"
                to="tel:+995 598 15 92 15"
              >
                +995 598 15 92 15
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <p className=" text-head font-mainSemiBold">სერვისები</p>
            <div className="flex flex-col gap-1">
              <Link className="text-desc leading-6.5" to="/website_development">
                ვებგვერდის დამზადება
              </Link>
              <Link className="text-desc leading-6.5" to="/design">
                დიზაინის დამზადება
              </Link>
              <Link className="text-desc leading-6.5" to="/digital_ad">
                ციფრული რეკლამა
              </Link>
              <Link className="text-desc leading-6.5" to="/ad_making">
                რეკლამის დაბეჭდვა/გაკვრა
              </Link>
              <Link className="text-desc leading-6.5" to="/customer_service">
                პერსონალური მომსახურება
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 pt-1">
        <div className="flex items-center gap-8">
          <Link className="text-sm text-desc" to="/policy">
            ვებგვერდის პოლიტიკა
          </Link>
          <Link className="text-sm text-desc" to="/payment_policy">
            ფულის დაბრუნების პოლიტიკა
          </Link>
        </div>
        <Link className="text-sm text-desc" to={"https://onservice.ge"}>
          ყველა უფლება დაცულია ONSERVICE 2025 ©
        </Link>
      </div>
    </footer>
  );
}
