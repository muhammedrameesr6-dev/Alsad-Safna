"use client";

import React from "react";
import { Plane } from "lucide-react";

export function FlightAnimation() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-16 z-20 overflow-hidden h-24">
      {/* Flight trajectory line with animated plane */}
      <div className="relative w-full h-full">
        <div className="plane-trail-container absolute w-full top-4">
          <svg
            className="w-full h-16 opacity-30 sm:opacity-40"
            viewBox="0 0 1200 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-50,55 C300,10 600,65 1250,15"
              stroke="#b08a45"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="animate-pulse"
            />
          </svg>

          {/* Gliding Airplane */}
          <div className="airplane-mover absolute top-0 flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full border border-gold/40 bg-warm-white/90 px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-wider text-burgundy shadow-md backdrop-blur-md">
              <Plane className="size-3.5 text-sky-600 rotate-45 animate-bounce" />
              <span>Flight AS-2027</span>
              <span className="text-gold font-bold">•</span>
              <span className="text-[10px] text-foreground/70">To Forever</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
