import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Globe2,
  Sliders,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Eye,
} from "lucide-react";

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      icon: Sliders,
      title: "Goal-Oriented Planning",
      badge: "Milestone Focused",
      headline: "Portfolios engineered around life timelines, not market speculation.",
      description:
        "Every investment recommendation begins with a clear understanding of your financial milestones—whether funding higher education, securing retirement income, or purchasing property.",
      highlights: [
        "Custom risk profiling matched to your exact timeline",
        "Asset allocation strategies aligned with personal goals",
        "Elimination of irrational market timing and short-term noise",
      ],
      metric: "100%",
      metricLabel: "Goal-aligned custom portfolios",
    },
    {
      icon: ShieldCheck,
      title: "Disciplined Rebalancing",
      badge: "Risk Mitigation",
      headline: "Structured portfolio reviews to lock in gains and limit drawdowns.",
      description:
        "Market volatility is natural. Our systematic rebalancing model ensures your asset distribution remains strictly aligned with your target risk profile across changing market cycles.",
      highlights: [
        "Quarterly portfolio health checkups and drift analysis",
        "Tax-aware rebalancing strategies to maximize net returns",
        "Automated risk adjustments during market highs and lows",
      ],
      metric: "Periodic",
      metricLabel: "Systematic portfolio rebalancing",
    },
    {
      icon: Globe2,
      title: "Global NRI Advisory",
      badge: "Cross-Border Wealth",
      headline: "Seamless mutual fund investing for non-resident Indians worldwide.",
      description:
        "Navigating Indian markets from abroad requires specialized expertise in NRI taxation, compliance regulations, and repatriation rules. We simplify cross-border investing.",
      highlights: [
        "NRE & NRO account strategy and portfolio setup",
        "Full compliance with FEMA and international tax norms",
        "Servicing clients across 20+ countries seamlessly",
      ],
      metric: "20+",
      metricLabel: "Countries with active NRI investors",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      badge: "Investor First",
      headline: "Zero hidden agendas with clear, objective portfolio reporting.",
      description:
        "We prioritize total clarity. Access transparent progress reports, straightforward fund analysis, and regular performance reviews designed to keep you informed.",
      highlights: [
        "Clear, easy-to-read consolidated performance views",
        "AMFI registered and fully compliant distribution",
        "Direct line of communication with founder & advisors",
      ],
      metric: "24/7",
      metricLabel: "Digital access to portfolio metrics",
    },
  ];

  const gridFeatures = [
    {
      icon: TrendingUp,
      title: "Data-Driven Selection",
      description:
        "Fund selection based on multi-factor quantitative and qualitative screening rather than star ratings alone.",
    },
    {
      icon: Lock,
      title: "Institutional Security",
      description:
        "Direct integration with licensed mutual fund platforms ensures direct, secure execution of every transaction.",
    },
    {
      icon: ShieldCheck,
      title: "Behavioral Coaching",
      description:
        "Guidance through market turmoil to prevent panic selling and maintain focus on long-term compound growth.",
    },
  ];

  return (
    <section className="relative bg-[#FDFBF7] py-24 lg:py-32 overflow-hidden selection:bg-emerald-800 selection:text-white">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-emerald-900/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-100px] w-[500px] h-[500px] rounded-full bg-slate-900/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 36 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-0.5 bg-emerald-700"
            />
            <span className="text-emerald-800 text-xs font-semibold tracking-widest uppercase">
              Why Daisen Wealth
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] font-semibold tracking-tight">
            Designed for stability,{" "}
            <span className="block text-emerald-800 italic font-normal">
              executed with precision.
            </span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed font-light">
            Our wealth management approach combines rigorous fund selection, disciplined risk controls, and personal advisory to help you build and preserve long-term capital.
          </p>
        </motion.div>

        {/* Interactive Feature Tabs Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24">
          {/* Tab Selection Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 relative overflow-hidden ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10"
                      : "bg-white text-slate-800 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl shrink-0 transition-colors ${
                      isActive
                        ? "bg-emerald-800 text-white"
                        : "bg-emerald-900/5 text-emerald-800"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider block mb-1 ${
                        isActive ? "text-emerald-400" : "text-emerald-800"
                      }`}
                    >
                      {pillar.badge}
                    </span>
                    <h3
                      className={`text-lg font-serif font-semibold ${
                        isActive ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Tab Display Area */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-900/5 relative overflow-hidden"
              >
                {/* Background Watermark Accent */}
                <div className="absolute -bottom-10 -right-10 text-slate-100 font-serif text-9xl font-bold select-none pointer-events-none opacity-60">
                  0{activeTab + 1}
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wider mb-6 border border-emerald-100">
                  {pillars[activeTab].badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold leading-snug">
                  {pillars[activeTab].headline}
                </h3>

                <p className="mt-4 text-slate-600 font-light leading-relaxed text-base sm:text-lg">
                  {pillars[activeTab].description}
                </p>

                <div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
                  {pillars[activeTab].highlights.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metric Box */}
                <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-serif font-bold text-slate-900">
                      {pillars[activeTab].metric}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {pillars[activeTab].metricLabel}
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 3-Column Supporting Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 pt-12 border-t border-slate-200/80"
        >
          {gridFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/5 border border-emerald-900/10 flex items-center justify-center text-emerald-800 mb-6">
                  <Icon size={22} />
                </div>
                <h4 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}