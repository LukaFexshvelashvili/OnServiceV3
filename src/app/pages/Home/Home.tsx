import PageLine from "../../../components/PageLine";
import ControlPanelSection from "./components/ControlPanelSection";
import DigitalAdsSection from "./components/DigitalAdsSection";
import FrequentlyAskedSection from "./components/FrequentlyAskedSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import StarterSection from "./components/StarterSection";

export default function Home() {
  return (
    <>
      <title>
        ციფრული სერვისები - ვებგვერდის დამზადება, დიზაინის დამზადება,
        გარეკლამება
      </title>
      <main className="min-h-[calc(100vh_-_var(--nav-height))]">
        <StarterSection />
        <ServicesSection />
        <PageLine />
        <ProjectsSection />
        <PageLine />
        <DigitalAdsSection />
        <PageLine />
        <ControlPanelSection />
        <PageLine />
        <FrequentlyAskedSection />
      </main>
    </>
  );
}
