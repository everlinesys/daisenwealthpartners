import { useState } from "react";

const whatsappNumber = "918301808509";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const openWhatsApp = (event) => {
    event.preventDefault();
    const text = [
      "Hello Daisen Wealth Partners,",
      form.name && `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

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

            <a
              href="https://wa.me/918301808509"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#20bd5a]"
            >
              Chat on WhatsApp
            </a>
          </div>

          <form onSubmit={openWhatsApp} className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white/15 py-4 outline-none placeholder:text-white/30"
            />

            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/15 py-4 outline-none placeholder:text-white/30"
            />

            <input
              type="tel"
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-white/15 py-4 outline-none placeholder:text-white/30"
            />

            <textarea
              rows="4"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder="How can we help?"
              className="w-full bg-transparent border-b border-white/15 py-4 outline-none placeholder:text-white/30 resize-none"
            />

            <button
              type="submit"
              className="mt-8 w-full bg-[#C9A86A] text-[#071A2B] py-4 rounded-full font-medium"
            >
              Continue on WhatsApp
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
