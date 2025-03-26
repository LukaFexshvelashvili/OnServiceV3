import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="website_development" element={<WebDeveloping />} />
        <Route path="ad_making" element={<AdMaking />} />
        <Route path="design" element={<Design />} />
      </Route>
    </Routes>
  );
}
