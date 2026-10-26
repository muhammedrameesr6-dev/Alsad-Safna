"use client";

import React, { useEffect, useState } from "react";
import { Plane } from "lucide-react";

export function FlightAnimation() {
  const [flying, setFlying] = useState(true);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-16 z-30 overflow-hidden h-28">
      {/* Flight trajectory line with animated plane */}
      <div className="relative w-full h-full">
        <div className="plane-trail-container absolute w-full top-6">
          <svg
            className="w-full h-20 opacity-30 sm:opacity-40"
            viewBox="0 0 1200 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-50,60 C300,10 600,70 1250,20"
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
