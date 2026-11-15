"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { articles } from "@/lib/articles";
import "./articles.css";

const ARTICLES_PER_PAGE = 10;

export default function ArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE,
  );

  function goToPage(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="site-shell articles-page-shell">
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
          <Link href="/articles" aria-current="page">
            Articles
          </Link>
          <Link href="/donate" className="nav-donate">
            Donate
          </Link>
        </nav>
      </header>

      <section
        className="articles-feed-section"
        aria-labelledby="latest-articles-heading"
      >
        <h1 id="latest-articles-heading" className="articles-feed-heading">
          Latest
        </h1>

        <div className="articles-feed-list">
          {currentArticles.map((article, index) => (
            <Link
              href={`/articles/${article.slug}`}
              className="articles-feed-card"
              key={article.slug}
            >
              <div className="articles-feed-image-wrap">
                <Image
                  src={article.image}
                  alt=""
                  width={680}
                  height={470}
                  priority={index < 2}
                  sizes="(max-width: 760px) 92vw, 420px"
                />
              </div>
              <h2 className="articles-feed-title">{article.title}</h2>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="articles-pagination" aria-label="Articles pagination">
            <button
              type="button"
              className="pagination-btn pagination-nav-btn"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              ← Previous
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    className={`pagination-btn pagination-number${
                      page === currentPage ? " is-active" : ""
                    }`}
                    onClick={() => goToPage(page)}
                    aria-label={`Page ${page}`}
                    aria-current={page === currentPage ? "page" : undefined}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              type="button"
              className="pagination-btn pagination-nav-btn"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              Next →
            </button>
          </nav>
        )}
      </section>

      <footer className="site-footer">
        <Link href="/">AGI is Dangerous</Link>
      </footer>
    </main>
  );
}
