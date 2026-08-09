import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function CTA() {
  const benefits = [
    "1-on-1 Personalized Portfolio Discovery",
    "Zero-Obligation Goal & Mutual Fund Review",
    "NRI & Global Investor Onboarding Support",
  ];

  return (
    <section className="relative bg-[#FDFBF7] py-20 lg:py-28 overflow-hidden selection:bg-emerald-800 selection:text-white">
      {/* Background Decorative Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-900/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-amber-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl shadow-slate-900/20 border border-slate-800 overflow-hidden"
        >
          {/* Subtle Subtle Architectural Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6">
                <Sparkles size={14} />
                <span>Begin Your Journey</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-5xl font-serif font-medium leading-[1.15] text-white">
                Ready to align your wealth with{" "}
                <span className="italic text-emerald-400 font-normal">
                  clarity & intent?
                </span>
              </h2>

              <p className="mt-5 text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                Schedule a complimentary 30-minute consultation with our advisory team to evaluate your current investments and build a structured mutual fund roadmap.
              </p>

              {/* Quick Benefits Checklist */}
              <div className="mt-8 space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span className="text-slate-200 text-sm font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Box Column */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-emerald-400" />
                    30-Min Discovery Session
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    AMFI Registered
                  </span>
                </div>

                {/* Primary CTA: Book Consultation */}
                <a
                  href="/contact"
                  className="group w-full inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg shadow-emerald-950/50"
                >
                  <Calendar size={18} />
                  <span>Book Advisory Call</span>
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>

                {/* Divider with Text */}
                <div className="relative my-4 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700/60" />
                  </div>
                  <span className="relative bg-slate-800 px-3 text-xs text-slate-400 uppercase tracking-widest font-medium">
                    Or Join Directly
                  </span>
                </div>

                {/* Secondary CTA: WhatsApp Community */}
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-slate-900/90 hover:bg-slate-900 text-slate-200 border border-slate-700 hover:border-emerald-500/50 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300"
                >
                  <MessageCircle size={18} className="text-emerald-400" />
                  <span>Join Investor WhatsApp Group</span>
                </a>

                <p className="text-[11px] text-center text-slate-400 pt-2 font-light">
                  Strictly no spam. Unsubscribe or opt out at any time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}