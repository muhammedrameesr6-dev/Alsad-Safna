"use client";

import React from "react";
import { MapPin, CalendarDays, Clock, Navigation } from "lucide-react";
import { Ornament, Subtitle } from "./Ornament";
import { Reveal } from "./Reveal";
import { weddingData } from "@/lib/data";

export function Venue() {
  const { venue, dateLabel, dayLabel, hijriDate, timeLabel, reception } =
    weddingData;

  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-ivory py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 arabesque opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <Subtitle>Join Us At</Subtitle>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light text-burgundy sm:text-5xl">
            The Venue
          </h2>
          <Ornament className="mt-7" />
        </Reveal>

        {/* Centered Ornate Venue Details Card (Without Map Embed) */}
        <Reveal delay={150} className="mt-14">
          <div className="relative mx-auto max-w-2xl border border-gold/30 bg-warm-white p-8 sm:p-12 shadow-xl shadow-burgundy/5 text-center">
            {/* Corner Ornate Accents */}
            <span className="absolute left-3 top-3 size-6 border-l border-t border-gold/60" />
            <span className="absolute right-3 top-3 size-6 border-r border-t border-gold/60" />
            <span className="absolute bottom-3 left-3 size-6 border-b border-l border-gold/60" />
            <span className="absolute bottom-3 right-3 size-6 border-b border-r border-gold/60" />

            <h3 className="font-serif text-3xl font-light text-burgundy sm:text-4xl">
              {venue.name}
            </h3>
            <span className="mx-auto mt-4 block h-px w-20 bg-gold/50" />

            {/* Event Timings & Location Info */}
            <div className="mx-auto mt-8 max-w-lg space-y-6 text-left sm:space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-ivory text-gold">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-gold font-medium">
                    Location
                  </p>
                  <p className="mt-0.5 leading-relaxed text-foreground/85 font-serif text-lg">
                    {venue.address}, {venue.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-ivory text-gold">
                  <CalendarDays className="size-5" />
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-gold font-medium">
                    Nikah Ceremony Date
                  </p>
                  <p className="mt-0.5 leading-relaxed text-foreground/85 font-serif text-lg">
                    {dayLabel}, {dateLabel.replace(/•/g, "·")}
                  </p>
                  <p className="text-xs text-foreground/60">
                    Hijri Date: {hijriDate}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-ivory text-gold">
                  <Clock className="size-5" />
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-gold font-medium">
                    Nikah Timing
                  </p>
                  <p className="mt-0.5 leading-relaxed text-foreground/85 font-serif text-lg">
                    {timeLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Reception Box */}
            <div className="mt-10 border-t border-gold/20 pt-8 text-center">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Reception
              </p>
              <p className="mt-2 font-serif text-xl font-medium text-burgundy">
                {reception.dayLabel}, {reception.dateLabel.replace(/•/g, "·")}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground/80">
                {reception.timeLabel}
              </p>
              <p className="mt-1 text-xs text-foreground/60">
                {reception.address}
              </p>
            </div>

            {/* Directions Action */}
            <div className="mt-10 flex justify-center">
              <a
                href={venue.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-sm border border-gold bg-burgundy px-9 py-4 font-sans text-xs uppercase tracking-[0.3em] text-ivory shadow-lg shadow-burgundy/20 transition-all duration-500 hover:tracking-[0.4em]"
              >
                <Navigation className="size-4" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
