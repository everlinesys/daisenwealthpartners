export default function Contact() {
  return (
    <section className="pt-40 pb-24 min-h-screen bg-[#071A2B] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-[#C9A86A] uppercase tracking-[0.2em] text-sm">
          Contact Us
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-serif">
          Let's build your financial future together.
        </h1>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">

          <div>
            <p className="text-white/50 leading-7 max-w-lg">
              Whether you're starting your first SIP or planning for
              long-term wealth creation, Daisen Wealth Partners is here
              to guide you throughout your investment journey.
            </p>

            <div className="mt-10 space-y-5">

              <a
                href="mailto:daisenwealthpartners@gmail.com"
                className="block text-[#C9A86A]"
              >
                daisenwealthpartners@gmail.com
              </a>

              <a
                href="https://wa.me/918301808509"
                target="_blank"
                rel="noreferrer"
                className="block text-[#C9A86A]"
              >
                WhatsApp: +91 83018 08509
              </a>

            </div>
          </div>

          <form className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white/15 py-4 outline-none placeholder:text-white/30"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/15 py-4 outline-none placeholder:text-white/30"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-white/15 py-4 outline-none placeholder:text-white/30"
            />

            <textarea
              rows="4"
              placeholder="How can we help?"
              className="w-full bg-transparent border-b border-white/15 py-4 outline-none placeholder:text-white/30 resize-none"
            />

            <button
              type="submit"
              className="mt-8 w-full bg-[#C9A86A] text-[#071A2B] py-4 rounded-full font-medium"
            >
              Request a Consultation
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}