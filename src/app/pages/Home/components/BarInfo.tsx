export default function BarInfo(props: { title: string; data: string }) {
  return (
    <div className="flex flex-col gap-1 text-center w-[280px]">
      <label className="text-white70 tracking-wider">{props.title}</label>{" "}
      <h3 className="text-white text-[40px] font-mainBold tracking-wider">
        {props.data}
      </h3>
    </div>
  );
}
