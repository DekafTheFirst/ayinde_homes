import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { articles } from "@/lib/dummy-data";

export const Route = createFileRoute("/resources/$slug")({
  component: ArticleDetailsPage,
});

function ArticleDetailsPage() {
  const { slug } = Route.useParams();

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <section className="container-x py-24">
        <h1 className="font-display text-5xl text-primary">
          Article Not Found
        </h1>
      </section>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="container-x relative flex h-full flex-col justify-end pb-16">
            <Link
              to="/resources"
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>

            <div className="inline-flex w-fit rounded-sm bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-foreground">
              {article.tag}
            </div>

            <h1 className="mt-5 max-w-5xl font-display text-4xl text-white md:text-6xl">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <span>{article.author}</span>

              <span>{article.publishedAt}</span>

              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.minutes} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xl leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>

          <div className="mt-16 space-y-14">
            {article.content.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-3xl text-primary">
                  {section.heading}
                </h2>

                <div className="mt-5 whitespace-pre-line leading-8 text-muted-foreground">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-sm bg-forest-deep p-12 text-center text-primary-foreground">
          <h2 className="font-display text-4xl">
            Ready to Invest or Build in Nigeria?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/75">
            Speak with our team about verified properties, construction
            management, and stress-free home ownership from anywhere in the
            world.
          </p>

          {/* <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-foreground"
          >
            Schedule Consultation
          </Link> */}
        </div>
      </section>

      {/* Related Articles */}
      <section className="container-x pb-24">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl text-primary">
            Related Articles
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {relatedArticles.map((item) => (
            <Link
              key={item.slug}
              to="/resources/$slug"
              params={{ slug: item.slug }}
              className="group rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                {item.tag}
              </div>

              <h3 className="mt-3 font-display text-xl text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground">
                {item.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}