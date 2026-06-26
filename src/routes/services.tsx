import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/dummy-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ayinde Homes" },
      { name: "description", content: "Property sales, Build-For-Me, legal verification, project management and property care for Nigerians in the diaspora." },
      { property: "og:title", content: "Services — Ayinde Homes" },
      { property: "og:description", content: "End-to-end real estate services for Nigerians living abroad." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="container-x py-24 lg:py-32">
        <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Our Services</div>
        <h1 className="mt-4 max-w-4xl font-display text-5xl text-primary md:text-6xl lg:text-7xl">
          End-to-end real estate services for Nigerians in the diaspora.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From verified property acquisitions to remote construction delivery, legal support, and facility management, Ayinde Homes covers every step of your property journey in Nigeria.
        </p>
      </section>


      <section className="bg-secondary/50 py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Flagship Service</div>
            <h2 className="mt-4 font-display text-5xl">Build-For-Me</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our signature Build-For-Me service lets you design, build, monitor, and complete your home in Nigeria while living abroad. We handle the technical, legal, and operational details so you can stay informed without traveling.
            </p>
            <Link to="/build-for-me" className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/90">
              Explore Build-For-Me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {[
              { t: "Architectural Design", d: "Tailored plans, budget preparation, and contractor selection for your home." },
              { t: "Construction Supervision", d: "On-site quality control, schedule tracking, and cost monitoring." },
              { t: "Progress Reporting", d: "Regular photos, videos, milestone updates, and client communication." },
              { t: "Final handover", d: "Handover-ready completion with legal and facility onboarding support." },
            ].map((f) => (
              <div key={f.t} className="bg-background p-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="mt-5 font-display text-xl text-primary">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => {
        // Check if the current index is odd/even for alternation
        const isOdd = index % 2 !== 0;

        return (
          <section key={index} className="bg-secondary/50 py-24">
            {/* 1. Restored the 12-column grid layout */}
            <div className="container-x grid gap-12 items-start lg:grid-cols-12">

              {/* TEXT BLOCK */}
              {/* Takes up 5 columns on large screens. Alternates order using lg:order-last */}
              <div className={`flex flex-col lg:col-span-6 ${isOdd ? 'lg:order-last' : ''}`}>
                <h2 className="mt-0 font-display text-5xl">{service.title}</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {service.blurb}
                </p>

                {/* 2. Changed parent wrapper from <p> to <div> and added <ul> for valid HTML */}
                {service?.list && (
                  <div className="mt-2">
                    <span className="block font-semibold text-muted-foreground mb-2">These Include:</span>
                    <ul className="space-y-2">
                      {service.list.map((item, idx) => (
                        <li key={idx} className="ml-6 list-disc leading-relaxed text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <Link to="/build-for-me" className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/90">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* IMAGE / GRID BLOCK */}
              {/* Takes up 7 columns on large screens. Alternates order using lg:order-first */}
              <div className={`overflow-hidden rounded-sm lg:col-span-6 h-[380px] w-full ${isOdd ? 'lg:order-first' : ''}`}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>

            </div>
          </section>
        );
      })}




      <section className="container-x py-24">
        <div className="grid items-center gap-12 rounded-sm border border-border bg-secondary p-12 lg:grid-cols-12 lg:p-20">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl text-primary md:text-5xl">Ready to start your property journey?</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Book a consultation with our diaspora advisory team and explore verified property opportunities, remote home building, and investment planning in Nigeria.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4">
            <Link to="/build-for-me/start" className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
