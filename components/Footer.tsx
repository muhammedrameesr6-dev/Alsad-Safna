"use client";

import React from "react";
import Image from "next/image";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";
import { weddingData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep-burgundy py-20 text-center text-ivory md:py-28">
      {/* Arabesque subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'none\' stroke=\'%23d8c39a\' stroke-opacity=\'0.8\'%3E%3Cpath d=\'M40 8c8 12 24 12 32 0M40 72c8-12 24-12 32 0M8 40c12-8 12-24 0-32M72 40c-12-8-12-24 0-32\'/%3E%3Ccircle cx=\'40\' cy=\'40\' r=\'18\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Top Left Floral Corner */}
      <Image
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width={420}
        height={420}
        className="blend-floral pointer-events-none absolute -left-6 -top-6 w-36 opacity-50 sm:w-48"
      />

      {/* Bottom Right Floral Corner */}
      <Image
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width={420}
        height={420}
        className="blend-floral pointer-events-none absolute -bottom-6 -right-6 w-36 -scale-x-100 -scale-y-100 opacity-50 sm:w-48"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <Reveal>
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl leading-relaxed text-champagne sm:text-3xl"
          >
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="mt-4 text-sm italic text-ivory/70 sm:text-base">
            &ldquo;May Allah bless you, and shower His blessings upon you, and join you together in goodness.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={150}>
          <Ornament className="mt-10" />

          {/* Bride First, Groom Second */}
          <h2 className="mt-10 font-serif text-5xl font-light text-champagne sm:text-6xl">
            {weddingData.bride.name}
            <span className="mx-3 italic text-gold">&amp;</span>
            {weddingData.groom.name}
          </h2>

          <p className="mt-6 font-sans text-xs uppercase tracking-[0.4em] text-ivory/70">
            {weddingData.dateLabel}
          </p>

          <p className="mt-3 font-serif text-sm italic text-champagne/80">
            With best compliments from :{" "}
            <span className="font-semibold text-ivory">
              {weddingData.compliments}
            </span>
          </p>

          <p className="mt-8 text-pretty text-sm leading-relaxed text-ivory/60">
            Your presence and prayers are the greatest gift as we begin our
            journey together, insha&rsquo;Allah.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
