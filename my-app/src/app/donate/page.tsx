import Link from "next/link";
import "./donate.css";

const KOFI_USERNAME = "agiisdangerous";
const kofiEmbedUrl = `https://ko-fi.com/${KOFI_USERNAME}/?hidefeed=true&widget=true&embed=true`;

export default function DonatePage() {
  return (
    <main id="top" className="site-shell donate-page-shell">
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
          <Link href="/#articles">Articles</Link>
          <Link href="/donate" className="nav-donate" aria-current="page">
            Donate
          </Link>
        </nav>
      </header>

      <section className="donate-hero" aria-labelledby="donate-page-title">
        <div className="donate-card">
          <div className="donate-card-header">
            <h1 id="donate-page-title" className="donate-title">
              Help us warn about advanced AI
            </h1>
            <p className="donate-caption">
              Your donation will support more information, discussion, and
              action around the risks of advanced AI.
            </p>
          </div>

          <div className="donate-kofi-embed-wrap">
            <iframe
              src={kofiEmbedUrl}
              title="Ko-fi Donations for AGI is Dangerous"
              className="donate-kofi-iframe"
              height="680"
            />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <Link href="/">AGI is Dangerous</Link>
        <Link href="#top" className="back-to-top">
          Back to top ↑
        </Link>
      </footer>
    </main>
  );
}
