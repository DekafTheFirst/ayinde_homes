import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Shield, MessagesSquare, FolderLock } from "lucide-react";

export const Route = createFileRoute("/build-for-me")({
  head: () => ({
    meta: [
      { title: "Build-For-Me — Ayinde Homes" },
      { name: "description", content: "Our signature Build-For-Me service helps Nigerians abroad design, build, and complete homes in Nigeria with remote monitoring and quality oversight." },
      { property: "og:title", content: "Build-For-Me — Ayinde Homes" },
      { property: "og:description", content: "Remote home building for diaspora clients with professional supervision and transparent reporting." },
    ],
  }),
  component: BFMPage,
});

function BFMPage() {
  return (
    <>
      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Build-For-Me</div>
            <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl lg:text-7xl">
              Build your home in Nigeria while you live abroad.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our signature service helps Nigerians in the diaspora design, build, monitor, and complete their home in Nigeria with confidence. We manage contractors, quality checks, progress reporting, and final handover so you can stay fully informed from anywhere.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/90">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-border bg-background p-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Why It Works</div>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>Architectural design and budget preparation for homes that fit your lifestyle.</li>
                <li>Contractor selection, construction supervision, and quality assurance.</li>
                <li>Real-time progress updates with photos, videos, and milestone reports.</li>
                <li>Legal support, documentation checks, and final handover coordination.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { icon: Shield, title: "Verified Partners", description: "We only work with trusted architects, engineers, and contractors that meet our diaspora standards." },
            { icon: FolderLock, title: "Secure Documentation", description: "All projects are supported with title checks, surveys, and legal advisory coordination." },
            { icon: MessagesSquare, title: "Dedicated Support", description: "A client relationship manager keeps you updated and answers questions every step of the way." },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-sm border border-border bg-background p-8">
              <Icon className="h-7 w-7 text-accent" />
              <h2 className="mt-5 font-display text-2xl text-primary">{title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Process</div>
            <h2 className="mt-3 font-display text-4xl text-primary">A full remote build process designed for diaspora owners.</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Design & Budget", details: "Architectural planning, cost estimates, and contractor scope agreements." },
                { title: "Contractor Selection", details: "Vetted teams and procurement support for trusted execution." },
                { title: "Site Supervision", details: "Daily quality checks, material verification, and schedule management." },
                { title: "Reporting", details: "Weekly progress updates with videos, photos, and milestone dashboards." },
              ].map((item) => (
                <div key={item.title} className="rounded-sm border border-border bg-background p-8">
                  <h3 className="font-display text-xl text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid items-center gap-12 rounded-sm border border-border bg-secondary p-12 lg:grid-cols-12 lg:p-20">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl text-primary md:text-5xl">Start your Build-For-Me journey today.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Let Ayinde Homes manage your home build in Nigeria with the accountability and transparency Nigerians abroad deserve.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4">
            <Link to="/build-for-me" className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
