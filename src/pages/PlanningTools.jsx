export default function PlanningTools() {
  return (
    <section className="pt-40 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-[#C9A86A] uppercase tracking-[0.2em] text-sm">
          Planning Tools
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-serif text-[#071A2B]">
          Plan today. Build tomorrow.
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {[
            "SIP Calculator",
            "Smart SIP Calculator",
            "Lumpsum Investment Calculator",
          ].map((tool) => (
            <div
              key={tool}
              className="bg-white border border-[#071A2B]/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-serif">
                {tool}
              </h2>

              <p className="mt-4 text-[#071A2B]/50">
                Explore your potential investment growth with our
                easy-to-use planning tool.
              </p>

              <button className="mt-8 px-5 py-3 rounded-full bg-[#071A2B] text-white">
                Calculate
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}