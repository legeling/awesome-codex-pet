import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <div className="brand">
          <Link className="brand__name" href="/">
            Awesome Codex Pet
          </Link>
          <span className="brand__meta">Curated Codex pets, one-command install, GitHub-native submissions.</span>
        </div>

        <nav className="site-nav" aria-label="Primary navigation">
          <Link className="nav-link" href="/#gallery">
            Gallery
          </Link>
          <Link className="nav-link" href="https://github.com/legeling/awesome-codex-pet#quick-install" target="_blank" rel="noreferrer">
            Install
          </Link>
          <Link className="button-link" href="https://github.com/legeling/awesome-codex-pet/blob/main/docs/en/CONTRIBUTING.md" target="_blank" rel="noreferrer">
            Submit a Pet
          </Link>
        </nav>
      </div>
    </header>
  );
}
