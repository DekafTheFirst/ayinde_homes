import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ClipboardList, Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/build-for-me/start")({
  head: () => ({
    meta: [
      { title: "Start Build-For-Me — Ayinde Homes" },
      {
        name: "description",
        content:
          "Share your build goals with Ayinde Homes and begin a remote home building consultation for Nigeria.",
      },
      { property: "og:title", content: "Start Build-For-Me — Ayinde Homes" },
      {
        property: "og:description",
        content:
          "Begin your Build-For-Me journey with a diaspora-focused consultation and project readiness review.",
      },
    ],
  }),
  component: StartBuildForMePage,
});

function StartBuildForMePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const requestDetails = [
      ["Full name", formData.get("name")],
      ["Email", formData.get("email")],
      ["Phone / WhatsApp", formData.get("phone")],
      ["Current location", formData.get("location")],
      ["Build location", formData.get("buildLocation")],
      ["Budget range", formData.get("budget")],
      ["Project stage", formData.get("stage")],
      ["Project notes", formData.get("notes")],
    ]
      .map(([label, value]) => `${label}: ${value || "Not provided"}`)
      .join("\n");

    const mailto = new URL("mailto:support@ayindehomes.com");
    mailto.searchParams.set("subject", "Build-For-Me Consultation Request");
    mailto.searchParams.set(
      "body",
      `Hello Ayinde Homes,\n\nI would like to start a Build-For-Me consultation.\n\n${requestDetails}`,
    );

    setSubmitted(true);
    window.location.href = mailto.toString();
  }

  return (
    <>
      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              Start Build-For-Me
            </div>
            <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">
              Tell us what you want to build.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Share your location, budget range, preferred timeline, and current project stage.
              Our diaspora advisory team will use this to prepare the right consultation.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Project readiness and budget review",
                "Legal, title, and documentation guidance",
                "Build plan, supervision model, and reporting setup",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-sm border border-border bg-secondary p-6">
              <div className="flex items-center gap-3 text-sm font-semibold text-primary">
                <ClipboardList className="h-5 w-5 text-accent" />
                Need to see how reporting works?
              </div>
              <Link
                to="/project-audit"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:text-accent"
              >
                View Project Audit Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              className="grid gap-5 rounded-sm border border-border bg-background p-6 shadow-sm md:grid-cols-2 lg:p-8"
              onSubmit={handleSubmit}
            >
              <label className="space-y-2 text-sm font-medium text-primary">
                Full Name
                <input
                  className="h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-primary">
                Email Address
                <input
                  className="h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-primary">
                Phone / WhatsApp
                <input
                  className="h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-primary">
                Current Location
                <input
                  className="h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                  name="location"
                  type="text"
                  placeholder="United States, UK, Canada..."
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-primary">
                Build Location
                <input
                  className="h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                  name="buildLocation"
                  type="text"
                  placeholder="Lagos, Ibadan, Abuja..."
                  required
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-primary">
                Budget Range
                <select
                  className="h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                  name="budget"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  <option value="under-50m">Under ₦50M</option>
                  <option value="50m-100m">₦50M - ₦100M</option>
                  <option value="100m-250m">₦100M - ₦250M</option>
                  <option value="250m-plus">₦250M+</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-primary md:col-span-2">
                What stage are you in?
                <select
                  className="h-12 w-full rounded-sm border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                  name="stage"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select stage
                  </option>
                  <option value="idea">I have an idea and need guidance</option>
                  <option value="land">I already have land</option>
                  <option value="design">I have drawings/designs</option>
                  <option value="active-build">Construction has started</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-primary md:col-span-2">
                Project Notes
                <textarea
                  className="min-h-36 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  name="notes"
                  placeholder="Tell us about your ideal home, timeline, concerns, or documents already available."
                />
              </label>
              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <div className="space-y-3">
                  {submitted && (
                    <p className="text-sm font-medium text-primary">
                      Your email app should open with the request details ready to send.
                    </p>
                  )}
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    +234 (0) 812 345 6789
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                    support@ayindehomes.com
                  </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/90"
                >
                  Submit Request <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
