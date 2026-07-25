import PageHero from "../components/PageHero";

const otherProjects = [
  {
    title: "Chapel of Our Lady of Sorrow",
    desc: "A dedicated chapel envisioned as a home of prayer and Adoration for the growing community of devotees.",
    img: "/images/chapel.jpg",
  },
  {
    title: "Stations of the Cross",
    desc: "An outdoor Stations of the Cross walk, to help pilgrims meditate on the Passion of Our Lord alongside His Sorrowful Mother.",
    img: "/images/stations.jpg",
  },
  {
    title: "Garden of Remembrance",
    desc: "A quiet garden for reflection on the Seven Sorrows, envisioned as a place of peace for visiting devotees.",
    img: "/images/scourging.jpg",
  },
];

export default function Projects() {
  return (
    <div>
      <PageHero title="Our Projects" crumb="Projects" />

      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-eyebrow justify-center mb-4">Building for the Future</p>
            <h2 className="text-3xl md:text-4xl text-maroon-900 font-semibold">
              Works in Service of the Devotion
            </h2>
            <p className="mt-4 text-ink/70">
              These are the projects envisioned by the Society of Our Lady of Sorrow to support
              our growing community of prayer at Olo.
            </p>
          </div>

          {/* Featured / active project */}
          <div className="grid md:grid-cols-2 gap-0 bg-white border border-gold-200 rounded-sm overflow-hidden shadow-soft mb-14">
            <div className="h-72 md:h-auto overflow-hidden">
              <img
                src="/images/holyland-1.jpg"
                alt="Conference House land"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-9 md:p-12 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 bg-gold-100 text-gold-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
                In Progress
              </span>
              <h3 className="text-2xl md:text-3xl text-maroon-900 font-semibold mb-4">
                Conference House Land Acquisition
              </h3>
              <p className="text-ink/75 leading-relaxed mb-4">
                The Society is presently in the process of purchasing land at Olo to build the
                future Conference House &mdash; a multipurpose facility intended to host retreats,
                formation programmes and accommodation for pilgrims and devotees visiting the
                Holy Land of Adoration.
              </p>
              <p className="text-ink/75 leading-relaxed">
                This project remains ongoing, and we continue to depend on the prayers and
                goodwill of our members and benefactors as the acquisition process moves forward.
              </p>
            </div>
          </div>

          {/* Other, non-clickable projects */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((p) => (
              <div
                key={p.title}
                className="relative bg-white border border-gold-100 rounded-sm overflow-hidden cursor-default select-none"
              >
                <div className="h-52 overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-maroon-950/10" />
                  <span className="absolute top-3 right-3 bg-maroon-900/85 text-parchment text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                    Planned
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg text-maroon-900 font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-ink/70 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
