"use client";

import React from "react";
import { Plane, Compass, Globe, Luggage, MapPin } from "lucide-react";

export function TravelOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto mt-10 max-w-lg text-center ${className}`}>
      {/* Aviation & Tourism Emblem */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Horizontal flight path with dashed golden contrail */}
        <div className="relative flex w-full items-center justify-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/70" />

          {/* Golden Aviation Wings & Compass Centerpiece */}
          <div className="relative mx-4 flex items-center justify-center">
            {/* Left Wing Lines */}
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="text-gold/80 hidden sm:block">
              <path d="M60 12 C40 8, 20 2, 0 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M60 16 C42 13, 25 8, 8 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M60 20 C45 18, 30 15, 16 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>

            {/* Center Compass & Plane Badge */}
            <div className="relative flex size-16 items-center justify-center rounded-full border-2 border-gold/60 bg-ivory shadow-inner shadow-gold/20">
              {/* Outer compass ring ticks */}
              <div
                className="absolute inset-1 rounded-full border border-dashed border-gold/40"
                style={{ animation: "spin 30s linear infinite" }}
              />

              {/* Climbing Airplane */}
              <Plane className="size-8 text-burgundy rotate-45 transition-transform hover:scale-110" />

              {/* Small North star/accent at top */}
              <span className="absolute -top-1 size-1.5 rounded-full bg-gold" />
            </div>

            {/* Right Wing Lines */}
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="text-gold/80 -scale-x-100 hidden sm:block">
              <path d="M60 12 C40 8, 20 2, 0 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M42 13 C25 8, 8 7, 60 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M60 20 C45 18, 30 15, 16 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/70" />
        </div>

        {/* Travel Themed Sub-Badge */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] font-sans tracking-[0.2em] text-foreground/75 uppercase">
          <span className="flex items-center gap-1.5 text-sky-700">
            <Globe className="size-3.5 text-sky-600" />
            <span>Kannanalloor</span>
          </span>

          <span className="text-gold font-bold">✈</span>

          <span className="flex items-center gap-1.5 text-sky-700">
            <Compass className="size-3.5 text-sky-600" />
            <span>Umayanalloor</span>
          </span>

          <span className="text-gold font-bold">➔</span>

          <span className="flex items-center gap-1.5 font-medium text-burgundy">
            <MapPin className="size-3.5 text-burgundy" />
            <span>Ayisha Convention Centre</span>
          </span>
        </div>

        <p className="mt-2 font-serif text-xs italic text-gold/90">
          ✦ Embarking on a Lifetime Journey Together ✦
        </p>
      </div>
    </div>
  );
}
