export default function WealthInsights() {
  return (
    <section className="pt-40 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-[#C9A86A] uppercase tracking-[0.2em] text-sm">
          Wealth Insights
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-serif text-[#071A2B]">
          Knowledge for better financial decisions.
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {[
            "What is a Mutual Fund?",
            "Power of Compounding",
            "Common Investment Mistakes",
            "Types of Mutual Funds",
            "Financial Planning Concepts",
            "Market & Regulatory Updates",
          ].map((article) => (
            <article
              key={article}
              className="border border-[#071A2B]/10 rounded-2xl p-7 bg-white"
            >
              <p className="text-xs uppercase tracking-widest text-[#C9A86A]">
                Investment Guide
              </p>

              <h2 className="mt-4 text-2xl font-serif">
                {article}
              </h2>

              <p className="mt-4 text-sm text-[#071A2B]/50">
                Practical financial insights from Daisen Wealth Partners.
              </p>

              <button className="mt-6 text-sm text-[#071A2B] underline">
                Read Article
              </button>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}