"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import type { Pet } from "@/lib/pets";

type HeroSectionProps = {
  petCount: number;
  featured: Pet[];
};

export function HeroSection({ petCount, featured }: HeroSectionProps) {
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="pt-24 pb-20 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge - fade in */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-medium mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            {t("heroBadge", { count: petCount })}
          </div>

          {/* Title - slide up */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("heroTitle1")}
            <br />
            {t("heroTitle2")}
          </h1>

          {/* Description - slide up */}
          <p
            className={`text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("heroDesc")}
          </p>

          {/* Buttons - slide up */}
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text text-white text-sm font-medium hover:bg-text-secondary transition-colors"
              href="#gallery"
            >
              {t("exploreGallery")}
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-text hover:bg-surface transition-colors"
              href="https://github.com/legeling/awesome-codex-pet/blob/main/docs/en/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
            >
              {t("submitYourPet")}
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Featured pets - floating animation */}
        <div
          className={`mt-20 flex items-center justify-center gap-8 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {featured.map((pet, i) => (
            <Link
              key={pet.slug}
              href={`/pets/${pet.slug}`}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className="size-20 rounded-2xl bg-bg-secondary border border-border flex items-center justify-center overflow-hidden group-hover:border-border-hover group-hover:shadow-lg transition-all duration-300"
                style={{
                  animation: `float 3s ease-in-out ${i * 0.4}s infinite`,
                }}
              >
                <img
                  className="size-16 object-contain [image-rendering:pixelated]"
                  src={pet.previewImage}
                  alt={pet.name}
                />
              </div>
              <span className="text-xs text-muted group-hover:text-text transition-colors">
                {pet.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
