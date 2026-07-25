import PageHero from "../components/PageHero";

const posts = [
  {
    title: "Understanding the Seven Sorrows of Mary",
    date: "Devotion",
    img: "/images/lady-of-sorrow.jpg",
    excerpt:
      "From the Prophecy of Simeon to the Burial of Christ, each of the Seven Sorrows reveals a moment where Our Lady's faith stood firm in the midst of grief. This reflection walks through each sorrow and what it teaches the modern devotee about trusting God in suffering.",
  },
  {
    title: "How to Pray the Chaplet of the Seven Sorrows",
    date: "Prayer Life",
    img: "/images/adoration.jpg",
    excerpt:
      "The Chaplet of the Seven Sorrows is one of the oldest Marian devotions in the Church, dating back to the Servite tradition. Here is a simple, step-by-step guide for members and newcomers who wish to begin praying it faithfully at home or with the community.",
  },
  {
    title: "Answering the Call: Our Vocation Movement",
    date: "Community",
    img: "/images/procession1.jpg",
    excerpt:
      "The Vocation Movement continues to invite the faithful into a deeper commitment of prayer and service to Our Lady of Sorrow. Bro. Donatus shares why this call matters for our community at Olo, and how members can respond to it in their daily lives.",
  },
];

export default function Blog() {
  return (
    <div>
      <PageHero title="Our Blog" crumb="Blog" />

      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-eyebrow justify-center mb-4">From the Society</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold">
              Teaching &amp; Reflections on the Devotion
            </h2>
            <p className="mt-4 text-ink/70">
              Short reflections and teachings to help our members grow in the devotion to Our
              Lady of Sorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((p) => (
              <article
                key={p.title}
                className="bg-white border border-gold-100 rounded-sm overflow-hidden flex flex-col hover:shadow-soft transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-3">
                    {p.date}
                  </span>
                  <h3 className="text-xl text-maroon-900 font-semibold mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
