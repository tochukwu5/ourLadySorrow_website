import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 group shrink-0">
      <span className="relative inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center">
        <span className="absolute inset-0 rounded-full border-2 border-gold-400 rotate-0 group-hover:rotate-6 transition-transform duration-300"></span>
        <img
          src="/images/lady-of-sorrow.jpg"
          alt="Our Lady of Sorrow"
          className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
        />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display font-semibold text-lg md:text-xl tracking-wide ${
            light ? "text-parchment" : "text-maroon-800"
          }`}
        >
          Our Lady of Sorrow
        </span>
        <span
          className={`block text-[10px] md:text-xs uppercase tracking-[0.3em] font-body ${
            light ? "text-gold-200" : "text-gold-600"
          }`}
        >
          Olo &middot; Enugu
        </span>
      </span>
    </Link>
  );
}
