import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Features from "../components/Features";
import CTA from "../components/CTA";
import { motion } from "framer-motion";
import {
  Compass,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const corePillars = [
    {
      icon: Compass,
      title: "Goal-Driven Roadmap",
      description:
        "Every portfolio begins with clear life objectives—from wealth accumulation to retirement and cross-border legacy planning.",
    },
    {
      icon: TrendingUp,
      title: "Disciplined Allocation",
      description:
        "Multi-asset mutual fund strategies structured to weather market cycles without emotional decision-making.",
    },
    {
      icon: ShieldCheck,
      title: "Fiduciary Standards",
      description:
        "AMFI-registered advisory delivering transparent, objective guidance tailored exclusively for HNIs and families.",
    },
  ];

  return (
    <main className="bg-[#FDFBF7] text-[#071A2B] selection:bg-emerald-800 selection:text-white">
      {/* Hero Section */}
      <Hero />

      {/* About Us Overview */}
      <AboutUs />

      {/* Primary Services Capabilities */}
      <Services />

      {/* Feature Highlights & Value Proposition */}
      <Features />

      {/* REDESIGNED SECTION: Brand Philosophy & Core Pillars */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden border-t border-slate-100">
        {/* Ambient Subtle Gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-900/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-900/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-0.5 w-8 bg-[#C9A86A]" />
                <span className="text-[#C9A86A] uppercase tracking-[0.2em] text-xs font-semibold">
                  Daisen Wealth Partners
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#071A2B] leading-[1.12] font-semibold tracking-tight">
                Wealth planning built around{" "}
                <span className="italic text-emerald-800 font-normal">
                  your goals.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-slate-600 text-base lg:text-lg max-w-md font-light leading-relaxed"
            >
              We replace market speculation with structured, goal-aligned asset allocations—providing long-term confidence for families and global investors.
            </motion.p>
          </div>

          {/* Core Philosophy Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group p-8 rounded-3xl bg-[#FDFBF7] border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#071A2B]/5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-900/5 border border-emerald-900/10 flex items-center justify-center text-emerald-800 group-hover:bg-[#071A2B] group-hover:text-white transition-all duration-300 mb-6">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-[#071A2B] mb-3 group-hover:text-emerald-900 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-[#071A2B]">
                    <span>Learn Approach</span>
                    <ArrowUpRight
                      size={14}
                      className="text-emerald-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA Section */}
      <CTA />
    </main>
  );
}