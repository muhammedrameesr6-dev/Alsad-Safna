"use client";

import React, { useEffect, useState } from "react";
import { Ornament, Subtitle } from "./Ornament";
import { Reveal } from "./Reveal";
import { weddingData } from "@/lib/data";

function calculateTimeLeft(targetDate: number) {
  const diff = Math.max(0, targetDate - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const targetTime = new Date(weddingData.date).getTime();
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetTime));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative overflow-hidden bg-deep-burgundy py-24 text-ivory md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'90\' height=\'90\' viewBox=\'0 0 90 90\'%3E%3Cg fill=\'none\' stroke=\'%23d8c39a\' stroke-width=\'1\'%3E%3Cpath d=\'M45 6c10 15 24 15 34 0M45 84c10-15 24-15 34 0M6 45c15-10 15-24 0-34M84 45c-15-10-15-24 0-34\'/%3E%3Ccircle cx=\'45\' cy=\'45\' r=\'20\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "90px 90px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Subtitle>Save the Date</Subtitle>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light text-champagne sm:text-5xl">
            Counting Down to Our Forever
          </h2>
          <Ornament className="mt-7" />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center border border-gold/30 bg-burgundy/40 px-4 py-7 backdrop-blur-sm"
              >
                <span className="font-serif text-5xl font-light tabular-nums text-champagne sm:text-6xl">
                  {mounted ? String(unit.value).padStart(2, "0") : "--"}
                </span>
                <span className="mt-3 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-ivory/70">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mt-10 font-serif text-xl italic text-champagne/90">
            {weddingData.dateLabel.replace(/•/g, "·")} ({weddingData.dayLabel}) —
            Nikah: {weddingData.timeLabel}
          </p>
          <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-ivory/60">
            {weddingData.hijriDate}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
