import { Link } from "react-router-dom";

const HERO_IMG = "/images/lady-of-sorrow.jpg";

const events = [
  {
    title: "Feast of Our Lady of Sorrows",
    date: "15th September",
    desc: "Our principal feast day, marked with a solemn Mass, procession and veneration of the Seven Sorrows.",
  },
  {
    title: "Weekly Chaplet Hour",
    date: "Every Friday",
    desc: "Devotees gather to pray the Chaplet of the Seven Sorrows of Mary and keep watch with her at the Cross.",
  },
  {
    title: "Annual Retreat",
    date: "Every March",
    desc: "A time of silence, confession and renewal, drawing members closer to the sorrowful and immaculate heart of Mary.",
  },
  {
    title: "Holy Week Observances",
    date: "Every Holy Week",
    desc: "We walk with Our Lady through the Passion of her Son, from the Upper Room to the foot of the Cross.",
  },
  {
    title: "First Saturday Devotion",
    date: "First Saturday, Monthly",
    desc: "Confession, Rosary and Mass offered in reparation, in keeping with Our Lady's own requests to her children.",
  },
  {
    title: "Formation & Catechesis",
    date: "Ongoing",
    desc: "Sessions that teach members the history, prayers and spirituality of the Sorrowful Mother.",
  },
];

const blogPreview = [
  {
    slug: "meaning-of-the-seven-sorrows",
    title: "Understanding the Seven Sorrows of Mary",
    excerpt:
      "A short reflection on each of the seven sorrows the Blessed Virgin bore, and what they teach us about faithful love in suffering.",
    img: "/images/lady-of-sorrow.jpg",
    tag: "Devotion",
  },
  {
    slug: "praying-the-chaplet",
    title: "How to Pray the Chaplet of the Seven Sorrows",
    excerpt:
      "A simple, practical guide for members and newcomers who wish to begin praying this ancient Servite devotion.",
    img: "/images/procession.jpg",
    tag: "Prayer Life",
  },
  {
    slug: "our-vocation-movement",
    title: "Answering the Call: Our Vocation Movement",
    excerpt:
      "Why the Society continues to invite men and women to a deeper vocation of prayer, sacrifice and service to Our Lady.",
    img: "/images/procession1.jpg",
    tag: "Community",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[560px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/80 via-maroon-950/70 to-maroon-950/90" />
        <div className="relative max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <p className="section-eyebrow justify-center text-gold-300 mb-5">
            Society of Our Lady of Sorrow &middot; Olo, Enugu
          </p>
          <h1 className="text-4xl md:text-6xl text-parchment font-semibold leading-tight">
            Standing with Mary at the Foot of the Cross
          </h1>
          <p className="mt-6 text-parchment/85 text-base md:text-lg max-w-2xl leading-relaxed">
            We are a community of the faithful gathered under the mantle of Our Lady of Sorrows,
            drawn together in prayer, sacrifice and compassion to walk more closely with Christ
            and His sorrowful Mother.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/about" className="btn-primary">Discover Our Story</Link>
            <Link to="/contact" className="btn-outline !border-parchment/70 !text-parchment hover:!bg-parchment hover:!text-maroon-800">
              Join the Society
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 inset-x-0 flex justify-center">
          <span className="h-10 w-6 rounded-full border-2 border-parchment/50 flex items-start justify-center p-1">
            <span className="h-2 w-1 bg-parchment/70 rounded-full animate-bounce" />
          </span>
        </div>
      </section>

      {/* Brief about the devotion */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-eyebrow mb-4">A Brief About the Devotion</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold leading-snug mb-6">
              Honouring the Mother who suffered with her Son
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Our Lady of Sorrow, also known as Our Lady of the Seven Sorrows or Mater Dolorosa,
              is honoured for the sufferings she bore beside her Son from His birth to His death
              on Calvary. The Society of Our Lady of Sorrow, Olo, is a Catholic community raised
              to spread devotion to the Sorrowful Mother, to teach the faithful to unite their
              own sufferings to hers, and to grow in compassion, faith and holiness.
            </p>
            <p className="text-ink/80 leading-relaxed mb-6">
              We are a people of prayer, service and sacrament &mdash; seeking to live the Gospel,
              support one another in faith, and console the Heart of Mary as she consoled her Son.
              All are welcome to join us in worship and fellowship.
            </p>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-gold-400/60 rounded-sm hidden md:block" />
            <img
              src="/images/lady-of-sorrow.jpg"
              alt="Our Lady of Sorrow"
              className="relative w-full h-[420px] md:h-[480px] object-cover rounded-sm shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-maroon-900 py-14">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["30", "Years of Devotion"],
            ["7", "Sorrows Honoured"],
            ["12+", "Weekly & Monthly Devotions"],
            ["1000+", "Members & Devotees"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="text-4xl md:text-5xl font-display font-semibold text-gold-300">{num}</p>
              <p className="mt-2 text-parchment/70 text-sm uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events / gallery */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-eyebrow justify-center mb-4">Our Events</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold">
              Seasons of Prayer Throughout the Year
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((e) => (
              <div
                key={e.title}
                className="bg-white border border-gold-100 rounded-sm p-7 hover:shadow-soft transition-shadow duration-300"
              >
                <p className="text-gold-600 text-xs uppercase tracking-widest font-semibold mb-3">{e.date}</p>
                <h3 className="text-xl text-maroon-900 font-semibold mb-3">{e.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vocation movement teaser */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url(/images/procession1.jpg)" }}>
        <div className="absolute inset-0 bg-maroon-950/85" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow justify-center text-gold-300 mb-4">The Vocation Movement</p>
          <h2 className="text-3xl md:text-4xl text-parchment font-semibold mb-6">
            A Call to Console the Sorrowful Mother
          </h2>
          <p className="text-parchment/80 leading-relaxed mb-8">
            The Vocation Movement of Our Lady of Sorrow invites men and women to offer their time,
            prayer and resources in service of the Society's mission. In our local community, this
            call is faithfully echoed by Bro. Donatus, who continues to teach and read the message
            of the devotion to the faithful gathered at Olo.
          </p>
          <Link to="/about" className="btn-outline !border-gold-400 !text-gold-300 hover:!bg-gold-500 hover:!text-maroon-950">
            Learn More
          </Link>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-eyebrow justify-center mb-4">From Our Blog</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold">
              Reflections on the Sorrowful Mother
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPreview.map((b) => (
              <article key={b.slug} className="bg-white border border-gold-100 rounded-sm overflow-hidden group hover:shadow-soft transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">{b.tag}</span>
                  <h3 className="text-xl text-maroon-900 font-semibold mt-3 mb-3 leading-snug">{b.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-4">{b.excerpt}</p>
                  <Link to="/blog" className="text-maroon-700 text-sm font-semibold uppercase tracking-wide hover:text-gold-600 transition-colors">
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-maroon-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-parchment font-semibold mb-4">
            Walk with us in prayer, sacrifice and devotion.
          </h2>
          <p className="text-parchment/75 mb-8">
            Reach out to the Society of Our Lady of Sorrow to learn how you can join our
            community of prayer at Olo, Enugu.
          </p>
          <Link to="/contact" className="btn-primary !bg-gold-500 !text-maroon-950 hover:!bg-gold-400">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
