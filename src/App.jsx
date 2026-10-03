
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
import WealthInsights, { WealthInsightArticle } from "./pages/WealthInsights";
import Contact from "./pages/Contact";
import LegalPage from "./pages/LegalPages";

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

function AOSObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(
      "main section, main article, main [data-aos]"
    );

    targets.forEach((element, index) => {
      if (!element.dataset.aos) {
        element.dataset.aos = "fade-up";
      }

      element.style.setProperty("--aos-delay", `${Math.min(index % 6, 5) * 70}ms`);

      if (reduceMotion) {
        element.classList.add("aos-visible");
      }
    });

    if (reduceMotion) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AOSObserver />

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
            <Route path="/wealth-insights/:slug" element={<WealthInsightArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route path="/regulatory-disclosures" element={<LegalPage type="regulatory" />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;

