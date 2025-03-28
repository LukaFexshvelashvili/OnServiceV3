import { Link } from "react-router";

export default function SectionSeeMore(props: { title: string; link: string }) {
  return (
    <div className="my-10 flex justify-center">
      <Link
        to={props.link}
        className="caseUp text-main text-lg inline-block os_underline_hover font-mainSemiBold"
      >
        {props.title}
      </Link>
    </div>
  );
}
