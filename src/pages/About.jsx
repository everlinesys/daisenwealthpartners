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
          viewport={{ once: true, amount: 0.1 }}
          variants={reveal}
          className="max-w-3xl mb-16 lg:mb-20 text-slate-900"
        >
          {/* Header Badge */}
          <div className="flex items-center gap-3 mb-5">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 36 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-0.5 bg-emerald-700 block"
            />
            <span className="text-emerald-800 text-xs font-semibold tracking-widest uppercase">
              About Daisen Wealth Partners
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] font-semibold tracking-tight">
            Helping Investors Understand{" "}
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="block text-emerald-800 italic font-normal"
            >
              Mutual Funds Better.
            </motion.span>
          </h2>

          {/* Introduction */}
          <p className="mt-6 text-slate-600 text-lg leading-relaxed font-light">
            At Daisen Wealth Partners, we believe successful investing is not about
            chasing market trends. It is about understanding your goals, investing
            with discipline, and staying focused on the long term.
          </p>

          <p className="mt-4 text-slate-600 text-lg leading-relaxed font-light">
            We help individuals, families and NRIs understand mutual funds and make
            informed investment decisions through goal-oriented mutual fund
            investment support.
          </p>

          {/* Our Philosophy */}
          <div className="mt-10">
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              Our Philosophy
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 font-light text-base">
              {[
                "Goal-Oriented Investing",
                "Long-Term Investing",
                "Investor Education",
                "Transparency & Integrity",
                "Continuous Investor Support",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Serving Investors Worldwide */}
          <div className="mt-10">
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-3">
              Serving Investors Worldwide
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              We support investors across 30+ countries, including a growing
              community of NRI investors.
            </p>
            <p className="mt-3 text-slate-600 text-lg leading-relaxed font-light">
              Whether you are in India or abroad, our focus is to make mutual fund
              investing easier to understand and simpler to manage.
            </p>
          </div>

          {/* Beyond Investments */}
          <div className="mt-10">
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-3">
              Beyond Investments
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              We believe investor education is an important part of successful
              investing.
            </p>
            <p className="mt-3 text-slate-600 text-lg leading-relaxed font-light">
              Through the Daisen Joseph YouTube Channel and Daisen Academy, we share
              educational content on mutual funds, SIPs, SWPs, retirement income,
              taxation, market behaviour and investor awareness.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-2">
                Our Mission
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                To help individuals, families and NRIs understand mutual funds and
                invest towards their goals through disciplined investing, investor
                education and trusted distribution support.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-2">
                Our Vision
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                To become a trusted and respected mutual fund distribution firm,
                known for integrity, transparency, investor education and long-term
                client relationships.
              </p>
            </div>
          </div>

          {/* Call To Action */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-3">
              Let's Work Towards Your Investment Goals
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              Whether you are starting your first SIP or looking to organise your
              existing mutual fund investments, Daisen Wealth Partners is here to
              support you throughout your investment journey.
            </p>
          </div>
        </motion.div>

        {/* Main Grid Content */}
        {/* Main Grid Content */}
        <div className="mt-20">

          {/* Hero Image + Intro */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

            {/* Left Intro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              <motion.p
                variants={reveal}
                className="text-emerald-800 text-xs font-semibold tracking-widest uppercase"
              >
                Our Approach
              </motion.p>

              <motion.h3
                variants={reveal}
                className="mt-3 text-3xl md:text-4xl font-serif text-slate-900 font-semibold"
              >
                Understand. Discuss. Invest. Review.
              </motion.h3>

              <motion.p
                variants={reveal}
                className="mt-5 text-slate-600 text-lg leading-relaxed font-light"
              >
                We believe every investor is different. Investment goals, time
                horizons, financial requirements and risk considerations can vary
                from one person to another.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 text-slate-600 text-lg leading-relaxed font-light"
              >
                Our approach is simple and focused on understanding your needs,
                discussing suitable options, investing with clarity and reviewing
                your journey over time.
              </motion.p>
            </motion.div>


            {/* Hero Image - Top Right */}
            <motion.div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative perspective-[1200px]"
            >
              <motion.div
                style={{
                  rotateX: imageRotateX,
                  rotateY: imageRotateY,
                }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-emerald-900/5 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-xl">
                  <motion.img
                    src={"about.png"}
                    alt="Daisen Wealth Partners"
                    className="w-full h-full] lg:h-[500px] object-cover"
                    style={{
                      scale: 1.03,
                    }}
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/50">
                      <span className="h-2 w-2 rounded-full bg-emerald-700" />
                      <span className="text-xs font-semibold tracking-wide text-slate-800">
                        Investing with Purpose. Building a Financial Future.
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>


          {/* Approach Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              ["01", "Understand"],
              ["02", "Discuss"],
              ["03", "Invest"],
              ["04", "Review"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="p-5 rounded-2xl bg-white border border-slate-200/80"
              >
                <span className="text-xs font-semibold text-emerald-700">
                  {number}
                </span>

                <h4 className="mt-2 font-serif text-xl font-semibold text-slate-900">
                  {title}
                </h4>
              </div>
            ))}
          </motion.div>


          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mt-6 text-slate-600 text-lg leading-relaxed font-light"
          >
            We encourage investors to understand their investments clearly, make
            informed decisions and remain disciplined through different market
            conditions.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mt-4 text-slate-600 text-lg leading-relaxed font-light"
          >
            Our focus is on building a long-term relationship with investors
            through clear communication, investor education and consistent support.
          </motion.p>


          {/* Who We Serve */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mt-12"
          >
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              Who We Serve
            </h3>

            <ul className="grid sm:grid-cols-2 gap-3 text-slate-600 font-light">
              {[
                "Individuals starting their investment journey",
                "Families investing towards long-term goals",
                "NRIs investing in Indian mutual funds",
                "Investors building disciplined SIP portfolios",
                "Investors making lump-sum investments",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 block mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-slate-600 leading-relaxed font-light">
              Our aim is to make investing simple, transparent and easy to
              understand for every investor.
            </p>
          </motion.div>


          {/* How We Support Investors */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mt-12"
          >
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              How We Support Investors
            </h3>

            <p className="text-slate-600 leading-relaxed font-light">
              We provide support across various mutual fund investment and service
              requirements, including:
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mt-5 text-slate-600 font-light">
              {[
                "SIP Investments",
                "Lump-sum Investments",
                "Systematic Transfer Plans (STP)",
                "Systematic Withdrawal Plans (SWP)",
                "Mutual fund transactions and service requests",
                "Portfolio-related support",
                "NRI mutual fund investment support",
                "Investor education and awareness",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 block mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-slate-600 leading-relaxed font-light">
              Along with mutual fund services, we also provide Life Insurance and
              Health Insurance services, helping individuals and families understand
              the importance of financial protection alongside long-term investing.
            </p>
          </motion.div>


          {/* Investment & Protection */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mt-12"
          >
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              Investment & Protection
            </h3>

            <p className="text-slate-600 leading-relaxed font-light">
              We believe a strong financial foundation is built through both
              long-term investing and adequate financial protection.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed font-light">
              Mutual funds can help investors work towards their long-term
              investment goals, while life and health insurance can provide
              financial protection against important life and health-related
              uncertainties.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed font-light">
              Our aim is to help investors understand the importance of both
              investment and protection, and make informed decisions based on
              their individual needs.
            </p>
          </motion.div>


          {/* Our Commitment */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mt-12"
          >
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              Our Commitment
            </h3>

            <p className="text-slate-600 leading-relaxed font-light">
              We believe meaningful investor relationships are built on trust,
              transparency and consistent support.
            </p>

            <p className="mt-5 text-slate-600 leading-relaxed font-light">
              We are committed to:
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mt-4 text-slate-600 font-light">
              {[
                "Clear and simple communication",
                "Easy-to-understand investor education",
                "Timely service and transaction support",
                "Regular investor communication",
                "Ongoing support for our clients",
                "Responsible and transparent service",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 block mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-slate-600 leading-relaxed font-light">
              We believe our role goes beyond helping investors start an
              investment. We aim to support them throughout their investment
              journey with education, service and long-term relationship.
            </p>
          </motion.div>


          {/* Closing Statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mt-10 pt-8 border-t border-slate-200"
          >
            <p className="text-2xl md:text-3xl font-serif text-slate-900">
              Understand better. Invest with discipline. Stay focused on your goals.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}