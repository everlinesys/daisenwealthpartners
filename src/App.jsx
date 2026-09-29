
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PlanningTools from "./pages/PlanningTools";
import InvestorHub from "./pages/InvestorHub";
import WealthInsights from "./pages/WealthInsights";
import Contact from "./pages/Contact";

/* =========================================
   SCROLL TO TOP ON PAGE LOAD / ROUTE CHANGE
========================================= */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-[#F7F5F0] text-[#071A2B]">

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/planning-tools" element={<PlanningTools />} />
            <Route path="/investor-hub" element={<InvestorHub />} />
            <Route path="/wealth-insights" element={<WealthInsights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;

