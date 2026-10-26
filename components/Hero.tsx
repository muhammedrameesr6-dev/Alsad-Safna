"use client";

import React from "react";
import Image from "next/image";
import { Plane } from "lucide-react";
import { Ornament } from "./Ornament";
import { Petals } from "./Petals";
import { weddingData } from "@/lib/data";

interface HeroProps {
  onOpenInvitation: () => void;
}

export function Hero({ onOpenInvitation }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden paper-texture"
    >
      <div className="absolute inset-0 arabesque opacity-70" aria-hidden="true" />

      {/* Top Left Floral Corner */}
      <Image
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width={520}
        height={520}
        priority
        className="blend-floral pointer-events-none absolute -left-8 -top-6 w-40 select-none sm:w-56 md:w-72 lg:w-80"
      />

      {/* Top Right Floral Corner */}
      <Image
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width={520}
        height={520}
        className="blend-floral pointer-events-none absolute -right-8 -top-6 w-40 -scale-x-100 select-none sm:w-56 md:w-72 lg:w-80"
      />

      {/* Bottom Left Floral Corner */}
      <Image
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width={520}
        height={520}
        className="blend-floral pointer-events-none absolute -bottom-6 -left-8 w-36 -scale-y-100 select-none opacity-90 sm:w-52 md:w-64 lg:hidden"
      />

      <Petals count={10} />

      {/* Dual Decorative Frames */}
      <div className="pointer-events-none absolute inset-4 border border-gold/25 sm:inset-6 md:inset-8" />
      <div className="pointer-events-none absolute inset-5 border border-gold/15 sm:inset-8 md:inset-10" />

      {/* Content Container */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-8 pb-16 pt-24 text-center md:pt-28">
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-2xl leading-relaxed text-gold sm:text-3xl md:text-4xl"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        <Ornament className="mt-6" />

        {/* Travel & Tourism Route Pill */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-50/70 px-4 py-1 text-[11px] font-sans uppercase tracking-[0.2em] text-sky-800 shadow-sm backdrop-blur-sm">
          <span>Nedumpana</span>
          <Plane className="size-3 text-sky-600 rotate-45" />
          <span>Umayanalloor</span>
          <span className="text-gold font-bold">➔</span>
          <span className="font-semibold text-burgundy">Ayisha Convention Centre</span>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <p className="font-sans text-xs uppercase tracking-[0.5em] text-foreground/70">
            The Wedding Of
          </p>

          <div className="mt-4 flex flex-col items-center">
            <h1 className="font-serif text-5xl font-light capitalize leading-none text-burgundy sm:text-7xl md:text-8xl">
              {weddingData.groom.fullName}
            </h1>
            <div className="my-2 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/40" />
              <span className="font-serif text-3xl italic text-gold sm:text-4xl">
                &amp;
              </span>
              <Plane className="size-4 text-sky-600 rotate-45" />
              <span className="h-px w-8 bg-gold/40" />
            </div>
            <h1 className="font-serif text-5xl font-light capitalize leading-none text-burgundy sm:text-7xl md:text-8xl">
              {weddingData.bride.fullName}
            </h1>
          </div>
        </div>

        <p className="mt-8 max-w-lg text-pretty font-serif text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
          Request your esteemed presence and blessings as we embark on our lifetime journey together.
        </p>

        <div className="mt-9 flex flex-col items-center gap-1.5">
          <p className="font-sans text-sm uppercase tracking-[0.4em] text-burgundy sm:text-base">
            {weddingData.dateLabel}
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/70">
            {weddingData.dayLabel} • ({weddingData.hijriDate})
          </p>
          <span className="h-px w-14 bg-gold/50" />
          <p className="mt-1 font-serif text-lg text-foreground/80">
            {weddingData.venue.name}
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">
            {weddingData.venue.address}, {weddingData.venue.city}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#invitation"
            onClick={(e) => {
              e.preventDefault();
              onOpenInvitation();
            }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-sm border border-gold bg-burgundy px-9 py-4 font-sans text-xs uppercase tracking-[0.3em] text-ivory shadow-lg shadow-burgundy/20 transition-all duration-500 hover:tracking-[0.4em]"
          >
            <span className="absolute inset-0 -translate-x-full bg-deep-burgundy transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">Open Invitation</span>
          </a>

          <a
            href="#boarding-pass"
            onClick={() => onOpenInvitation()}
            className="inline-flex items-center gap-2 rounded-sm border border-sky-400 bg-white/90 px-6 py-4 font-sans text-xs uppercase tracking-[0.25em] text-sky-800 shadow-md backdrop-blur-sm transition-all hover:bg-sky-50"
          >
            <Plane className="size-4 text-sky-600 rotate-45" />
            <span>Boarding Pass</span>
          </a>
        </div>
      </div>
    </section>
  );
}
