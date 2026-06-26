import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ayinde Homes" },
      { name: "description", content: "Ayinde Homes helps Nigerians in the diaspora buy, build, invest in, and manage property in Nigeria with confidence, transparency, and peace of mind." },
      { property: "og:title", content: "About — Ayinde Homes" },
      { property: "og:description", content: "Diaspora-focused property ownership in Nigeria made secure, transparent, and rewarding." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-x py-24 lg:py-32">
        <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">About Ayinde Homes</div>
        <h1 className="mt-4 max-w-4xl font-display text-5xl text-primary md:text-6xl lg:text-7xl">
          Your trusted partner for diaspora property ownership in Nigeria.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Ayinde Homes is a premium diaspora-focused real estate development and property acquisition company helping Nigerians abroad buy, build, invest in, and manage properties in Nigeria with confidence, transparency, and peace of mind.
        </p>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Our Promise</div>
            <h2 className="mt-3 font-display text-4xl text-primary">We help Nigerians abroad own property in Nigeria without fear, stress, or uncertainty.</h2>
          </div>
          <div className="space-y-6 text-muted-foreground lg:col-span-8">
            <p className="text-lg leading-relaxed">
              We understand the challenges Nigerians in the diaspora face when trying to own property back home. Fraudulent agents, unclear documentation, substandard construction, abandoned projects, cost overruns, and poor accountability are all too common.
            </p>
            <p className="leading-relaxed">
              Ayinde Homes is not just selling properties. We are selling:
              <strong>Trust. Transparency. Quality Delivery. Peace of Mind.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Vision & Mission</div>
            <h2 className="mt-3 font-display text-4xl text-primary">A trusted diaspora real estate partner across Africa.</h2>
          </div>
          <div className="space-y-6 text-muted-foreground lg:col-span-8">
            <div>
              <h3 className="font-display text-xl text-primary">Vision</h3>
              <p className="mt-3 leading-relaxed">
                To become Africa’s most trusted diaspora-focused real estate company, making property ownership in Nigeria simple, secure, transparent, and rewarding for Nigerians worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-primary">Mission</h3>
              <p className="mt-3 leading-relaxed">
                To help Nigerians in the diaspora acquire, develop, invest in, and manage properties in Nigeria through verified transactions, professional project execution, transparent processes, and excellent customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-x">
          <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Core Values</div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Trust",
              "Transparency",
              "Excellence",
              "Reliability",
              "Professionalism",
              "Customer-Centricity",
              "Accountability",
            ].map((value) => (
              <div key={value} className="rounded-sm border border-border bg-background p-8">
                <div className="font-display text-xl text-primary">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            { v: "30+", l: "Years combined practice" },
            { v: "14", l: "States covered" },
            { v: "98%", l: "Diaspora referral rate" },
            { v: "₦40B+", l: "Assets managed" },
            { v: "3", l: "International offices" },
            { v: "0", l: "Title disputes since founding" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-10">
              <div className="font-display text-5xl text-primary">{s.v}</div>
              <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <div className="rounded-sm border-l-4 border-gold bg-secondary p-10 md:p-16">
          <blockquote className="font-display text-3xl italic leading-snug text-primary md:text-4xl">
            "We are here to make your property investment in Nigeria secure, straightforward, and fully supported from abroad."
          </blockquote>
          <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            The Ayinde Philosophy
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl text-primary md:text-5xl">Ready to secure your home in Nigeria?</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Our team is ready to guide you through verified land acquisition, off-plan home purchase, remote construction, and ongoing property management.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5">
            <Link to="/build-for-me/start" className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              View Featured Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
