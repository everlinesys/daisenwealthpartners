export default function Services() {
  return (
    <section className="pt-40 pb-24 min-h-screen bg-[#071A2B] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-[#C9A86A] uppercase tracking-[0.2em] text-sm">
          Our Services
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-serif">
          Financial solutions built around your goals.
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {[
            "Mutual Fund Investments",
            "Insurance Solutions",
            "Goal-Based Financial Planning",
            "Retirement Planning",
            "NRI Investment Planning",
            "Wealth Creation Planning",
          ].map((service) => (
            <div
              key={service}
              className="border border-white/10 rounded-2xl p-8 hover:border-[#C9A86A]/50 transition"
            >
              <h3 className="text-xl font-serif">
                {service}
              </h3>

              <p className="mt-4 text-white/50 text-sm leading-6">
                Personalized guidance designed around your financial goals
                and long-term investment journey.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}