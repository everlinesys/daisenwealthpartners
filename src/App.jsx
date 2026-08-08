import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PlanningTools from "./pages/PlanningTools";
import InvestorHub from "./pages/InvestorHub";
import WealthInsights from "./pages/WealthInsights";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
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