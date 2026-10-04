import { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  PieChart,
  Award,
  ChevronRight,
  MessageCircle,
  Users,
  Repeat,
  Wallet,
  Target,
  Sparkles,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

export default function Hero() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("growth");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      term: "SIP",
      title: "Systematic Investment Plan",
      description: "Invest regularly. Grow steadily with disciplined wealth creation.",
      icon: Repeat,
      badge: "Wealth Accumulation",
    },
    {
      term: "SWP",
      title: "Systematic Withdrawal Plan",
      description: "Generate consistent passive income from your existing portfolio.",
      icon: Wallet,
      badge: "Cash Flow Strategy",
    },
    {
      term: "Goal-Based",
      title: "Milestone-Driven Portfolios",
      description: "Align your investments directly with life's major milestones.",
      icon: Target,
      badge: "Purpose-Led Wealth",
    },
    {
      term: "Protection",
      title: "Health & Life Insurance",
      description: "Safeguard your family's future with tailored protection plans.",
      icon: ShieldCheck,
      badge: "Risk Management",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // 3D Parallax Tilt Effect on Hero Image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

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

  const CurrentSlideIcon = slides[currentSlide].icon;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100vh-80px)] lg:max-h-[900px] flex items-center bg-[#FAF8F5] text-slate-900 overflow-hidden pt-20 pb-8 lg:pt-24 lg:pb-12 selection:bg-emerald-200 selection:text-emerald-900"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-100/50 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full bg-amber-100/40 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-8">
        {/* Eyebrow / Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-md mb-4 lg:mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-800">
            Credible Mutual Fund Advisory & Wealth Planning
          </span>
          <ChevronRight size={13} className="text-slate-400" />
        </motion.div>

        {/* 2-Column Grid Optimized for Single Screen Viewport */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Headlines, Interactive Slider, CTAs & Metrics */}
          <div className="lg:col-span-6 space-y-4 lg:space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl xl:text-5xl font-serif font-normal tracking-tight text-slate-900 leading-[1.12]"
            >
              Invest with{" "}
              <span className="italic font-serif text-emerald-800 underline decoration-emerald-400/80 decoration-wavy decoration-1 underline-offset-6">
                Clarity
              </span>
              <br />
              Grow with{" "}
              <span className="italic font-serif text-emerald-800 underline decoration-emerald-400/80 decoration-wavy decoration-1 underline-offset-6">
                Purpose
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-600 max-w-lg font-light leading-relaxed"
            >
              Goal-based mutual fund investing with personalized guidance for individuals, families, and NRIs.
            </motion.p>

            {/* AUTO-SLIDER CARD */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl p-3.5 sm:p-4 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
                <motion.div
                  key={currentSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.5, ease: "linear" }}
                  className="h-full bg-emerald-600"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-between gap-3 pt-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                      <CurrentSlideIcon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-serif font-bold text-slate-900">
                          {slides[currentSlide].term}
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-900/5 border border-emerald-900/10 text-emerald-800 font-semibold tracking-wider uppercase">
                          {slides[currentSlide].badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-tight mt-0.5">
                        {slides[currentSlide].description}
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block text-[10px] font-semibold text-slate-400 tracking-widest shrink-0">
                    0{currentSlide + 1}/0{slides.length}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Indicators */}
              <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "w-5 bg-emerald-700" : "w-1.5 bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a
                href="https://wa.me/918301808509?text=I%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20share%20the%20details."
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-950 text-white px-5 py-3 rounded-lg font-medium text-sm shadow-md transition-all duration-300"
              >
                <span>Start Investment Journey</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              <a
                href="https://chat.whatsapp.com/CrZZsuTKtjI9nnBSJuF8bt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50/60 text-slate-800 border border-slate-200/90 px-4 py-3 rounded-lg font-medium text-sm shadow-sm transition-all duration-200"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle size={11} className="fill-current" />
                </div>
                <span>WhatsApp Community</span>
              </a>
            </motion.div>

            {/* Key Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-3 border-t border-slate-200/80 grid grid-cols-3 gap-2"
            >
              <div>
                <div className="flex items-center gap-1 text-lg font-serif text-slate-900 font-semibold">
                  <span>30+</span>
                  <Globe2 size={13} className="text-emerald-700" />
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Countries</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-lg font-serif text-slate-900 font-semibold">
                  <span>100%</span>
                  <ShieldCheck size={13} className="text-emerald-700" />
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Goal-Aligned</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-lg font-serif text-slate-900 font-semibold">
                  <span>20+ Yrs</span>
                  <Award size={13} className="text-emerald-700" />
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Experience</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Compact Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-2xl p-2 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/10 group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 max-h-[380px]">
                <img
                  src="/hero.png"
                  alt="Financial advisor planning wealth growth"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Contrast Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute top-3 left-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium">
                    <Sparkles size={11} className="text-emerald-400" />
                    <span>Daisen Advisory</span>
                  </div>
                </div>

                {/* Overlaid Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-emerald-400 text-[9px] font-semibold uppercase tracking-wider">
                    Personalized Wealth Guidance
                  </span>
                  <h3 className="text-sm sm:text-base font-serif font-medium text-white leading-tight">
                    Building multigenerational prosperity with clarity.
                  </h3>
                </div>
              </div>

              {/* Compact Floating Allocation Badge */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden xl:block absolute -top-4 -right-4 w-56 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-xl p-3 shadow-lg z-20"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <PieChart size={13} className="text-emerald-700" />
                    <span className="text-[11px] font-semibold text-slate-900">Allocation</span>
                  </div>

                  <div className="flex bg-slate-100 p-0.5 rounded text-[9px]">
                    <button
                      onClick={() => setActiveTab("growth")}
                      className={`px-1.5 py-0.5 rounded ${
                        activeTab === "growth" ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-500"
                      }`}
                    >
                      Growth
                    </button>
                    <button
                      onClick={() => setActiveTab("balanced")}
                      className={`px-1.5 py-0.5 rounded ${
                        activeTab === "balanced" ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-500"
                      }`}
                    >
                      Balanced
                    </button>
                  </div>
                </div>

                <div className="mt-2 space-y-1.5">
                  {allocations[activeTab].map((item, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex justify-between text-[10px] font-medium text-slate-700">
                        <span>{item.label}</span>
                        <span className="font-semibold">{item.pct}</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: item.pct }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* YouTube Banner Bar */}
              <motion.a
                href="https://www.youtube.com/@daisenjoseph"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                whileHover={{ scale: 1.01 }}
                className="mt-2 block group rounded-xl bg-slate-900 p-2.5 sm:p-3 text-white shadow-md border border-slate-800"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                      <FaYoutube size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                        <span>Daisen Joseph on YouTube</span>
                        <ArrowUpRight size={11} className="opacity-70" />
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        Market Insights & Mutual Fund Education
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-[10px] font-medium text-slate-300 shrink-0">
                    <Users size={10} className="text-red-400" />
                    <span>Watch</span>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Glow Accents */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-200/40 rounded-full blur-2xl pointer-events-none -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}