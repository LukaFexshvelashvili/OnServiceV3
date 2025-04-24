import { Link } from "react-router";

export default function SectionSeeMore(props: { title: string; link: string }) {
  return (
    <div className="my-10 flex justify-center max-992:my-0">
      <Link
        to={props.link}
        className="case_up text-main text-lg inline-block os_underline_hover font-mainSemiBold max-600:text-[16px]"
      >
        {props.title}
      </Link>
    </div>
  );
}
