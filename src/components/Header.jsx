import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Planning Tools", path: "/planning-tools" },
  { label: "Investor Hub", path: "/investor-hub" },
  { label: "Insights", path: "/wealth-insights" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for dynamic background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFBF7]/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
          : "bg-[#FDFBF7] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl  flex items-center justify-center text-white group-hover:bg-emerald-150 transition-colors shadow-sm">
              {/* <span className="font-serif text-xl font-bold tracking-tight">
                D
              </span> */}
              <img src="/logo.png" alt="Daisen Wealth Partners Logo" className="w-12 h-12 object-contain" />
            </div>

            <div>
              <div className="text-slate-900 font-serif text-lg font-semibold leading-tight tracking-tight">
                Daisen
              </div>
              <div className="text-emerald-800 text-[10px] tracking-[0.25em] font-medium uppercase">
                Wealth Partners
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/5 p-1.5 rounded-full border border-slate-900/5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Trust Badge */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-emerald-950 text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-slate-900/10 hover:shadow-emerald-950/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="xl:hidden mt-4 pt-4 border-t border-slate-200/80 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1 pb-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-900 text-white font-semibold"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200/60 flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full bg-slate-900 hover:bg-emerald-950 text-white text-center py-3 rounded-xl text-sm font-semibold shadow-sm transition"
                >
                  Book Consultation
                </Link>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 py-1">
                  <ShieldCheck size={14} className="text-emerald-700" />
                  <span>AMFI Registered Mutual Fund Distributor</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}