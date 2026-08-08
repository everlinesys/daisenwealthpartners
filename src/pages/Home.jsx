import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      {/* Additional homepage sections will go here */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#C9A86A] uppercase tracking-[0.2em] text-sm">
            Daisen Wealth Partners
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#071A2B]">
            Wealth planning built around your goals.
          </h2>
        </div>
      </section>
    </>
  );
}