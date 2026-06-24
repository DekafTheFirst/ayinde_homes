import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { articles } from "@/lib/dummy-data";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Ayinde Homes" },
      { name: "description", content: "Expert perspectives on the Nigerian real estate landscape — guides, legal explainers and market analysis for the diaspora." },
      { property: "og:title", content: "Resources & Insights — Ayinde Homes" },
      { property: "og:description", content: "Guides, legal explainers, and ROI analysis for the diaspora investor." },
    ],
  }),
  component: ResourcesPage,
});

const categories = ["All Articles", "Legal & Titles", "Investment ROI", "Construction Tips", "Market News"] as const;

function ResourcesPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All Articles");
  const visible = cat === "All Articles" ? articles : articles.filter((a) => a.category === cat);
  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <>
      <section className="container-x py-24 lg:py-28">
        <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Heritage & Insights</div>
        <h1 className="mt-4 max-w-4xl font-display text-5xl text-primary md:text-6xl lg:text-7xl">
          Expert perspectives on the <span className="italic text-accent">Nigerian real estate</span> landscape.
        </h1>
      </section>

      <section className="container-x">
        <div className="flex flex-wrap gap-2 border-y border-border py-5 text-xs uppercase tracking-[0.18em]">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-sm px-4 py-2 transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:bg-secondary"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {featured && (
        <section className="container-x py-16">
          <article className="group grid gap-8 overflow-hidden rounded-sm border border-border bg-card lg:grid-cols-12">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-forest to-forest-deep lg:col-span-7 lg:aspect-auto">
              <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(135deg, transparent 40%, var(--gold) 100%)" }} />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-sm bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-foreground">
                {featured.tag}
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {featured.minutes} min read
              </div>
              <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <button className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent">
                Read Full Guide <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        </section>
      )}

      <section className="container-x pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <article key={a.title} className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-lg">
              <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-secondary via-cream to-secondary">
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg, transparent 60%, var(--forest) 100%)", opacity: 0.15 }} />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-sm bg-background/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {a.tag}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  <Clock className="h-3 w-3" /> {a.minutes} min
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug text-primary">{a.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{a.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary group-hover:text-accent">
                  Read article <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid items-center gap-10 rounded-sm bg-forest-deep p-12 text-primary-foreground lg:grid-cols-12 lg:p-16">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Newsletter</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Insights, in your inbox. Once a month.</h2>
            <p className="mt-3 text-primary-foreground/70">No spam. Just market intelligence written by the team that builds it.</p>
          </div>
          <form className="flex gap-3 lg:col-span-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-sm border border-primary-foreground/20 bg-primary px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold focus:outline-none"
            />
            <button className="shrink-0 rounded-sm bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground hover:bg-gold/90">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
