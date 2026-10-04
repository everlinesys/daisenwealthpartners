const pages = {
  privacy: {
    title: "Privacy Policy",
    intro: "How Daisen Wealth Partners handles information shared through this website.",
    sections: [
      ["Information you provide", "Information you voluntarily submit through contact forms, email, or WhatsApp may be used to respond to your enquiry and provide requested services."],
      ["How information is used", "We use submitted information to communicate with you, respond to requests, and improve the website experience. We do not sell personal information."],
      ["Contact", "For privacy questions, contact daisenwealthpartners@gmail.com."]
    ]
  },
  terms: {
    title: "Terms & Conditions",
    intro: "General terms for using the Daisen Wealth Partners website.",
    sections: [
      ["Informational use", "Website content is provided for general educational and informational purposes and should not be treated as individualized investment advice."],
      ["No guarantee", "Market-linked investments involve risk. Information on this website may change and is not a promise of returns or outcomes."],
      ["External services", "Links to third-party investor platforms and services are provided for convenience. Their own terms and privacy policies apply when you leave this website."]
    ]
  },
  regulatory: {
    title: "Regulatory Disclosures",
    intro: "Important information for investors considering mutual fund investments.",
    sections: [
      ["Mutual fund risk", "Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not an indicator of future returns."],
      ["Distribution", "Daisen Wealth Partners acts as a distributor of mutual funds and receives commission from AMCs, where applicable."],
      ["Registration", "Daisen Joseph is presented on this website as an AMFI Registered Mutual Fund Distributor. Please verify current registration and scheme information through the relevant official sources before investing."]
    ]
  }
};

export default function LegalPage({ type }) {
  const page = pages[type];

  return (
    <section className="min-h-screen bg-[#F7F5F0] px-6 pb-24 pt-36 text-[#071A2B]">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">Daisen Wealth Partners</p>
        <h1 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">{page.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{page.intro}</p>
        <div className="mt-12 space-y-8">
          {page.sections.map(([heading, body]) => (
            <section key={heading} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="font-serif text-2xl">{heading}</h2>
              <p className="mt-3 leading-7 text-slate-600">{body}</p>
            </section>
          ))}
        </div>
        <a href="https://wa.me/918301808509?text=I%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20share%20the%20details." target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-full bg-[#071A2B] px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-900">
          Contact us on WhatsApp
        </a>
      </div>
    </section>
  );
}
