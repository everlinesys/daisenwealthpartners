
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
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

const whatsappLink = "https://wa.me/918301808509";
const emailLink = "mailto:daisenwealthpartners@gmail.com";

export default function Footer() {
  return (
    <>
      {/* ================================
          MAIN FOOTER
      ================================= */}
      <footer className="bg-slate-950 text-white selection:bg-emerald-800 selection:text-white">

        {/* ================================
            HIGH-IMPACT CTA BANNER
        ================================= */}
        <div className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="max-w-3xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Your Financial Journey</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] text-slate-100 font-medium">
                Let's build your{" "}
                <span className="text-emerald-400 italic font-normal">
                  financial future.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-slate-400 max-w-xl leading-relaxed text-base font-light">
                Whether you're starting your first SIP or planning for
                long-term wealth creation, we offer personalized guidance at
                every milestone.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">

                {/* Consultation */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-emerald-950/50"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight size={17} />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-200 px-7 py-3.5 rounded-xl text-sm font-medium transition-all"
                >
                  <MessageCircle
                    size={17}
                    className="text-emerald-400"
                  />
                  <span>WhatsApp Us</span>
                </a>

                {/* Email */}
                <a
                  href={emailLink}
                  className="inline-flex items-center gap-2 border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-200 px-7 py-3.5 rounded-xl text-sm font-medium transition-all"
                >
                  <Mail
                    size={17}
                    className="text-emerald-400"
                  />
                  <span>Email Us</span>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* ================================
            MAIN FOOTER CONTENT
        ================================= */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

            {/* ================================
                BRAND
            ================================= */}
            <div className="lg:col-span-1">

              <a
                href="#home"
                className="inline-block group"
              >
                <div className="text-2xl font-serif font-bold text-slate-100 group-hover:text-emerald-400 transition">
                  Daisen
                </div>

                <div className="text-emerald-500 text-[10px] tracking-[0.25em] font-semibold uppercase mt-0.5">
                  Wealth Partners
                </div>
              </a>

              <p className="mt-5 text-xs leading-relaxed text-slate-400 font-light">
                Helping individuals, families, and NRIs build sustainable
                long-term wealth through disciplined, goal-based mutual fund
                portfolios.
              </p>

            </div>

            {/* ================================
                SERVICES
            ================================= */}
            <div>

              <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-5">
                Services
              </h3>

              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-xs text-slate-400 hover:text-emerald-400 transition flex items-center gap-1"
                    >
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            {/* ================================
                PLANNING & TOOLS
            ================================= */}
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

            {/* ================================
                MAIN CONTACT
            ================================= */}
            <div>

              <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-5">
                Contact
              </h3>

              <div className="space-y-3">

                {/* Name & Address */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">

                  <p className="text-sm font-medium text-slate-100">
                    Daisen Joseph
                  </p>

                  <p className="text-xs text-emerald-400 mt-1 font-medium">
                    Founder
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-800">
                    <p className="text-xs leading-relaxed text-slate-400">
                      Kannur
                      <br />
                      Kerala
                      <br />
                      Alakode - 670571
                    </p>
                  </div>

                </div>

                {/* Email */}
                <a
                  href={emailLink}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-800/60 hover:bg-slate-900 transition-all"
                >

                  <div className="w-9 h-9 shrink-0 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Mail
                      size={16}
                      className="text-emerald-400 group-hover:scale-110 transition-transform"
                    />
                  </div>

                  <div className="min-w-0">

                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      Email
                    </p>

                    <p className="mt-1 text-xs text-slate-300 group-hover:text-emerald-400 transition break-all">
                      daisenwealthpartners@gmail.com
                    </p>

                  </div>

                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-800/60 hover:bg-slate-900 transition-all"
                >

                  <div className="w-9 h-9 shrink-0 rounded-lg bg-slate-800 flex items-center justify-center">
                    <MessageCircle
                      size={16}
                      className="text-emerald-400 group-hover:scale-110 transition-transform"
                    />
                  </div>

                  <div>

                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-xs text-slate-300 group-hover:text-emerald-400 transition">
                      +91 83018 08509
                    </p>

                  </div>

                </a>

              </div>
            </div>

            {/* ================================
                LEADERSHIP
            ================================= */}
            <div>

              <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-5">
                Key Contact
              </h3>

              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/80">

                <p className="text-sm font-medium text-slate-100">
                  Daisen Joseph
                </p>

                <p className="text-xs text-emerald-400 mt-0.5 font-medium">
                  Founder
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

              {/* Social Icons */}
              <div className="mt-5 flex items-center gap-3">

                {/* YouTube */}
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-800 transition"
                  aria-label="YouTube Channel"
                >
                  <FaYoutube size={16} />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-800 transition"
                  aria-label="WhatsApp Direct"
                >
                  <MessageCircle size={16} />
                </a>

                {/* Email */}
                <a
                  href={emailLink}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-800 transition"
                  aria-label="Email Daisen Wealth Partners"
                >
                  <Mail size={16} />
                </a>

              </div>

            </div>

          </div>

          {/* ================================
              REGULATORY DISCLOSURE
          ================================= */}
          <div className="mt-14 pt-6 border-t border-slate-800/80">

            <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/60 text-[11px] text-slate-400 leading-relaxed space-y-2">

              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <ShieldCheck size={14} />

                <span>
                  AMFI Registered Mutual Fund Distributor
                </span>
              </div>

              <p>
                <strong className="text-slate-300">
                  Disclaimer:
                </strong>{" "}
                Mutual fund investments are subject to market risks, read all
                scheme related documents carefully before investing. Past
                performance is not an indicator of future returns. Daisen
                Wealth Partners acts as a distributor of mutual funds and
                receives commission from AMCs.
              </p>

            </div>

          </div>

          {/* ================================
              BOTTOM LEGAL BAR
          ================================= */}
          <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">

            <p>
              © {new Date().getFullYear()} Daisen Wealth Partners.
              All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">

              <a
                href="#"
                className="hover:text-slate-300 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-slate-300 transition"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="hover:text-slate-300 transition"
              >
                Regulatory Disclosures
              </a>

            </div>

          </div>

        </div>
      </footer>

      {/* =================================================
          FLOATING CONTACT BUTTONS
      ================================================= */}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* ================================
            FLOATING EMAIL
        ================================= */}
        <a
          href={emailLink}
          aria-label="Email Daisen Wealth Partners"
          className="group relative"
        >

          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 translate-x-2 pointer-events-none shadow-lg border border-slate-800 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            Email Us
          </span>

          {/* Email Button */}
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white border border-slate-700 shadow-xl hover:bg-slate-700 hover:scale-110 transition-all duration-200">
            <Mail size={21} />
          </span>

        </a>

        {/* ================================
            FLOATING WHATSAPP
        ================================= */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Daisen Wealth Partners on WhatsApp"
          className="group relative"
        >

          {/* Glow */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl animate-pulse" />

          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 translate-x-2 pointer-events-none shadow-lg border border-slate-800 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            Chat on WhatsApp
          </span>

          {/* WhatsApp Button */}
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-950/40 hover:bg-emerald-500 hover:scale-110 transition-all duration-200">
            <MessageCircle
              size={27}
              strokeWidth={2.2}
            />
          </span>

          {/* Notification Dot */}
          <span className="absolute top-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-300 border-2 border-slate-950" />

        </a>

      </div>
    </>
  );
}

