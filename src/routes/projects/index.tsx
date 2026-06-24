import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/dummy-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ayinde Homes" },
      { name: "description", content: "Explore our featured diaspora-focused real estate projects in Nigeria, including Kolapo Ishola Estate, Carlton Gate Estate, Rayfield Development, Agodi Estate, and Riverpark Estate." },
      { property: "og:title", content: "Featured Projects — Ayinde Homes" },
      { property: "og:description", content: "Premium residential and investment developments for Nigerians abroad." },
    ],
  }),
  component: ProjectsPage,
});

const locations = ["All", "Lagos", "Ibadan", "Abuja"] as const;
const statuses = ["All", "Ongoing", "Completed", "Pre-Launch", "Selling Fast", "Premium"] as const;

function ProjectsPage() {
  const [loc, setLoc] = useState<(typeof locations)[number]>("All");
  const [st, setSt] = useState<(typeof statuses)[number]>("All");

  const filtered = projects.filter((p) => {
    const locMatch = loc === "All" || p.location.includes(loc);
    const stMatch = st === "All" || p.status === st;
    return locMatch && stMatch;
  });

  return (
    <>
      <section className="container-x py-24 lg:py-28">
        <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Portfolio</div>
        <h1 className="mt-4 max-w-4xl font-display text-5xl text-primary md:text-6xl lg:text-7xl">
          Signature <span className="italic text-accent">Projects</span> for the diaspora.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Discover curated real estate opportunities built for Nigerians abroad, with verified titles, strategic locations, and professional delivery.
        </p>
      </section>

      <section className="container-x">
        <div className="flex flex-wrap items-center gap-8 border-y border-border py-5 text-xs uppercase tracking-[0.18em]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-muted-foreground">City:</span>
            {locations.map((l) => (
              <button
                key={l}
                onClick={() => setLoc(l)}
                className={`rounded-sm px-3 py-1.5 transition-colors ${loc === l ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-muted-foreground">Status:</span>
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setSt(s)}
                className={`rounded-sm px-3 py-1.5 transition-colors ${st === s ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"}`}
              >
                {s}
              </button>
            ))}
          </div>
          <span className="ml-auto text-xs text-muted-foreground normal-case tracking-normal">
            {filtered.length} project{filtered.length === 1 ? "" : "s"}
          </span>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-sm bg-background/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {p.badge}
                </div>
                <div className="absolute bottom-4 right-4 rounded-sm bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-foreground">
                  {p.status}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{p.id}</div>
                <h3 className="mt-2 font-display text-xl text-primary">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
                <p className="text-sm text-muted-foreground">{p.type}</p>

                <div className="mt-5">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                    <span>Completion</span><span>{p.completion}%</span>
                  </div>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-gold" style={{ width: `${p.completion}%` }} />
                  </div>
                </div>

                <div className="mt-auto flex items-end justify-between border-t border-border pt-5">
                  <span className="font-display text-xl text-primary">{p.price}</span>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent"
                  >
                    View Details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
