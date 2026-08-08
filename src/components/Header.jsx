import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Planning Tools", path: "/planning-tools" },
  { label: "Investor Hub", path: "/investor-hub" },
  { label: "Wealth Insights", path: "/wealth-insights" },
  { label: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#071A2B]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full border border-[#C9A86A] flex items-center justify-center">
              <span className="text-[#C9A86A] font-serif text-lg">
                D
              </span>
            </div>

            <div>
              <div className="text-white font-serif text-lg leading-tight">
                Daisen
              </div>

              <div className="text-[#C9A86A] text-[10px] tracking-[0.22em] uppercase">
                Wealth Partners
              </div>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm text-white/75 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 bg-[#C9A86A] text-[#071A2B] px-5 py-3 rounded-full text-sm font-medium hover:bg-[#d8bc85] transition"
          >
            Book a Consultation
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-white p-2"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="xl:hidden border-t border-white/10 py-5">

            <nav className="flex flex-col">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-[#C9A86A] py-3 text-sm"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-[#C9A86A] text-[#071A2B] text-center py-3 rounded-full font-medium"
              >
                Book a Consultation
              </Link>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}