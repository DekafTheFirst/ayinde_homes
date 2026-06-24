import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/dummy-data";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetailsPage,
});

function ProjectDetailsPage() {
  const { slug } = Route.useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="container-x py-24">
        <h1 className="font-display text-5xl text-primary">
          Project Not Found
        </h1>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="container-x relative flex h-full flex-col justify-end pb-16">
            <div className="inline-flex w-fit rounded-sm bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-foreground">
              {project.status}
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-5xl text-white md:text-6xl">
              {project.name}
            </h1>


            <p className="mt-3 text-white/80">
              {project.location} • {project.type}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              Project Overview
            </div>

            <h2 className="mt-3 font-display text-4xl text-primary">
              Investment Opportunity
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              {project.overview}
            </p>

            {/* Progress */}
            <div className="mt-10">
              <div className="flex justify-between text-xs uppercase tracking-wider text-muted-foreground">
                <span>Development Progress</span>
                <span>{project.completion}%</span>
              </div>

              <div className="mt-3 h-2 rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gold"
                  style={{ width: `${project.completion}%` }}
                />
              </div>


              <div className="div">
                <div className="text-[11px] mt-12 font-semibold uppercase tracking-[0.3em] text-accent">
                  Gallery
                </div>
                <h2 className="mt-2 font-display text-4xl text-primary">
                  Photos & Videos
                </h2>




                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {project.photos?.map((img: string) => (
                    <div
                      key={img}
                      className="aspect-[4/3] overflow-hidden rounded-sm"
                    >
                      <img
                        src={img}
                        alt={project.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="rounded-sm border border-border bg-card p-8">
            <h3 className="font-display text-2xl text-primary">
              Project Details
            </h3>

            <div className="mt-8 space-y-5">
              <Detail
                label="Location"
                value={project.location}
              />

              <Detail
                label="Property Type"
                value={project.type}
              />

              <Detail
                label="Available Units"
                value={project.availableUnits?.join(", ")}
              />

              <Detail
                label="Pricing"
                value={project.pricing}
              />

              <Detail
                label="Payment Plan"
                value={project.paymentPlan}
              />

              <Detail
                label="Title Status"
                value={project.titleStatus}
              />

              <Detail
                label="Development Stage"
                value={project.developmentStage}
              />

              <Detail
                label="Completion Timeline"
                value={project.completionTimeline}
              />
            </div>

            {/* <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground"
            >
              Enquire Now
              <ArrowUpRight className="h-4 w-4" />
            </Link> */}
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x pb-24">




      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-x text-center">
          <h2 className="font-display text-4xl">
            Own Property in Nigeria Without Being Physically Present
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/80">
            Secure verified real estate opportunities with transparent processes,
            professional project delivery, and dedicated support.
          </p>

          {/* <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-foreground"
          >
            Schedule Consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link> */}
        </div>
      </section>
    </>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  if (!value) return null;

  return (
    <div className="border-b border-border pb-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>

      <div className="mt-2 text-sm leading-relaxed text-primary">
        {value}
      </div>
    </div>
  );
}