import { useRef } from "react";
import { ArrowUpRight, Award, Globe2, Target, ShieldCheck } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import founderImage from "/founder.png";

export default function AboutUs() {
  const imageRef = useRef(null);

  // 3D Parallax Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const imageRotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const imageRotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const reveal = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative bg-[#FDFBF7] py-24 lg:py-32 overflow-hidden selection:bg-emerald-800 selection:text-white">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] rounded-full bg-slate-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
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
              About Daisen Wealth Partners
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] font-semibold tracking-tight">
            Wealth planning built around{" "}
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="block text-emerald-800 italic font-normal"
            >
              your goals.
            </motion.span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed font-light">
            We believe successful investing isn't about chasing short-term market trends. It's about understanding your life milestones and executing a disciplined, strategy-led investment plan.
          </p>
        </motion.div>

        {/* Main Grid Content */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Founder Image Column */}
          <motion.div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-[1200px]"
          >
            {/* Animated Decorative Accent Frame */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-full h-full border border-emerald-800/20 rounded-[2.5rem]"
            />

            {/* Photo Card with 3D Tilt */}
            <motion.div
              style={{
                rotateX: imageRotateX,
                rotateY: imageRotateY,
              }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-xl border border-slate-900/10"
            >
              <motion.img
                src={founderImage}
                alt="Daisen Joseph - Founder and Managing Consultant"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03 }}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="absolute bottom-0 left-0 right-0 p-8"
              >
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Founder & Managing Consultant
                </p>
                <h3 className="mt-1 text-3xl font-serif text-white font-medium">
                  Daisen Joseph
                </h3>
              </motion.div>
            </motion.div>

            {/* Floating Global Reach Metric Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              animate={{ y: [0, -8, 0] }}
              className="absolute -bottom-6 -right-4 lg:-right-6 bg-white rounded-2xl shadow-xl p-5 w-56 border border-slate-200/80"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800">
                <Globe2 size={20} />
              </div>
              <div className="mt-3 text-2xl font-serif font-bold text-slate-900">
                20+ Countries
              </div>
              <p className="mt-1 text-xs text-slate-500 leading-normal font-medium">
                Investors served across domestic and NRI communities worldwide
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content & Credentials Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              variants={reveal}
              className="text-emerald-800 text-xs font-semibold tracking-widest uppercase"
            >
              Meet the Founder
            </motion.p>

            <motion.h3
              variants={reveal}
              className="mt-3 text-3xl md:text-4xl font-serif text-slate-900 font-semibold"
            >
              Daisen Joseph
            </motion.h3>

            <motion.p variants={reveal} className="mt-1 text-slate-500 text-sm">
              Founder & Managing Consultant
            </motion.p>

            {/* Credential Badge */}
            <motion.div
              variants={reveal}
              whileHover={{ y: -2 }}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-900/5 text-xs text-slate-800 font-medium border border-emerald-900/10"
            >
              <Award size={16} className="text-emerald-700 shrink-0" />
              <span>M.Com (Finance & Marketing) | NISM Certified</span>
            </motion.div>

            {/* Description Narrative */}
            <motion.div
              variants={reveal}
              className="mt-6 space-y-4 text-slate-600 leading-relaxed text-sm lg:text-base font-light"
            >
              <p>
                Daisen Joseph is the Founder & Managing Consultant of Daisen Wealth Partners. With a Master's degree in Commerce specializing in Finance & Marketing and NISM certification, he helps investors navigate mutual funds with clarity and discipline.
              </p>
              <p>
                His approach centers around long-term wealth accumulation tailored to specific life objectives, eliminating market noise and impulsive portfolio decisions.
              </p>
              <p>
                At Daisen Wealth Partners, every investment conversation begins by understanding your unique financial timeline, risk appetite, and strategic priorities.
              </p>
            </motion.div>

            {/* Value Cards */}
            <motion.div
              variants={reveal}
              className="grid sm:grid-cols-2 gap-4 mt-8"
            >
              {/* Card 1 */}
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 15px 35px rgba(15, 23, 42, 0.06)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                  <Target size={18} />
                </div>
                <h4 className="mt-3 font-semibold text-slate-900 text-sm">
                  Goal-Based Investing
                </h4>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Portfolios constructed directly around your key financial milestones.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 15px 35px rgba(15, 23, 42, 0.06)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-950 flex items-center justify-center text-white">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="mt-3 font-semibold text-slate-900 text-sm">
                  Investor-First Guidance
                </h4>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Transparent advice focused on sustainable long-term wealth growth.
                </p>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={reveal}
              href="/about"
              whileHover="hover"
              className="inline-flex items-center gap-3 mt-8 text-slate-900 font-semibold text-sm group"
            >
              <span>Discover Our Story</span>
              <motion.span
                variants={{
                  hover: {
                    backgroundColor: "#0F172A",
                    color: "#FFFFFF",
                    rotate: 45,
                  },
                }}
                className="w-9 h-9 rounded-xl border border-slate-300 flex items-center justify-center text-slate-800 transition-colors"
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}