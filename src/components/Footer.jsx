import {
  ArrowUpRight,
  Mail,
  MessageCircle,
 
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

export default function Footer() {
  return (
    <footer className="bg-[#04121E] text-white">

      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#C9A86A]" />
              <span className="text-[#C9A86A] text-xs uppercase tracking-[0.25em]">
                Your Financial Journey
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Let's build your
              <span className="text-[#C9A86A] italic">
                {" "}financial future.
              </span>
            </h2>

            <p className="mt-6 text-white/55 max-w-xl leading-7">
              Whether you're starting your first SIP or planning for
              long-term wealth creation, we're here to guide you at every
              stage of your investment journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#C9A86A] text-[#071A2B] px-6 py-3.5 rounded-full font-medium"
              >
                Book a Consultation
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://wa.me/918301808509"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 rounded-full hover:bg-white/5 transition"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">

            <a href="#home" className="inline-block">
              <div className="text-2xl font-serif">
                Daisen
              </div>
              <div className="text-[#C9A86A] text-[10px] tracking-[0.25em] uppercase mt-1">
                Wealth Partners
              </div>
            </a>

            <p className="mt-6 text-sm leading-6 text-white/45">
              Helping individuals, families and NRIs build long-term wealth
              through goal-based mutual fund investing.
            </p>

            <div className="mt-6 space-y-3">

              <a
                href="mailto:daisenwealthpartners@gmail.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white"
              >
                <Mail size={16} />
                daisenwealthpartners@gmail.com
              </a>

              <a
                href="https://wa.me/918301808509"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white"
              >
                <MessageCircle size={16} />
                +91 83018 08509
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-white mb-5">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/45 hover:text-[#C9A86A] transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium text-white mb-5">
              Resources
            </h3>

            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource}>
                  <a
                    href="#planning-tools"
                    className="text-sm text-white/45 hover:text-[#C9A86A] transition"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Founder */}
          <div>
            <h3 className="text-sm font-medium text-white mb-5">
              Daisen Joseph
            </h3>

            <p className="text-sm text-white/45 leading-6">
              Founder & Managing Consultant
            </p>

            <p className="mt-3 text-xs text-white/35 leading-5">
              M.Com (Finance & Marketing)
              <br />
              NISM Certified
            </p>

            <a
              href="#about"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[#C9A86A]"
            >
              Meet Daisen
              <ArrowUpRight size={15} />
            </a>

            <div className="mt-7 flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C9A86A] transition"
                aria-label="YouTube"
              >
                <FaYoutube size={17} />
              </a>

              <a
                href="https://wa.me/918301808509"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C9A86A] transition"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Daisen Wealth Partners. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Disclaimer
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}