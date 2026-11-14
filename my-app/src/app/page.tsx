"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { articles, categoryNames } from "@/lib/articles";

const featuredArticles = articles.slice(0, 5);
const AUTO_ADVANCE_MS = 4000;

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  function showPrevious() {
    setActiveIndex(
      (current) =>
        (current - 1 + featuredArticles.length) % featuredArticles.length,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % featuredArticles.length);
  }

  useEffect(() => {
    if (featuredArticles.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredArticles.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main id="home" className="site-shell">
      <header className="site-header">
        <Link
          href="/"
          className="site-title"
          aria-label="AGI is Dangerous home"
        >
          AGI is Dangerous
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="#home">Home</Link>
          <Link href="#articles">Articles</Link>
          <Link href="/donate" className="nav-donate">
            Donate
          </Link>
        </nav>
      </header>

      <section className="top-layout" aria-label="Featured and latest articles">
        <div className="feature-column">
          <section
            className="hero-carousel"
            aria-roledescription="carousel"
            aria-label="Top five articles"
          >
            <div className="hero-slides">
              {featuredArticles.map((article, index) => {
                const isActive = index === activeIndex;
                return (
                  <Link
                    href={`/articles/${article.slug}`}
                    className={`hero-link${isActive ? " is-active" : ""}`}
                    key={article.slug}
                    aria-hidden={!isActive}
                    tabIndex={isActive ? 0 : -1}
                  >
                    <div className="hero-image-wrap">
                      <Image
                        src={article.image}
                        alt=""
                        fill
                        priority={index === 0}
                        sizes="(max-width: 760px) 100vw, 68vw"
                        className="hero-image"
                      />
                    </div>
                    <div className="hero-caption">
                      <span className="hero-kicker">FEATURED ARTICLE</span>
                      <h2>{article.title}</h2>
                    </div>
                  </Link>
                );
              })}
            </div>

            <button
              className="carousel-arrow carousel-prev"
              type="button"
              onClick={showPrevious}
              aria-label="Previous featured article"
            >
              <span aria-hidden="true">&#9664;</span>
            </button>
            <button
              className="carousel-arrow carousel-next"
              type="button"
              onClick={showNext}
              aria-label="Next featured article"
            >
              <span aria-hidden="true">&#9654;</span>
            </button>
            <div
              className="carousel-pagination"
              aria-label={`Slide ${activeIndex + 1} of ${featuredArticles.length}`}
            >
              {featuredArticles.map((article, index) => (
                <button
                  type="button"
                  key={article.slug}
                  className={`carousel-dot${index === activeIndex ? " is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show slide ${index + 1}: ${article.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </section>

          <section
            id="articles"
            className="categories-section"
            aria-label="Article categories"
          >
            {categoryNames.map((category) => {
              const categoryArticles = articles.filter(
                (article) => article.category === category,
              );
              return (
                <section
                  className="category-section"
                  key={category}
                  aria-labelledby={`category-${category.replaceAll(" ", "-")}`}
                >
                  <div className="category-heading-row">
                    <h2
                      className="section-heading"
                      id={`category-${category.replaceAll(" ", "-")}`}
                    >
                      {category}
                    </h2>
                  </div>
                  <div className="article-grid">
                    {categoryArticles.map((article) => (
                      <Link
                        href={`/articles/${article.slug}`}
                        className="article-card"
                        key={article.slug}
                      >
                        <div className="article-card-image">
                          <Image
                            src={article.image}
                            alt=""
                            width={480}
                            height={360}
                            sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
                          />
                        </div>
                        <div className="article-card-copy">
                          <span className="article-category">
                            {article.category}
                          </span>
                          <h3>{article.title}</h3>
                          <span className="read-more">
                            Read more <span aria-hidden="true">→</span>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </section>
        </div>

        <aside className="latest-column" aria-labelledby="latest-heading">
          <h2 id="latest-heading" className="section-heading latest-heading">
            Latest
          </h2>
          <div className="latest-list">
            {articles.map((article) => (
              <Link
                href={`/articles/${article.slug}`}
                className="latest-card"
                key={article.slug}
              >
                <div className="latest-image-wrap">
                  <Image
                    src={article.image}
                    alt=""
                    width={360}
                    height={250}
                    sizes="(max-width: 760px) 52vw, 180px"
                  />
                </div>
                <span>{article.title}</span>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section
        id="donate"
        className="donate-banner"
        aria-labelledby="donate-heading"
      >
        <div>
          <span className="donate-eyebrow">HELP US WARN ABOUT ADVANCED AI</span>
          <h2 id="donate-heading">The future isn't Lost. Not Yet.</h2>
          <p>
            Your donation supports more information, discussion, and action
            around the risks of advanced AI.
          </p>
        </div>
        <a className="donate-banner-button" href="/donate">
          Donate today <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <Link href="#home">AGI is Dangerous</Link>
        <Link href="#home" className="back-to-top">
          Back to top ↑
        </Link>
      </footer>
    </main>
  );
}
