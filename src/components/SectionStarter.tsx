export default function SectionStarter(props: {
  className?: string;
  coloredTitle?: string;
  title: string;
  line?: boolean;
}) {
  return (
    <h2
      className={`text-head ${props.line ? "os_underline" : ""} ${
        props.className
      } text-center text-[22px] font-mainSemiBold tracking-wide`}
    >
      {props.coloredTitle ? (
        <span className="text-main mr-2">{props.coloredTitle} </span>
      ) : null}{" "}
      {props.title}
    </h2>
  );
}
