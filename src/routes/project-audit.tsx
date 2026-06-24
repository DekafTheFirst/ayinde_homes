import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Camera, MapPin, CircleCheck, Clock, Cloud } from "lucide-react";
import { timeline } from "@/lib/dummy-data";

export const Route = createFileRoute("/project-audit")({
  head: () => ({
    meta: [
      { title: "Project Audit — The Eko Atlantic Residence" },
      { name: "description", content: "Real-time construction audit and progress log for your premium architectural investment." },
      { property: "og:title", content: "Construction Audit — Ayinde Homes" },
      { property: "og:description", content: "Milestones, engineering notes, and high-fidelity media for your active build." },
    ],
  }),
  component: AuditPage,
});

function AuditPage() {
  const completion = 64;
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x py-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Link to="/build-for-me" className="hover:text-primary">Build-For-Me</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary">Project Audit</span>
          </div>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Project ID · AH-2024-082</div>
              <h1 className="mt-3 font-display text-5xl text-primary md:text-6xl">The Eko Atlantic Residence</h1>
              <p className="mt-4 text-muted-foreground">
                A real-time construction audit and progress log for your premium architectural
                investment. View milestones, engineering notes, and high-fidelity media.
              </p>
            </div>
            <div className="w-full max-w-xs rounded-sm border border-border bg-card p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Completion Status</div>
              <div className="mt-3 font-display text-5xl text-primary">{completion}%</div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-gold" style={{ width: `${completion}%` }} />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Cloud className="h-3.5 w-3.5" /> 24°C · Clear</span>
                <span className="inline-flex items-center gap-1.5 text-forest"><span className="h-1.5 w-1.5 rounded-full bg-forest animate-pulse" /> Live</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live cards */}
      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { l: "Active Workforce", v: "84", s: "On site today", i: CircleCheck },
            { l: "Days On Schedule", v: "127", s: "0 critical-path slips", i: Clock },
            { l: "Site Location", v: "Plot 422", s: "Waterfront District, Eko Atlantic", i: MapPin },
          ].map(({ l, v, s, i: Icon }) => (
            <div key={l} className="rounded-sm border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
                <Icon className="h-4 w-4 text-accent" />
              </div>
              <div className="mt-3 font-display text-3xl text-primary">{v}</div>
              <div className="text-xs text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline + Media */}
      <section className="container-x grid gap-10 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="font-display text-3xl text-primary">Site Progress Log</h2>
          <p className="mt-2 text-sm text-muted-foreground">Chronological audit — all entries verified by site supervisor.</p>

          <ol className="relative mt-10 border-l border-border pl-8">
            {timeline.map((e, i) => (
              <li key={i} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[37px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-gold ring-4 ring-secondary/60" />
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  <span>{e.date} · {e.time}</span>
                  <span className="rounded-sm bg-secondary px-2 py-0.5 text-accent-foreground">{e.tag}</span>
                  <span className={`rounded-sm px-2 py-0.5 ${
                    e.status === "Completed" ? "bg-forest/10 text-forest" :
                    e.status === "Verified" ? "bg-forest/10 text-forest" :
                    e.status === "Resolved" ? "bg-gold/15 text-accent-foreground" :
                    "bg-secondary text-muted-foreground"
                  }`}>{e.status}</span>
                </div>
                <h3 className="mt-3 font-display text-xl text-primary">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-sm border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-primary">Latest Media</h3>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-forest">
                <span className="h-1.5 w-1.5 rounded-full bg-forest animate-pulse" /> Live Feed
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-sm bg-gradient-to-br from-forest to-forest-deep">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(135deg, transparent 30%, var(--gold) 100%)" }} />
                  <div className="absolute bottom-2 left-2 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                    <Camera className="h-3 w-3" /> Cam {i}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-border bg-forest-deep p-6 text-primary-foreground">
            <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Next Milestone</div>
            <h3 className="mt-3 font-display text-2xl">L7 column formwork</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">Scheduled Oct 28 · Estimated 6 working days · Engineer: T. Adebayo</p>
            <button className="mt-6 w-full rounded-sm bg-gold py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground hover:bg-gold/90">
              Request HD Walkthrough
            </button>
          </div>
        </aside>
      </section>
    </>
  );
}
