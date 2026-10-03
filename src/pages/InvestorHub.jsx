
import {
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  Calculator,
  FileText,
  ShieldCheck,
  Wallet,
  Globe2,
} from "lucide-react";

const investorLinks = [
  {
    title: "MFCentral",
    description:
      "Access your mutual fund portfolio, view holdings, manage service requests, and access investor services through one unified platform.",
    category: "Investor Services",
    icon: Wallet,
    href: "https://app.mfcentral.com/investor/signin",
    action: "Visit MFCentral",
  },
  {
    title: "MFU India",
    description:
      "Explore the Mutual Fund Utilities platform and access investor-related mutual fund services and resources.",
    category: "Mutual Fund Utilities",
    icon: Globe2,
    href: "https://www.mfuindia.com/",
    action: "Visit MFU India",
  },
  {
    title: "CAMS – Investor Services",
    description:
      "Access investor services and mutual fund information through CAMS Online.",
    category: "Investor Services",
    icon: Wallet,
    href: "https://www.camsonline.com/",
    action: "Visit CAMS Online",
  },
  {
    title: "KFintech – Investor Services",
    description:
      "Access investor support, service information, and resources from KFintech.",
    category: "Investor Services",
    icon: ShieldCheck,
    href: "https://investor.kfintech.com/",
    action: "Visit KFintech",
  },
  {
    title: "KFintech MFS",
    description:
      "Access KFintech's mutual fund investor services and customer support portal.",
    category: "Mutual Fund Services",
    icon: Globe2,
    href: "https://mfs.kfintech.com/mfs/InvestorServices/InvCustomerCare.aspx?frm=iC",
    action: "Visit KFintech MFS",
  },
  {
    title: "AMFI – Association of Mutual Funds in India",
    description:
      "Explore investor education, mutual fund information, tools, and industry resources from AMFI.",
    category: "Investor Education",
    icon: BookOpen,
    href: "https://www.amfiindia.com/",
    action: "Visit AMFI India",
  },
];

const resources = [
  {
    title: "Mutual Fund Basics",
    description:
      "Understand mutual funds, SIPs, lumpsum investments, risk, diversification, and long-term investing principles.",
    icon: BookOpen,
  },
  {
    title: "Investment Planning",
    description:
      "Learn how goals, time horizon, risk profile, and investment discipline can shape a long-term investment strategy.",
    icon: FileText,
  },
  {
    title: "Calculators & Tools",
    description:
      "Use practical calculators to explore SIP and lumpsum scenarios and understand how regular investing can work over time.",
    icon: Calculator,
  },
  {
    title: "Investor Awareness",
    description:
      "Build stronger financial awareness by understanding documentation, disclosures, risks, and the importance of informed decisions.",
    icon: ShieldCheck,
  },
];

