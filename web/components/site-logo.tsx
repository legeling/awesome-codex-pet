type SiteLogoProps = {
  size?: number;
  className?: string;
};

export function SiteLogo({ size = 28, className = "" }: SiteLogoProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-hover shadow-sm ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size * 0.62, height: size * 0.62 }}
      >
        {/* Pixel-style cat head */}
        <g fill="#ffffff">
          {/* Ears */}
          <rect x="4" y="5" width="3" height="3" />
          <rect x="7" y="3" width="2" height="2" />
          <rect x="17" y="5" width="3" height="3" />
          <rect x="15" y="3" width="2" height="2" />
          {/* Head */}
          <rect x="5" y="8" width="14" height="11" rx="1" />
        </g>
        {/* Eyes */}
        <rect x="9" y="12" width="2" height="2" fill="#0d0d0d" />
        <rect x="13" y="12" width="2" height="2" fill="#0d0d0d" />
        {/* Mouth */}
        <rect x="11" y="15" width="2" height="1" fill="#0d0d0d" />
      </svg>
    </span>
  );
}
