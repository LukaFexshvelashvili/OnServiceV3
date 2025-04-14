export default function ControlPanelSection() {
  return (
    <section>
      <div className="my-10 flex flex-col items-center text-center gap-4">
        <h2
          className={`text-head text-center text-[26px] font-mainBold tracking-wide`}
        >
          <span className="text-main">ონ სერვის</span> პანელი
        </h2>
        <p className="leading-8 text-desc text-[18px] max-w-[650px]">
          გთავაზობთ ჩვენს მიერ დამზადებულ ვებგვერდის სამართავ პანელს
        </p>
      </div>
      <div className=" max-w-[600px] mx-auto w-[90%] my-20">
        <img
          className="w-full"
          src="images/services/control_panel.png"
          alt="საკონტროლო პანელი - OnService"
        />
      </div>
    </section>
  );
}
