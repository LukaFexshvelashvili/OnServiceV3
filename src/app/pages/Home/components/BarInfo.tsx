export default function BarInfo(props: { title: string; data: string }) {
  return (
    <div className="flex flex-col gap-1 text-start w-[280px] max-600:px-4 font-main2Medium case_up max-600:bg-black/5 max-600:w-full py-4 max-600:rounded-lg max-600:border-2  max-600:border-white/10 max-600:backdrop-blur-sm">
      <label className="text-white/80  max-600:text-[14px] max-600:text-start tracking-wider">
        {props.title}
      </label>{" "}
      <h3 className="text-main text-[40px] max-992:text-[30px] max-600:text-[26px] max-600:text-start font-mainBold tracking-wider">
        {props.data}
      </h3>
    </div>
  );
}
