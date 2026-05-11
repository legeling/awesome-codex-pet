import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell" style={{ padding: "72px 0" }}>
      <section className="detail-panel" style={{ maxWidth: 720, margin: "0 auto" }}>
        <span className="eyebrow">404</span>
        <h1 className="detail-title">Pet not found</h1>
        <p className="detail-copy">The requested pet page does not exist in the current catalog build.</p>
        <div className="detail-actions">
          <Link className="button-link" href="/">
            Back to gallery
          </Link>
        </div>
      </section>
    </main>
  );
}
