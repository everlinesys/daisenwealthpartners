import { useState, useRef } from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  PieChart,
  Award,
  ChevronRight,
  Play,
  MessageCircle,

  Users,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

export default function Hero() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("growth");

  // Mouse tilt effect for interactive preview card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const allocations = {
    growth: [
      { label: "Equity Funds", pct: "65%", color: "bg-emerald-500" },
      { label: "Global Exposure", pct: "20%", color: "bg-teal-400" },
      { label: "Debt & Fixed Income", pct: "15%", color: "bg-slate-300" },
    ],
    balanced: [
      { label: "Equity Funds", pct: "45%", color: "bg-emerald-500" },
      { label: "Debt & Fixed Income", pct: "40%", color: "bg-slate-400" },
      { label: "Gold & Commodities", pct: "15%", color: "bg-amber-400" },
    ],
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-[#FDFBF7] text-slate-900 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-100/50 blur-[120px]" />
        <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] rounded-full bg-amber-100/40 blur-[140px]" />

        {/* Subtle Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow / Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            Your credible partner for mutual fund investing
          </span>
          <ChevronRight size={14} className="text-slate-400" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-[68px] font-serif font-normal tracking-tight text-slate-900 leading-[1.08]"
            >
              Invest with{" "}
              <span className="italic font-serif text-emerald-800 underline decoration-emerald-300 decoration-wavy decoration-1 underline-offset-8">
                Clarity
              </span>{" "}
              Grow with{" "}
              <span className="italic font-serif text-emerald-800 underline decoration-emerald-300 decoration-wavy decoration-1 underline-offset-8">
                Purpose
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl font-light leading-relaxed"
            >
              Goal-based mutual fund investing with personalised guidance for individuals, families and NRIs.
              We help you choose suitable mutual fund strategies based on your goals, time horizon and risk profile — and stay with you for the long term.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4"
            >
              {/* Primary Consultation Button */}
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-emerald-950 text-white px-7 py-4 rounded-xl font-medium text-base shadow-xl shadow-slate-900/10 hover:shadow-emerald-950/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Start Your Investment Journey</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              {/* WhatsApp Community Button */}
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/80 px-6 py-4 rounded-xl font-medium text-base shadow-sm transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle size={14} className="fill-current" />
                </div>
                <span>Join Our WhatsApp Community</span>
              </a>

              {/* Secondary Link */}
              {/* <a
                href="/investor-hub"
                className="inline-flex items-center justify-center gap-2.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 px-6 py-4 rounded-xl font-medium text-base shadow-sm hover:bg-slate-50 transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                  <Play size={10} className="fill-current ml-0.5" />
                </div>
                <span>Investor Hub</span>
              </a> */}
            </motion.div>

            {/* Metric Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6"
            >
              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif text-slate-900 font-medium">
                  <span>30+</span>
                  <Globe2 size={18} className="text-emerald-700" />
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  Countries Served
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif text-slate-900 font-medium">
                  <span>100%</span>
                  <ShieldCheck size={18} className="text-emerald-700" />
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  Goal-Aligned Plans
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif text-slate-900 font-medium">
                  <span>15+ Yrs</span>
                  <Award size={18} className="text-emerald-700" />
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  Market Experience
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: PREVIEW + YOUTUBE CARD */}
          <div className="lg:col-span-5 space-y-6 relative">
            {/* Interactive Strategy Preview */}
            <motion.div
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-2xl shadow-slate-900/5 backdrop-blur-xl"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800">
                    <PieChart size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Strategic Allocation
                    </h3>
                    <p className="text-xs text-slate-500">Sample Portfolio Model</p>
                  </div>
                </div>

                {/* Allocation Toggle */}
                <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-medium">
                  <button
                    onClick={() => setActiveTab("growth")}
                    className={`px-3 py-1.5 rounded-md transition-all ${activeTab === "growth"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                      }`}
                  >
                    Growth
                  </button>
                  <button
                    onClick={() => setActiveTab("balanced")}
                    className={`px-3 py-1.5 rounded-md transition-all ${activeTab === "balanced"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                      }`}
                  >
                    Balanced
                  </button>
                </div>
              </div>

              {/* Dynamic Allocation Bars */}
              <div className="mt-6 space-y-4">
                {allocations[activeTab].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-slate-700">
                      <span>{item.label}</span>
                      <span className="font-semibold">{item.pct}</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: item.pct }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100">
                <span>Daisen Advisory Dashboard</span>
                <span className="text-emerald-700 font-medium hover:underline cursor-pointer flex items-center gap-1">
                  Custom Strategy <ChevronRight size={12} />
                </span>
              </div>
            </motion.div>

            {/* NEW: YouTube Channel Showcase Card */}
            <motion.a
              href="https://www.youtube.com/@daisenjoseph"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="block group rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-white shadow-xl border border-slate-800 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <FaYoutube size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                      Daisen Joseph - Watch on YouTube
                      <ArrowUpRight size={14} className="opacity-70" />
                    </h4>
                    <p className="text-xs text-slate-400">
                      Market Insights & Mutual Fund Education
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-300">
                  <Users size={12} className="text-red-400" />
                  <span>Subscribe</span>
                </div>
              </div>
            </motion.a>

            {/* Decorative Glow Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200/50 rounded-full blur-2xl pointer-events-none -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-200/50 rounded-full blur-2xl pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}