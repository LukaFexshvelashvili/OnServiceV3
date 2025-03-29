import DigitalAdsSection from "./components/DigitalAdsSection";
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
        <div className="os_fullLine"></div>
        <ProjectsSection />
        <div className="os_fullLine"></div>
        <DigitalAdsSection />
      </main>
    </>
  );
}