export default function InvestorHub() {
  return (
    <section className="pt-32 md:pt-40 pb-24 min-h-screen bg-[#F0EDE5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================================
            HERO
        ========================================== */}
        <div className="max-w-4xl">

          <p className="text-[#C9A86A] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
            Investor Hub
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-serif text-[#071A2B] leading-[1.05]">
            Learn.
            <br />
            Invest.
            <br />
            <span className="italic text-[#C9A86A]">
              Grow.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-[#071A2B]/60 leading-8">
            Financial literacy is at the heart of what we do. Explore
            practical resources, investor platforms, and educational
            information designed to help you understand your investments
            and make informed financial decisions.
          </p>

        </div>


        {/* =========================================
            QUICK ACCESS
        ========================================== */}
        <div className="mt-16">

          <div className="flex items-end justify-between gap-6 mb-7">
            <div>
              <p className="text-[#C9A86A] uppercase tracking-[0.18em] text-xs font-semibold">
                Quick Access
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-serif text-[#071A2B]">
                Investor Platforms
              </h2>
            </div>

            <p className="hidden md:block text-sm text-[#071A2B]/50 max-w-sm text-right">
              Access established platforms for managing and viewing your
              mutual fund investments.
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-6">

            {investorLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-[#071A2B] p-7 md:p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >

                  {/* Decorative glow */}
                  <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#C9A86A]/10 blur-3xl group-hover:bg-[#C9A86A]/20 transition" />

                  <div className="relative">

                    <div className="flex items-start justify-between">

                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                        <Icon
                          size={21}
                          className="text-[#C9A86A]"
                        />
                      </div>

                      <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-[#C9A86A] group-hover:border-[#C9A86A] transition-all">
                        <ExternalLink
                          size={16}
                          className="text-white group-hover:text-[#071A2B] transition"
                        />
                      </div>

                    </div>

                    <p className="mt-7 text-[10px] uppercase tracking-[0.18em] text-[#C9A86A] font-semibold">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-serif">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/60 max-w-lg">
                      {item.description}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#C9A86A] transition">
                      <span>{item.action}</span>
                      <ArrowUpRight size={16} />
                    </div>

                  </div>
                </a>
              );
            })}

          </div>

        </div>


        {/* =========================================
            EDUCATIONAL RESOURCES
        ========================================== */}
        <div className="mt-24">

          <div className="max-w-2xl">

            <p className="text-[#C9A86A] uppercase tracking-[0.18em] text-xs font-semibold">
              Education
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-serif text-[#071A2B]">
              Build your investment knowledge.
            </h2>

            <p className="mt-5 text-[#071A2B]/55 leading-7">
              Investing becomes easier to understand when you have a clear
              grasp of the fundamentals. Explore the areas below to strengthen
              your financial knowledge.
            </p>

          </div>


          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <div
                  key={resource.title}
                  className="group bg-white/60 border border-[#071A2B]/10 rounded-2xl p-6 hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >

                  <div className="w-11 h-11 rounded-xl bg-[#071A2B] flex items-center justify-center">
                    <Icon
                      size={19}
                      className="text-[#C9A86A]"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-serif text-[#071A2B]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#071A2B]/55">
                    {resource.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>


        {/* =========================================
            INVESTOR TOOLS
        ========================================== */}
        <div className="mt-24">

          <div className="rounded-3xl bg-[#071A2B] overflow-hidden relative">

            {/* Background decoration */}
            <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-[#C9A86A]/10 blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 p-8 md:p-12 lg:p-14">

              <div>

                <p className="text-[#C9A86A] uppercase tracking-[0.18em] text-xs font-semibold">
                  Planning Tools
                </p>

                <h2 className="mt-4 text-3xl md:text-4xl font-serif text-white">
                  Turn financial goals into numbers.
                </h2>

                <p className="mt-5 max-w-xl text-sm md:text-base leading-7 text-white/60">
                  Use investment calculators to explore different
                  contribution amounts, time horizons, and potential
                  scenarios. These tools are intended for educational and
                  planning purposes.
                </p>

                <a
                  href="/planning-tools"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C9A86A] px-6 py-3.5 text-sm font-semibold text-[#071A2B] hover:bg-[#d8ba7d] transition"
                >
                  <span>Explore Calculators</span>
                  <ArrowUpRight size={17} />
                </a>

              </div>


              <div className="flex items-center justify-center">

                <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-7">

                  <Calculator
                    size={30}
                    className="text-[#C9A86A]"
                  />

                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/40">
                    Available Tools
                  </p>

                  <div className="mt-4 space-y-3">

                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-sm text-white/70">
                        SIP Calculator
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="text-[#C9A86A]"
                      />
                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-sm text-white/70">
                        Smart SIP Calculator
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="text-[#C9A86A]"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">
                        Lumpsum Calculator
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="text-[#C9A86A]"
                      />
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            IMPORTANT INVESTOR NOTE
        ========================================== */}
        <div className="mt-16 flex gap-4 rounded-2xl border border-[#071A2B]/10 bg-white/40 p-6">

          <div className="shrink-0 w-10 h-10 rounded-xl bg-[#071A2B] flex items-center justify-center">
            <ShieldCheck
              size={18}
              className="text-[#C9A86A]"
            />
          </div>

          <div>

            <h3 className="text-sm font-semibold text-[#071A2B]">
              Make informed investment decisions
            </h3>

            <p className="mt-2 text-xs md:text-sm leading-6 text-[#071A2B]/55">
              Mutual fund investments are subject to market risks. Read all
              scheme-related documents carefully before investing. Past
              performance is not an indicator of future returns. The resources
              provided here are intended to support investor education and
              should not be treated as a guarantee of returns.
            </p>

          </div>

        </div>


        {/* =========================================
            FINAL CTA
        ========================================== */}
        <div className="mt-20 text-center">

          <p className="text-[#C9A86A] uppercase tracking-[0.18em] text-xs font-semibold">
            Need Guidance?
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-[#071A2B]">
            Have questions about your investment journey?
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-[#071A2B]/55 leading-7">
            If you would like to discuss your goals, investment horizon, or
            financial planning needs, connect with Daisen Wealth Partners.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <a
              href="https://wa.me/918301808509"
              className="inline-flex items-center gap-2 rounded-xl bg-[#071A2B] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#102c42] transition"
            >
              <span>Contact Us</span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://wa.me/918301808509"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#071A2B]/15 bg-white/50 px-6 py-3.5 text-sm font-semibold text-[#071A2B] hover:bg-white transition"
            >
              <span>WhatsApp Us</span>
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

