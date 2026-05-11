export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-card">
        <strong>Submission flow</strong>
        <span>
          Contributor PRs only include <code>submission.json</code>, <code>pet.json</code>, and <code>spritesheet.webp</code>.
          Maintainers regenerate previews and listings after merge.
        </span>
      </div>
    </footer>
  );
}
