import { Route, Routes } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import WebDeveloping from "./pages/WebDeveloping/WebDeveloping";
import AdMaking from "./pages/AdMaking/AdMaking";
import Design from "./pages/Design/Design";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="website_development" element={<WebDeveloping />} />
          <Route path="ad_making" element={<AdMaking />} />
          <Route path="design" element={<Design />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
