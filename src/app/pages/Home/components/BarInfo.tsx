export default function BarInfo(props: { title: string; data: string }) {
  return (
    <div className="flex flex-col gap-1 text-center w-[280px] max-600:px-6">
      <label className="text-white70 tracking-wider max-600:text-[14px] max-600:text-start ">
        {props.title}
      </label>{" "}
      <h3 className="text-white text-[40px] max-992:text-[30px] max-600:text-[26px] max-600:text-start font-mainBold tracking-wider">
        {props.data}
      </h3>
    </div>
  );
}
