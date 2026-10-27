"use client";

import React from "react";
import Image from "next/image";
import { Ornament, Subtitle } from "./Ornament";
import { Reveal } from "./Reveal";
import { weddingData } from "@/lib/data";

export function InvitationCard() {
  const { bride, groom, dateLabel, dayLabel, hijriDate, timeLabel, venue, compliments, contact } =
    weddingData;

  return (
    <section
      id="invitation"
      className="relative overflow-hidden bg-warm-white py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 arabesque opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="relative border border-gold/30 bg-ivory/70 px-6 py-16 text-center sm:px-14 md:py-20 shadow-xl shadow-burgundy/5">
          {/* Corner borders */}
          <span className="absolute left-3 top-3 size-6 border-l border-t border-gold/60" />
          <span className="absolute right-3 top-3 size-6 border-r border-t border-gold/60" />
          <span className="absolute bottom-3 left-3 size-6 border-b border-l border-gold/60" />
          <span className="absolute bottom-3 right-3 size-6 border-b border-r border-gold/60" />

          <Reveal>
            <Subtitle>Assalamu Alaikum</Subtitle>
            <h2 className="mt-5 text-balance font-serif text-4xl font-light text-burgundy sm:text-5xl">
              With the Blessings of Allah
            </h2>
            <Ornament className="mt-7" />
          </Reveal>

          {/* Inviting Parents Header */}
          <Reveal delay={100}>
            <div className="mx-auto mt-9 max-w-xl">
              <p className="font-serif text-lg italic text-gold sm:text-xl">
                {bride.father} &amp; {bride.mother}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/70">
                {bride.residence}
              </p>
              <p className="mt-1 text-xs tracking-wider text-foreground/60">
                Mob:{" "}
                <a
                  href={`tel:${contact.phone}`}
                  className="font-medium text-burgundy underline hover:text-gold"
                >
                  {contact.phone}
                </a>
              </p>
            </div>
          </Reveal>

          {/* Invitation Message */}
          <Reveal delay={150}>
            <p className="mx-auto mt-8 max-w-lg text-pretty font-serif text-xl leading-relaxed text-foreground/85 sm:text-2xl">
              Request your esteemed presence and blessings for the marriage of
              our beloved daughter
            </p>

            {/* Bride & Groom names: Bride First, Groom Second */}
            <div className="mt-8 flex flex-col items-center">
              <h3 className="font-serif text-4xl font-light text-burgundy sm:text-5xl">
                {bride.fullName}
              </h3>
              <p className="mt-2 max-w-md text-xs italic leading-relaxed text-foreground/60">
                ({bride.grandparents})
              </p>

              <span className="my-3 font-serif text-2xl italic text-gold sm:text-3xl">
                with
              </span>

              <h3 className="font-serif text-4xl font-light text-burgundy sm:text-5xl">
                {groom.fullName}
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground/85">
                S/o. {groom.father} &amp; {groom.mother}
              </p>
              <p className="mt-0.5 text-xs text-foreground/65">
                {groom.residence}
              </p>
              <p className="mt-1 max-w-md text-xs italic leading-relaxed text-foreground/60">
                ({groom.grandparents})
              </p>
            </div>

            <p className="mt-8 font-serif text-2xl italic text-gold">
              &ldquo;Insha Allah&rdquo;
            </p>
          </Reveal>

          {/* Nikah Schedule Summary (Centered, Reception removed) */}
          <Reveal delay={200}>
            <div className="mx-auto mt-8 max-w-md border-t border-b border-gold/25 py-6">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold">
                Nikah Ceremony
              </p>
              <p className="mt-2 font-serif text-2xl font-light text-burgundy">
                {dateLabel.replace(/•/g, "·")}
              </p>
              <p className="text-xs uppercase tracking-wider text-foreground/70">
                {dayLabel} • ({hijriDate})
              </p>
              <p className="mt-3 text-sm font-medium text-foreground/85">
                Nikah: {timeLabel}
              </p>
              <p className="mt-1 text-xs text-foreground/65">
                {venue.name}, {venue.address}
              </p>

              <p className="mt-6 border-t border-gold/15 pt-4 font-serif text-sm italic text-foreground/70">
                With best compliments from :{" "}
                <span className="font-medium text-burgundy">{compliments}</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <Image
              src="/images/floral-branch.png"
              alt=""
              aria-hidden="true"
              width={520}
              height={180}
              className="blend-floral mx-auto mt-10 w-64 sm:w-80"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
