import { useRef } from "react";
import {
  ArrowUpRight,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);

  // Cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth cursor movement
  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  // Subtle 3D movement
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
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

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-[#071A2B]"
    >
      {/* =====================================================
          CURSOR FOLLOWING LIGHT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute z-0 hidden lg:block"
        style={{
          left: useTransform(
            springX,
            [-0.5, 0.5],
            ["15%", "85%"]
          ),
          top: useTransform(
            springY,
            [-0.5, 0.5],
            ["15%", "85%"]
          ),
        }}
      >
        <div className="w-[420px] h-[420px] rounded-full bg-[#C9A86A]/10 blur-[120px]" />
      </motion.div>

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#C9A86A]/5 blur-[100px]" />

        <div className="absolute bottom-[-300px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#163550]/40 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-32 lg:pt-40 pb-20">

        <div className="min-h-[calc(100vh-10rem)] grid lg:grid-cols-2 gap-16 items-center">

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative z-10">

            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-7"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-[#C9A86A]"
              />

              <span className="text-[#C9A86A] text-xs uppercase tracking-[0.25em]">
                Daisen Wealth Partners
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[78px] leading-[1.02] font-serif text-white"
            >

              <motion.span
                variants={fadeUp}
                className="block"
              >
                Invest with
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="block text-[#C9A86A] italic"
              >
                purpose.
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="block"
              >
                Grow with
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="block"
              >
                confidence.
              </motion.span>

            </motion.h1>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.35 }}
              className="mt-7 max-w-xl text-lg leading-8 text-white/60"
            >
              Helping Individuals, Families & NRIs Build Long-Term Wealth
              Through Goal-Based Mutual Fund Investing.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.45 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >

              {/* Primary */}
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 15px 40px rgba(201,168,106,0.18)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 bg-[#C9A86A] text-[#071A2B] px-7 py-4 rounded-full font-medium"
              >
                Start Your Investment Journey

                <span className="w-7 h-7 rounded-full bg-[#071A2B]/10 flex items-center justify-center group-hover:bg-[#071A2B] group-hover:text-white transition">
                  <ArrowUpRight size={15} />
                </span>
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="/investor-hub"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 border border-white/15 text-white px-7 py-4 rounded-full"
              >
                <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                  <Play size={13} fill="currentColor" />
                </span>

                Learn With Daisen
              </motion.a>

            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="mt-14 pt-7 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl"
            >

              <div>
                <div className="text-2xl font-serif text-white">
                  20+
                </div>

                <div className="mt-1 text-xs text-white/40">
                  Countries Served
                </div>
              </div>

              <div>
                <div className="text-2xl font-serif text-white">
                  Goal
                </div>

                <div className="mt-1 text-xs text-white/40">
                  Based Planning
                </div>
              </div>

              <div>
                <div className="text-2xl font-serif text-white">
                  Long
                </div>

                <div className="mt-1 text-xs text-white/40">
                  Term Approach
                </div>
              </div>

            </motion.div>

          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="relative hidden lg:flex justify-end">

            <motion.div
              style={{
                rotateX,
                rotateY,
              }}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[560px] aspect-[4/5]"
            >

              {/* Outer glow */}
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[#C9A86A]/5 blur-2xl" />

              {/* Main card */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#163550] via-[#0B2439] to-[#061522] shadow-2xl">

                {/* Decorative rings */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-28 -right-28 w-80 h-80 rounded-full border border-[#C9A86A]/20"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-10 right-10 w-44 h-44 rounded-full border border-[#C9A86A]/10"
                />

                {/* Small floating dots */}

                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute top-32 left-14 w-2 h-2 rounded-full bg-[#C9A86A]"
                />

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute top-52 right-20 w-1.5 h-1.5 rounded-full bg-[#C9A86A]"
                />

                {/* Top floating card */}

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 left-8 bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl p-5"
                >

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#C9A86A]/10 flex items-center justify-center">
                      <Sparkles
                        size={15}
                        className="text-[#C9A86A]"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40">
                        Wealth Strategy
                      </div>

                      <div className="text-sm text-white mt-1">
                        Think Beyond Today
                      </div>
                    </div>
                  </div>

                </motion.div>

                {/* Chart title */}

                <div className="absolute top-36 left-10">
                  <div className="text-xs text-white/35 uppercase tracking-widest">
                    Long-Term Growth
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-3xl font-serif text-white">
                      Wealth
                    </span>

                    <TrendingUp
                      size={20}
                      className="text-[#C9A86A]"
                    />
                  </div>
                </div>

                {/* Chart */}

                <div className="absolute left-8 right-8 bottom-28 h-56">

                  <svg
                    viewBox="0 0 500 220"
                    className="w-full h-full"
                    fill="none"
                  >

                    {/* Grid */}
                    {[50, 100, 150].map((y) => (
                      <line
                        key={y}
                        x1="10"
                        y1={y}
                        x2="490"
                        y2={y}
                        stroke="white"
                        strokeOpacity="0.05"
                      />
                    ))}

                    {/* Area */}
                    <motion.path
                      d="M10 190 C80 175 100 160 150 165 C200 170 205 125 260 135 C310 145 330 95 370 105 C415 115 420 55 490 20 L490 220 L10 220 Z"
                      fill="url(#chartGradient)"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 0.18,
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 1,
                      }}
                    />

                    {/* Main line */}
                    <motion.path
                      d="M10 190 C80 175 100 160 150 165 C200 170 205 125 260 135 C310 145 330 95 370 105 C415 115 420 55 490 20"
                      stroke="#C9A86A"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0,
                      }}
                      animate={{
                        pathLength: 1,
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.7,
                        ease: "easeInOut",
                      }}
                    />

                    {/* End point */}
                    <motion.circle
                      cx="490"
                      cy="20"
                      r="5"
                      fill="#C9A86A"
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: [0, 1.3, 1],
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 2.5,
                      }}
                    />

                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="250"
                        y1="20"
                        x2="250"
                        y2="220"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          stopColor="#C9A86A"
                          stopOpacity="0.8"
                        />

                        <stop
                          offset="1"
                          stopColor="#C9A86A"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                  </svg>

                </div>

                {/* Bottom philosophy card */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-7 left-7 right-7 bg-[#071A2B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-center justify-between"
                >

                  <div>

                    <div className="text-[10px] uppercase tracking-widest text-white/35">
                      Investment Philosophy
                    </div>

                    <div className="text-white mt-2 font-medium">
                      Discipline
                      <span className="text-[#C9A86A] mx-2">
                        •
                      </span>
                      Goals
                      <span className="text-[#C9A86A] mx-2">
                        •
                      </span>
                      Time
                    </div>

                  </div>

                  <motion.div
                    whileHover={{
                      rotate: 45,
                      scale: 1.1,
                    }}
                    className="w-11 h-11 rounded-full border border-[#C9A86A]/40 flex items-center justify-center"
                  >
                    <ArrowUpRight
                      size={18}
                      className="text-[#C9A86A]"
                    />
                  </motion.div>

                </motion.div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >

        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
          Scroll to explore
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="w-px h-10 bg-gradient-to-b from-[#C9A86A] to-transparent"
        />

      </motion.div>

    </section>
  );
}