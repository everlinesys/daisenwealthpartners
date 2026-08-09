import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Globe2,
  PieChart,
  ShieldCheck,
  ArrowUpRight,
  Briefcase,
  Users,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Goal-Based Mutual Fund Planning",
      subtitle: "Milestone Focused",
      description:
        "Structured investment strategies tailored specifically to life milestones like retirement, children's higher education, or wealth accumulation.",
      icon: Target,
      tag: "Core Advisory",
    },
    {
      id: "02",
      title: "Global & NRI Wealth Solutions",
      subtitle: "Cross-Border Wealth",
      description:
        "Specialized advisory for Non-Resident Indians (NRIs) navigating Indian markets with tax efficiency and regulatory compliance across borders.",
      icon: Globe2,
      tag: "NRI Specialization",
    },
    {
      id: "03",
      title: "Portfolio Review & Rebalancing",
      subtitle: "Disciplined Execution",
      description:
        "Comprehensive health checkups of existing mutual fund portfolios to eliminate overlap, optimize asset allocation, and manage market risk.",
      icon: PieChart,
      tag: "Risk Management",
    },
    {
      id: "04",
      title: "Systematic Investment Strategies",
      subtitle: "SIP / SWP / STP Execution",
      description:
        "Automated cash-flow strategies designed for systematic wealth creation or recurring retirement income with tax-conscious withdrawal plans.",
      icon: TrendingUp,
      tag: "Cash Flow Strategy",
    },
    {
      id: "05",
      title: "HNI & Family Office Consulting",
      subtitle: "Bespoke Portfolios",
      description:
        "Personalized multi-asset portfolio advisory for high-net-worth families seeking intergenerational wealth preservation and growth.",
      icon: Briefcase,
      tag: "HNI Advisory",
    },
    {
      id: "06",
      title: "Investor Guidance & Support",
      subtitle: "Ongoing Mentorship",
      description:
        "Continuous 1-on-1 portfolio tracking, market insights, and behavioral guidance during turbulent market cycles to keep you on track.",
      icon: ShieldCheck,
      tag: "Dedicated Support",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative bg-[#FDFBF7] py-24 lg:py-32 overflow-hidden selection:bg-emerald-800 selection:text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-emerald-900/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-900/5 blur-[140px] pointer-events-none" />

      {/* Subtle Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
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
                Services & Capabilities
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-[1.12] font-semibold tracking-tight">
              Advisory built on{" "}
              <span className="italic text-emerald-800 font-normal">
                discipline
              </span>
              , aligned with your life.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-slate-600 text-base lg:text-lg max-w-md font-light leading-relaxed"
          >
            We don't offer cookie-cutter mutual fund lists. Every strategy is engineered around your specific risk appetite, timelines, and financial goals.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative rounded-3xl bg-white p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Tag & Number */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <span className="px-3 py-1 rounded-full bg-slate-100 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-800 text-xs font-semibold tracking-wider transition-colors">
                      {item.tag}
                    </span>
                    <span className="font-serif text-lg font-light text-slate-300 group-hover:text-emerald-800 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Icon & Titles */}
                  <div className="mt-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-900/5 border border-emerald-900/10 flex items-center justify-center text-emerald-800 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                      <Icon size={22} />
                    </div>

                    <p className="mt-5 text-xs font-semibold text-emerald-800 uppercase tracking-widest">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-1 text-2xl font-serif font-semibold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-600 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Interactive Action Link */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800 group-hover:text-emerald-800 transition-colors">
                  <span>Learn More</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-emerald-800 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 lg:mt-20 rounded-3xl bg-slate-900 p-8 lg:p-12 text-white relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          {/* Subtle Ambient Glow inside Banner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">
              Ready to Start?
            </span>
            <h3 className="mt-2 text-3xl md:text-4xl font-serif font-medium leading-tight">
              Let's craft a mutual fund portfolio around your life goals.
            </h3>
            <p className="mt-3 text-slate-300 font-light text-sm md:text-base">
              Schedule a one-on-one discovery session to review your current financial plan and map out structured growth.
            </p>
          </div>

          <a
            href="/contact"
            className="relative z-10 shrink-0 inline-flex items-center gap-3 bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-xl shadow-emerald-950/40"
          >
            <span>Book Free Consultation</span>
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}