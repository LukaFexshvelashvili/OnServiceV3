export default function SectionStarter(props: {
  coloredTitle?: string;
  title: string;
  line?: boolean;
}) {
  return (
    <h2
      className={`text-head ${
        props.line ? "os_underline" : ""
      } text-center text-[24px] font-mainSemiBold tracking-wide`}
    >
      {props.coloredTitle ? (
        <span className="text-main">{props.coloredTitle}</span>
      ) : null}{" "}
      {props.title}
    </h2>
  );
}
