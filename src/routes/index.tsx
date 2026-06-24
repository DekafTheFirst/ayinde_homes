import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { home_services, projects, services } from "@/lib/dummy-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayinde Homes — Own Property in Nigeria From Anywhere" },
      { name: "description", content: "Secure, transparent real estate for Nigerians in the diaspora. Buy, build, and manage from anywhere in the world." },
      { property: "og:title", content: "Ayinde Homes — Own Property in Nigeria From Anywhere" },
      { property: "og:description", content: "Secure, transparent real estate for Nigerians in the diaspora." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-secondary">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--forest-deep) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        <div className="container-x relative grid gap-16 py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-background/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Heritage · Excellence · Trust
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-primary md:text-6xl lg:text-7xl">
              Own Property in Nigeria
              <span className="block italic text-accent">From Anywhere</span>
              in the World.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Secure, transparent, and professionally managed real estate solutions tailored
              specifically for Nigerians in the diaspora. Your home, handled with integrity.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5">
                View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/build-for-me" className="inline-flex items-center gap-2 rounded-sm border border-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                Build-For-Me <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { v: "98%", l: "Referral rate" },
                { v: "14", l: "States covered" },
                { v: "₦40B+", l: "Assets managed" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-primary">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img src={projects[0].image} alt={projects[0].name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-primary-foreground">
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Featured Estate</div>
                <h3 className="mt-3 font-display text-3xl">{projects[0].name}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{projects[0].location} · {projects[0].completion}% complete</p>
                <div className="mt-6 flex items-end justify-between">
                  <span className="font-display text-2xl text-gold">{projects[0].price}</span>
                  <Link to="/projects" className="text-xs uppercase tracking-widest hover:text-gold">View →</Link>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-sm border border-border bg-card p-5 shadow-xl lg:block">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Live Monitoring</div>
              <div className="mt-2 flex items-center gap-2 font-display text-lg text-primary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> On-site, today
              </div>
              <div className="mt-1 text-xs text-muted-foreground">HD walkthroughs every Friday</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT BAND */}
      <section className="container-x grid gap-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Our Foundation</div>
          <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
            A Legacy of Trust for the Global Nigerian.
          </h2>
        </div>
        <div className="space-y-6 lg:col-span-7 lg:pt-3">
          <p className="text-lg leading-relaxed text-muted-foreground">
            At Ayinde Homes, we understand the complexities of investing in Nigerian real estate
            while living abroad. Our foundation is built on bridging the gap between your
            aspirations and the reality of Nigerian property ownership.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            We eliminate the uncertainty often associated with home building and land acquisition.
            Through total transparency, legal rigor, and architectural excellence, we ensure your
            investment is protected and your vision is realized.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent">
            Learn about our heritage <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/50 py-24">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                What We Do
              </div>
              <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
                Our Services
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Bespoke real estate solutions designed to provide peace of mind and exceptional value.
              </p>
            </div>

            <Link
              to="/services"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent"
            >
              All Services →
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {home_services.slice(0, 6).map((s, i) => (
              <div
                key={s.title}
                className={`group relative flex flex-col p-8 transition-colors hover:bg-card ${s.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-background"
                  }`}
              >
                {/* Number */}
                <div
                  className={`font-display text-xs transition-colors ${s.featured
                    ? "text-gold group-hover:text-gold/80"
                    : "text-accent group-hover:text-primary"
                    }`}
                >
                  0{i + 1}
                </div>

                {/* Title */}
                <h3
                  className={`mt-6 font-display text-2xl transition-colors ${s.featured
                    ? "text-primary-foreground group-hover:text-white"
                    : "text-primary group-hover:text-black"
                    }`}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  className={`mt-3 text-sm leading-relaxed transition-colors ${s.featured
                    ? "text-primary-foreground/80 group-hover:text-white/90"
                    : "text-muted-foreground group-hover:text-black/70"
                    }`}
                >
                  {s.blurb}
                </p>

                {/* CTA */}
                <div
                  className={`mt-8 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${s.featured
                    ? "text-primary-foreground group-hover:text-white"
                    : "text-primary group-hover:text-black"
                    }`}
                >
                  {s.cta}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="container-x py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Why Diaspora Clients Choose Us</div>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Your eyes & ears on the ground.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We ensure every brick laid and every document signed meets international standards.
              Zero proximity bias — our entire operation is built for clients 5,000 miles away.
            </p>
            <div className="mt-10 rounded-sm border-l-4 border-gold bg-secondary p-8">
              <div className="font-display text-6xl text-primary">98%</div>
              <div className="mt-2 font-display text-lg text-primary">Referral Rate</div>
              <div className="mt-2 text-sm text-muted-foreground">From our diaspora client base across the UK, US and Canada.</div>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {[
              { t: "Live Monitoring", d: "Real-time video updates and project dashboards for every active build." },
              { t: "Vetted Partners", d: "Only top-tier, insured architects and contractors ever touch your home." },
              { t: "Escrow Services", d: "Financial transparency with tiered, milestone-based payment releases." },
              { t: "Zero Proximity Bias", d: "Systems and SLAs built specifically for clients abroad — your timezone wins." },
            ].map((f) => (
              <div key={f.t} className="bg-background p-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="mt-5 font-display text-xl text-primary">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-forest-deep py-24 text-primary-foreground">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Portfolio</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Featured Estates</h2>
            </div>
            <Link to="/projects" className="text-sm font-semibold uppercase tracking-[0.18em] text-gold hover:text-primary-foreground">
              View All Developments →
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <Link to='/projects/$slug' params={{ slug: p.slug }}>
                <article key={p.id} className="group relative overflow-hidden rounded-sm border border-primary-foreground/10 bg-primary transition-colors hover:border-gold/40">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                    <div className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{p.badge}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl">{p.name}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/65">{p.location}</p>
                    <p className="text-sm text-primary-foreground/65">{p.type}</p>
                    <div className="mt-8 flex items-end justify-between border-t border-primary-foreground/10 pt-5">
                      <span className="font-display text-2xl text-gold">{p.price}</span>
                      <ArrowUpRight className="h-5 w-5 text-primary-foreground/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </article>
              </Link>

            ))}
          </div>
        </div>
      </section >

      {/* CTA */}
      < section className="container-x py-32" >
        <div className="grid items-center gap-12 rounded-sm border border-border bg-secondary p-12 lg:grid-cols-12 lg:p-20">
          <div className="lg:col-span-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Get In Touch</div>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Ready to own or build your home in Nigeria?
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Schedule a private consultation with our diaspora advisory team. We work across your
              time zone to ensure a seamless experience.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4">
            <Link to="/build-for-me" className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/resources" className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Request Brochure
            </Link>
          </div>
        </div>
      </section >
    </>
  );
}
