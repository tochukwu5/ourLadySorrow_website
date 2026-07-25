import { Link } from "react-router-dom";

export default function PageHero({ title, crumb }) {
  return (
    <div
      className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/lady-of-sorrow.jpg)" }}
    >
      <div className="absolute inset-0 bg-maroon-950/80" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
        <p className="section-eyebrow justify-center text-gold-300 mb-3">
          <span className="w-8 h-px bg-gold-400 hidden md:inline-block" />
          Our Lady of Sorrow
        </p>
        <h1 className="text-4xl md:text-5xl text-parchment font-semibold">{title}</h1>
        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-parchment/70 uppercase tracking-widest">
          <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gold-300">{crumb || title}</span>
        </div>
      </div>
    </div>
  );
}
