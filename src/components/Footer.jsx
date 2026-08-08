import { ArrowUpRight, Mail, MessageCircle, ShieldCheck, ExternalLink } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const services = [
  "Mutual Fund Investments",
  "SIP Planning",
  "Retirement Planning",
  "NRI Investment Planning",
  "Wealth Creation",
];

const resources = [
  "SIP Calculator",
  "Smart SIP Calculator",
  "Lumpsum Calculator",
  "Investor Hub",
  "Wealth Insights",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white selection:bg-emerald-800 selection:text-white">
      {/* High-Impact CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Your Financial Journey</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] text-slate-100 font-medium">
              Let's build your{" "}
              <span className="text-emerald-400 italic font-normal">
                financial future.
              </span>
            </h2>

            <p className="mt-6 text-slate-400 max-w-xl leading-relaxed text-base font-light">
              Whether you're starting your first SIP or planning for long-term wealth creation, we offer personalized guidance at every milestone.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-emerald-950/50"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://wa.me/918301808509"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-200 px-7 py-3.5 rounded-xl text-sm font-medium transition-all"
              >
                <MessageCircle size={17} className="text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block group">
              <div className="text-2xl font-serif font-bold text-slate-100 group-hover:text-emerald-400 transition">
                Daisen
              </div>
              <div className="text-emerald-500 text-[10px] tracking-[0.25em] font-semibold uppercase mt-0.5">
                Wealth Partners
              </div>
            </a>

            <p className="mt-5 text-xs leading-relaxed text-slate-400 font-light">
              Helping individuals, families, and NRIs build sustainable long-term wealth through disciplined, goal-based mutual fund portfolios.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:daisenwealthpartners@gmail.com"
                className="flex items-center gap-3 text-xs text-slate-400 hover:text-emerald-400 transition"
              >
                <Mail size={15} className="text-slate-500 shrink-0" />
                <span>daisenwealthpartners@gmail.com</span>
              </a>

              <a
                href="https://wa.me/918301808509"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-xs text-slate-400 hover:text-emerald-400 transition"
              >
                <MessageCircle size={15} className="text-slate-500 shrink-0" />
                <span>+91 83018 08509</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-5">
              Services
            </h3>

            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-xs text-slate-400 hover:text-emerald-400 transition flex items-center gap-1 group"
                  >
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-5">
              Planning & Tools
            </h3>

            <ul className="space-y-2.5">
              {resources.map((resource) => (
                <li key={resource}>
                  <a
                    href="#planning-tools"
                    className="text-xs text-slate-400 hover:text-emerald-400 transition"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership & Credentials */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-5">
              Key Contact
            </h3>

            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/80">
              <p className="text-sm font-medium text-slate-100">Daisen Joseph</p>
              <p className="text-xs text-emerald-400 mt-0.5 font-medium">
                Founder & Managing Consultant
              </p>

              <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <p>• M.Com (Finance & Marketing)</p>
                <p>• NISM Series V-A Certified</p>
              </div>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <span>Read Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-800 transition"
                aria-label="YouTube Channel"
              >
                <FaYoutube size={16} />
              </a>

              <a
                href="https://wa.me/918301808509"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-800 transition"
                aria-label="WhatsApp Direct"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure Banner (Crucial for AMFI/SEBI Compliance) */}
        <div className="mt-14 pt-6 border-t border-slate-800/80">
          <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/60 text-[11px] text-slate-400 leading-relaxed space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <ShieldCheck size={14} />
              <span>AMFI Registered Mutual Fund Distributor</span>
            </div>
            <p>
              <strong className="text-slate-300">Disclaimer:</strong> Mutual fund investments are subject to market risks, read all scheme related documents carefully before investing. Past performance is not an indicator of future returns. Daisen Wealth Partners acts as a distributor of mutual funds and receives commission from AMCs.
            </p>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Daisen Wealth Partners. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Regulatory Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}