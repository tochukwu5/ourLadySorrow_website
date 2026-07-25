import PageHero from "../components/PageHero";

export default function Contact() {
  return (
    <div>
      <PageHero title="Contact Us" crumb="Contact" />

      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-14">
          {/* Info */}
          <div className="lg:col-span-2">
            <p className="section-eyebrow mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold leading-snug mb-6">
              We Would Love to Hear From You
            </h2>
            <p className="text-ink/75 leading-relaxed mb-10">
              Whether you wish to learn more about the devotion, join the Society, or support
              our ongoing projects, please reach out to us using the details below.
            </p>

            <div className="space-y-7">
              <div className="flex gap-4 items-start">
                <span className="h-11 w-11 flex-shrink-0 rounded-full bg-maroon-800 text-gold-300 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-maroon-900">OLS&ndash;OLO, Holy Land of Adoration</h4>
                  <p className="text-ink/70 text-sm mt-1">Uje&ndash;Imezi&ndash;Olo, Enugu, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="h-11 w-11 flex-shrink-0 rounded-full bg-maroon-800 text-gold-300 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-maroon-900">Phone</h4>
                  <a href="tel:+2348081821319" className="text-ink/70 text-sm mt-1 hover:text-maroon-700 transition-colors">
                    +234 808 182 1319
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="h-11 w-11 flex-shrink-0 rounded-full bg-maroon-800 text-gold-300 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" strokeLinejoin="round" />
                    <path d="m4 6 8 7 8-7" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-maroon-900">Email</h4>
                  <a
                    href="mailto:ourladyofsorrowOlo@gmail.com"
                    className="text-ink/70 text-sm mt-1 hover:text-maroon-700 transition-colors break-all"
                  >
                    ourladyofsorrowOlo@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="https://wa.me/2348081821319"
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 flex items-center justify-center rounded-full border border-maroon-300 text-maroon-700 hover:bg-maroon-700 hover:text-parchment transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.13h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.1.09-1.78-.11-.41-.12-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.37.24-.26.53-.33.7-.33.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.56.8 1.96.87 2.1.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.86.26.13.43.19.5.3.06.11.06.62-.18 1.3z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/groups/1362333194136663/"
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 flex items-center justify-center rounded-full border border-maroon-300 text-maroon-700 hover:bg-maroon-700 hover:text-parchment transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-gold-100 rounded-sm p-8 md:p-10 shadow-soft">
            <h3 className="text-2xl text-maroon-900 font-semibold mb-6">Send Us a Message</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid sm:grid-cols-2 gap-6"
            >
              <div className="sm:col-span-1">
                <label className="block text-sm text-ink/70 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gold-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-parchment"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-ink/70 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gold-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-parchment"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-ink/70 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gold-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-parchment"
                  placeholder="How can we help?"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-ink/70 mb-2">Message</label>
                <textarea
                  rows={6}
                  required
                  className="w-full border border-gold-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-parchment resize-none"
                  placeholder="Write your message..."
                />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[420px] w-full grayscale-[20%]">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps?q=Imezi-Olo,Enugu,Nigeria&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
