import PageHero from "../components/PageHero";

const servers = [
  {
    name: "Bro. Donatus",
    role: "Community Reader & Devotion Animator",
    note: "Faithfully teaches and reads the message of the Society to the local community at Olo.",
    img: "/images/user-icon.jpg",
  },
  {
    name: "Rev. Fr. Chaplain",
    role: "Chaplain, Society of Our Lady of Sorrow",
    note: "Provides spiritual direction and celebrates the sacraments for members of the Society.",
    img: "/images/user-icon.jpg",
  },
  {
    name: "Society Coordinator",
    role: "National Coordinator",
    note: "Oversees the formation, welfare and activities of devotees across our local communities.",
    img: "/images/user-icon.jpg",
  },
];

const testimonials = [
  {
    name: "A Devotee of the Society",
    role: "Member, Olo Community",
    quote:
      "Since I joined this devotion, my faith in the compassion of Our Lady has deepened greatly. The weekly chaplet hour has become the anchor of my prayer life.",
  },
  {
    name: "A Parish Priest",
    role: "Friend of the Society",
    quote:
      "The Society of Our Lady of Sorrow teaches a spirituality that is rooted firmly in Scripture and Tradition. It draws souls to unite their sufferings with Christ through Mary.",
  },
  {
    name: "A Long-standing Member",
    role: "Olo Community",
    quote:
      "What I treasure most is the sense of family here. We console one another as we console the Sorrowful Mother, and that has carried me through many difficult seasons.",
  },
  {
    name: "A Visiting Devotee",
    role: "Enugu Diocese",
    quote:
      "I came for a single retreat and remained a devotee. The teaching on the Seven Sorrows has changed how I carry my own crosses.",
  },
];

export default function About() {
  return (
    <div>
      <PageHero title="About Us" crumb="About" />

      {/* Our Story */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <p className="section-eyebrow mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold leading-snug mb-6">
              A Community Raised Under the Mantle of the Sorrowful Mother
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              The Society of Our Lady of Sorrow was established at Olo, in the Uje-Imezi-Olo
              area of Enugu, Nigeria, by devotees who desired to honour the Blessed Virgin Mary
              under her ancient title of Mater Dolorosa &mdash; Our Lady of Sorrows. From humble
              beginnings, the Society has grown into a community committed to prayer, sacrifice
              and works of charity, gathering the faithful together to meditate on the Seven
              Sorrows Our Lady bore for the salvation of souls.
            </p>
            <p className="text-ink/80 leading-relaxed mb-4">
              Rooted in the long-standing Catholic devotion to the Sorrowful Mother, our
              community teaches her children to stand faithfully at the foot of the Cross as she
              did &mdash; offering our own trials in union with Christ's Passion, and drawing
              near to the compassion of His Mother.
            </p>
            <p className="font-semibold text-maroon-800 mb-3">This devotion is expressed through:</p>
            <ul className="space-y-2 text-ink/80">
              {[
                "The Chaplet of the Seven Sorrows of Mary",
                "Consolation and Adoration prayers before the Blessed Sacrament",
                "Works of reparation, intercession and charity",
                "A weekly Hour of Recollection and a call to holiness",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 border border-gold-400/60 rounded-sm hidden md:block" />
            <img
              src="/images/lady-of-sorrow.jpg"
              alt="Our Lady of Sorrow"
              className="relative w-full h-[420px] md:h-[520px] object-cover rounded-sm shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-maroon-900">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-maroon-950/40 border border-gold-500/20 rounded-sm p-9">
            <p className="section-eyebrow text-gold-300 mb-4">Our Mission</p>
            <p className="text-parchment/85 leading-relaxed">
              To propagate devotion to Our Lady of Sorrow throughout the world, teaching the
              faithful to unite their sufferings with the Passion of Christ and the sorrows of
              His Mother, so that souls may return to the Father and human dignity may be
              honoured and life preserved.
            </p>
          </div>
          <div className="bg-maroon-950/40 border border-gold-500/20 rounded-sm p-9">
            <p className="section-eyebrow text-gold-300 mb-4">Our Vision</p>
            <p className="text-parchment/85 leading-relaxed">
              That all men and women may come to honour the Sorrowful Mother, grow in
              compassion for one another, and hasten the glorious reign of her Son, Jesus
              Christ, on earth.
            </p>
          </div>
        </div>
      </section>

      {/* Vocation Movement */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold-400/60 rounded-sm hidden md:block" />
            <img
              src="/images/procession1.jpg"
              alt="Vocation Movement gathering"
              className="relative w-full h-[380px] md:h-[440px] object-cover rounded-sm shadow-soft"
            />
          </div>
          <div>
            <p className="section-eyebrow mb-4">The Vocation Movement</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold leading-snug mb-6">
              A Call to Console the Sorrowful Mother
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              The Vocation Movement of Our Lady of Sorrow is a call extended to men and women of
              goodwill to support the mission of the Society through their sacrifice of time,
              prayer and resources. Members of the Movement help sustain our works of formation,
              charity and outreach, and commit themselves to a life of deeper devotion to the
              Sorrowful Mother.
            </p>
            <p className="text-ink/80 leading-relaxed">
              In our local community at Olo, this call is faithfully carried out by{" "}
              <span className="font-semibold text-maroon-800">Bro. Donatus</span>, who reads and
              teaches the message of the devotion to the faithful, helping to keep the flame of
              this Marian spirituality alive among us.
            </p>
          </div>
        </div>
      </section>

      {/* Humble Servers */}
      <section className="py-24 bg-maroon-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-eyebrow justify-center mb-4">Humble Servers</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold">
              Meet Those Serving the Sorrowful Mother
            </h2>
            <p className="mt-4 text-ink/70">
              Meet those Our Lord is using in a special way to promote and foster devotion to
              Our Lady of Sorrow in our community and beyond.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servers.map((s) => (
              <div key={s.name} className="bg-white rounded-sm overflow-hidden shadow-soft text-center">
                <div className="h-64 overflow-hidden bg-maroon-100">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl text-maroon-900 font-semibold">{s.name}</h4>
                  <p className="text-gold-600 text-sm uppercase tracking-widest mt-1 mb-3">{s.role}</p>
                  <p className="text-sm text-ink/70 leading-relaxed">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-eyebrow justify-center mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold">
              Words From Our Devotees
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gold-100 rounded-sm p-8 flex gap-5">
                <img
                  src="/images/user-icon.jpg"
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover flex-shrink-0 border-2 border-gold-300"
                />
                <div>
                  <p className="text-ink/75 leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <h4 className="text-maroon-900 font-semibold">{t.name}</h4>
                  <span className="text-gold-600 text-xs uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
