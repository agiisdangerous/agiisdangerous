import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { articles } from "@/lib/articles";
import "./article.css";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function getDomainLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return {
    title: article
      ? `${article.title} | AGI is Dangerous`
      : "Article | AGI is Dangerous",
    description: article?.summary ?? "Articles about the risks of advanced AI.",
  };
}

async function ArticleContent({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <article className="article-body">
      <div className="article-meta">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h1>{article.title}</h1>
      <p className="article-deck">{article.summary}</p>
      <div className="article-cover">
        <Image
          src={article.image}
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
        />
      </div>
      <div className="article-prose">
        {article.content.map((block, index) => {
          if (block.type === "heading1") {
            return (
              <h1 className="article-heading-1" key={index}>
                {block.text}
              </h1>
            );
          }

          if (block.type === "heading2") {
            return (
              <h2 className="article-heading-2" key={index}>
                {block.text}
              </h2>
            );
          }

          if (block.type === "paragraph") {
            return <p key={index}>{block.text}</p>;
          }

          if (block.type === "quote") {
            return (
              <blockquote className="article-quote" key={index}>
                <p>
                  <em>{block.text}</em>
                </p>

                {block.attribution && <cite>— {block.attribution}</cite>}
              </blockquote>
            );
          }

          return null;
        })}
      </div>

      {article.references && article.references.length > 0 && (
        <section
          className="article-references"
          aria-labelledby="references-heading"
        >
          <div className="references-header">
            <h2 id="references-heading" className="references-heading">
              References
            </h2>
          </div>

          <ol className="references-list">
            {article.references.map((ref, index) => {
              const number = String(index + 1).padStart(2, "0");
              const metaParts = [ref.authors, ref.publication, ref.date].filter(
                Boolean,
              );

              return (
                <li
                  className="reference-item"
                  key={ref.url ?? `${ref.title}-${index}`}
                >
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reference-card reference-card-link"
                    >
                      <span className="reference-index" aria-hidden="true">
                        {number}
                      </span>
                      <div className="reference-content">
                        <h3 className="reference-title">{ref.title}</h3>
                        {metaParts.length > 0 && (
                          <p className="reference-meta">
                            {metaParts.join(" • ")}
                          </p>
                        )}
                        <span className="reference-url">
                          {getDomainLabel(ref.url)}{" "}
                          <span aria-hidden="true">↗</span>
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="reference-card">
                      <span className="reference-index" aria-hidden="true">
                        {number}
                      </span>
                      <div className="reference-content">
                        <h3 className="reference-title">{ref.title}</h3>
                        {metaParts.length > 0 && (
                          <p className="reference-meta">
                            {metaParts.join(" • ")}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      )}

      <div className="article-end">
        <Link href="/articles">Explore more articles →</Link>
      </div>
    </article>
  );
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return (
    <main id="top" className="site-shell article-page">
      <header className="site-header">
        <Link
          href="/"
          className="site-title"
          aria-label="AGI is Dangerous home"
        >
          AGI is Dangerous
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/donate" className="nav-donate">
            Donate
          </Link>
        </nav>
      </header>

      <Suspense fallback={<div className="article-body" />}>
        <ArticleContent params={params} />
      </Suspense>

      <footer className="site-footer">
        <Link href="/">AGI is Dangerous</Link>
      </footer>
    </main>
  );
}
