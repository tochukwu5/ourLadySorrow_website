import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-parchment/80 relative">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="mb-4">
            <Logo light />
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-parchment/70">
            OLS&ndash;OLO, Holy Land of Adoration, Uje&ndash;Imezi&ndash;Olo, Enugu, Nigeria. A community of
            devotees gathered under the mantle of Our Lady of Sorrow, sharing in her compassion and drawing
            closer to her Son through prayer, sacrifice and works of charity.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://wa.me/2348081821319"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gold-500/50 text-gold-300 hover:bg-gold-500 hover:text-maroon-950 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.13h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.1.09-1.78-.11-.41-.12-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.37.24-.26.53-.33.7-.33.18 0 .35 0 .5.01.16.01.38-.06.6.46.24.56.8 1.96.87 2.1.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.86.26.13.43.19.5.3.06.11.06.62-.18 1.3z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/groups/1362333194136663/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gold-500/50 text-gold-300 hover:bg-gold-500 hover:text-maroon-950 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold-300 font-display text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-gold-300 transition-colors">Projects</Link></li>
            <li><Link to="/blog" className="hover:text-gold-300 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-300 font-display text-lg mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-parchment/70">
            <li>Holy Land of Adoration,<br />Uje&ndash;Imezi&ndash;Olo, Enugu, Nigeria</li>
            <li>
              <a href="tel:+2348081821319" className="hover:text-gold-300 transition-colors">
                +234 808 182 1319
              </a>
            </li>
            <li className="break-all">
              <a href="mailto:ourladyofsorrowOlo@gmail.com" className="hover:text-gold-300 transition-colors">
                ourladyofsorrowOlo@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-parchment/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-parchment/50">
          <p>&copy; {new Date().getFullYear()} Our Lady of Sorrow, Olo. All Rights Reserved.</p>
          <p className="italic font-display text-sm text-gold-300/80">
            &ldquo;Woman, behold your son.&rdquo; &mdash; John 19:26
          </p>
        </div>
      </div>
    </footer>
  );
}
