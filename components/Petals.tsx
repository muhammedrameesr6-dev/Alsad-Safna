"use client";

import React, { useEffect, useState } from "react";

interface PetalData {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: string;
  opacity: number;
}

export function Petals({ count = 12 }: { count?: number }) {
  const [petals, setPetals] = useState<PetalData[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: 100 * Math.random(),
        size: 8 + 10 * Math.random(),
        duration: 12 + 12 * Math.random(),
        delay: -(20 * Math.random()),
        drift: `${(Math.random() - 0.5) * 160}px`,
        opacity: 0.25 + 0.4 * Math.random(),
      }))
    );
  }, [count]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={
            {
              left: `${petal.left}%`,
              width: petal.size,
              height: petal.size,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              "--petal-drift": petal.drift,
              "--petal-opacity": petal.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
