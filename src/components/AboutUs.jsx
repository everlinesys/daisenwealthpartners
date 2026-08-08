import { useRef } from "react";
import { ArrowUpRight, Award, Globe2, Target } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import founderImage from "/founder.png";

export default function AboutUs() {
  const imageRef = useRef(null);

  // Cursor movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const imageRotateX = useTransform(
    springY,
    [-0.5, 0.5],
    [4, -4]
  );

  const imageRotateY = useTransform(
    springX,
    [-0.5, 0.5],
    [-5, 5]
  );

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: 40,
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
      className="relative bg-[#F7F5F0] py-24 lg:py-32 overflow-hidden"
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A86A]/5 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] rounded-full bg-[#071A2B]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={reveal}
          className="max-w-3xl mb-16 lg:mb-20"
        >

          <div className="flex items-center gap-3 mb-5">

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="h-px bg-[#C9A86A]"
            />

            <span className="text-[#9A7941] text-xs uppercase tracking-[0.25em]">
              About Daisen Wealth Partners
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#071A2B] leading-[1.08]">

            Wealth planning built around

            <motion.span
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="block text-[#9A7941] italic"
            >
              your goals.
            </motion.span>

          </h2>

          <p className="mt-6 text-[#071A2B]/60 text-lg leading-8">
            We believe successful investing isn't about chasing market
            trends. It's about understanding where you want to go and
            building a disciplined investment strategy to help you get there.
          </p>

        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* =================================================
              FOUNDER IMAGE
          ================================================== */}

          <motion.div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative perspective-[1200px]"
          >

            {/* Decorative frame */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-5 -left-5 w-full h-full border border-[#C9A86A]/30 rounded-[2rem]"
            />

            {/* Image */}

            <motion.div
              style={{
                rotateX: imageRotateX,
                rotateY: imageRotateY,
              }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#D9D5CC] shadow-2xl"
            >

              <motion.img
                src={founderImage}
                alt="Daisen Joseph - Founder and Managing Consultant"
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.025,
                }}
                className="w-full h-full object-cover"
              />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/80 via-[#071A2B]/5 to-transparent pointer-events-none" />

              {/* Image caption */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                className="absolute bottom-0 left-0 right-0 p-7"
              >

                <p className="text-[#C9A86A] text-xs uppercase tracking-[0.2em]">
                  Founder & Managing Consultant
                </p>

                <h3 className="mt-2 text-3xl font-serif text-white">
                  Daisen Joseph
                </h3>

              </motion.div>

            </motion.div>

            {/* =================================================
                FLOATING COUNTRY CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              animate={{
                y: [0, -8, 0],
              }}
              className="absolute -bottom-7 -right-5 lg:-right-8 bg-white rounded-2xl shadow-xl p-5 w-52 border border-[#071A2B]/5"
            >

              <div className="w-10 h-10 rounded-full bg-[#C9A86A]/10 flex items-center justify-center">

                <Globe2
                  size={20}
                  className="text-[#9A7941]"
                />

              </div>

              <div className="mt-3 text-2xl font-serif text-[#071A2B]">
                20+
              </div>

              <p className="mt-1 text-xs text-[#071A2B]/50 leading-5">
                Countries served through our investor community
              </p>

            </motion.div>

          </motion.div>

          {/* =================================================
              FOUNDER CONTENT
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >

            <motion.p
              variants={reveal}
              className="text-[#9A7941] text-sm uppercase tracking-[0.2em]"
            >
              Meet the Founder
            </motion.p>

            <motion.h3
              variants={reveal}
              className="mt-4 text-4xl md:text-5xl font-serif text-[#071A2B]"
            >
              Daisen Joseph
            </motion.h3>

            <motion.p
              variants={reveal}
              className="mt-2 text-[#071A2B]/50"
            >
              Founder & Managing Consultant
            </motion.p>

            {/* Qualification */}

            <motion.div
              variants={reveal}
              whileHover={{
                y: -3,
              }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#071A2B]/5 text-xs text-[#071A2B]/70"
            >

              <Award
                size={15}
                className="text-[#9A7941]"
              />

              M.Com (Finance & Marketing) | NISM Certified

            </motion.div>

            {/* Description */}

            <motion.div
              variants={reveal}
              className="mt-8 space-y-5 text-[#071A2B]/60 leading-7"
            >

              <p>
                Daisen Joseph is the Founder & Managing Consultant of
                Daisen Wealth Partners. With a Master's degree in Commerce
                specializing in Finance & Marketing and NISM certification,
                he is committed to helping investors make informed financial
                decisions.
              </p>

              <p>
                His approach is centered around disciplined, goal-based
                investing rather than short-term market speculation.
              </p>

              <p>
                At Daisen Wealth Partners, every investment conversation
                begins with understanding the investor's goals, time horizon
                and financial priorities.
              </p>

            </motion.div>

            {/* =================================================
                PHILOSOPHY CARDS
            ================================================== */}

            <motion.div
              variants={reveal}
              className="grid sm:grid-cols-2 gap-4 mt-10"
            >

              {/* Card 1 */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow:
                    "0 20px 45px rgba(7,26,43,0.08)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="group p-5 rounded-2xl bg-white border border-[#071A2B]/8 cursor-default"
              >

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  className="w-10 h-10 rounded-full bg-[#C9A86A]/10 flex items-center justify-center"
                >

                  <Target
                    size={20}
                    className="text-[#9A7941]"
                  />

                </motion.div>

                <h4 className="mt-4 font-medium text-[#071A2B]">
                  Goal-Based Investing
                </h4>

                <p className="mt-2 text-sm text-[#071A2B]/50 leading-6">
                  Investments aligned with your real financial objectives.
                </p>

              </motion.div>

              {/* Card 2 */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow:
                    "0 20px 45px rgba(7,26,43,0.08)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="group p-5 rounded-2xl bg-white border border-[#071A2B]/8 cursor-default"
              >

                <motion.div
                  whileHover={{
                    rotate: -8,
                    scale: 1.1,
                  }}
                  className="w-10 h-10 rounded-full bg-[#C9A86A]/10 flex items-center justify-center"
                >

                  <Globe2
                    size={20}
                    className="text-[#9A7941]"
                  />

                </motion.div>

                <h4 className="mt-4 font-medium text-[#071A2B]">
                  Investor-First Approach
                </h4>

                <p className="mt-2 text-sm text-[#071A2B]/50 leading-6">
                  Personalized guidance and long-term investor support.
                </p>

              </motion.div>

            </motion.div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.a
              variants={reveal}
              href="/about"
              whileHover="hover"
              className="inline-flex items-center gap-3 mt-10 text-[#071A2B] font-medium group"
            >

              Discover Our Story

              <motion.span
                variants={{
                  hover: {
                    backgroundColor: "#071A2B",
                    color: "#FFFFFF",
                    rotate: 45,
                  },
                }}
                className="w-9 h-9 rounded-full border border-[#071A2B]/20 flex items-center justify-center transition-colors"
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