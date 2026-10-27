"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plane, MapPin, Calendar, Clock, Phone, Sparkles, Download, ExternalLink } from "lucide-react";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";
import { weddingData } from "@/lib/data";

export function BoardingPass() {
  const [showOriginalModal, setShowOriginalModal] = useState(false);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Wedding: Alsad Subair & Safna Navas"
  )}&dates=20270103T063000Z/20270103T070000Z&details=${encodeURIComponent(
    "Nikah ceremony between 12:00 PM and 12:30 PM at Ayisha Convention Centre, Mylapore, Kollam."
  )}&location=${encodeURIComponent(
    "Ayisha Convention Centre, Mylapore, Kollam, Kerala"
  )}`;

  return (
    <section
      id="boarding-pass"
      className="relative overflow-hidden bg-warm-white py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 arabesque opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-4 py-1 text-xs font-sans uppercase tracking-[0.25em] text-sky-800 shadow-sm">
            <Plane className="size-3.5 text-sky-600 rotate-45" />
            <span>Flight AS-2027 • Boarding Pass</span>
          </div>
          <h2 className="mt-4 text-balance font-serif text-4xl font-light text-burgundy sm:text-5xl">
            Boarding Pass to Forever
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-foreground/75">
            Inspired by our journey in Travel &amp; Tourism — your boarding pass to join our wedding celebration!
          </p>
          <Ornament className="mt-6" />
        </Reveal>

        {/* Boarding Pass Ticket Container */}
        <Reveal delay={150} className="mt-12">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border-2 border-sky-400/40 bg-white shadow-2xl shadow-burgundy/10">
            {/* World Map Watermark Background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07] bg-repeat"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'200\' viewBox=\'0 0 400 200\'%3E%3Cpath fill=\'%23000\' d=\'M50 40 Q80 20 110 50 T180 60 Q210 30 250 50 T320 40 Q350 70 320 100 T260 130 Q220 150 180 130 T110 120 Q70 140 50 100 Z M190 70 Q200 65 210 70 T215 85 Q205 90 195 85 Z\'/%3E%3C/svg%3E")',
                backgroundSize: "320px 160px",
              }}
            />

            {/* Top Header Strip */}
            <div className="border-b border-sky-100 bg-gradient-to-r from-sky-500/10 via-amber-500/10 to-sky-500/10 px-6 py-3 text-center">
              <p className="font-arabic text-sm text-gold">Assalamū Alaikūm</p>
              <p className="font-serif text-xs italic text-foreground/75">
                In the name of Allah, the most beneficent and merciful
              </p>
            </div>

            {/* Main Ticket Layout: Left Content & Right Stub */}
            <div className="relative flex flex-col lg:flex-row">
              {/* Left Accent Slanted Wing (Blue Brand Tag) */}
              <div className="relative hidden w-28 shrink-0 bg-gradient-to-b from-sky-500 to-sky-600 p-4 text-white sm:flex sm:flex-col sm:items-center sm:justify-between">
                <div className="size-12 rounded-full border-2 border-white/60 flex items-center justify-center font-arabic text-xl">
                  ﷽
                </div>
                <div className="rotate-180 [writing-mode:vertical-rl] font-serif text-lg tracking-[0.25em] font-light">
                  ALSAD &amp; SAFNA
                </div>
                <Plane className="size-6 text-white/80 rotate-45" />
              </div>

              {/* Main Flight Info */}
              <div className="flex-1 p-6 sm:p-8">
                {/* Header Route: Alsad First, Safna Second */}
                <div className="flex flex-wrap items-center justify-between border-b border-dashed border-neutral-300 pb-5 gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl font-bold tracking-wider text-burgundy sm:text-3xl">
                      ALSAD SUBAIR
                    </span>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-sky-100 text-sky-700">
                      <Plane className="size-4 animate-pulse rotate-45" />
                    </div>
                    <span className="font-serif text-2xl font-bold tracking-wider text-burgundy sm:text-3xl">
                      SAFNA NAVAS
                    </span>
                  </div>

                  <span className="rounded-md border border-neutral-300 px-3 py-1 font-mono text-xs uppercase tracking-wider text-neutral-600 bg-neutral-50">
                    FLT: AS-2027
                  </span>
                </div>

                <div className="mt-4 text-xs font-sans uppercase tracking-[0.2em] text-neutral-500">
                  Name of Passengers • Request the honour of your presence
                </div>

                {/* Two Passengers Grid: Alsad First (Passenger 01), Safna Second (Passenger 02) */}
                <div className="mt-4 grid gap-6 border-b border-neutral-200 pb-6 sm:grid-cols-2">
                  {/* Passenger 1: Alsad (Groom) */}
                  <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/60 p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-burgundy">
                        ALSAD
                      </span>
                      <span className="text-[10px] font-mono uppercase text-sky-600 font-semibold bg-sky-50 px-2 py-0.5 rounded">
                        Groom / Passenger 01
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-foreground/85">
                      S/o {weddingData.groom.father} &amp; {weddingData.groom.mother}
                    </p>
                    <p className="text-xs text-foreground/65">
                      {weddingData.groom.residence}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-mono text-sky-700">
                      <Phone className="size-3 shrink-0" />
                      <a href={`tel:${weddingData.groom.phone}`} className="hover:underline">
                        {weddingData.groom.phone}
                      </a>
                      <span>•</span>
                      <a href={`tel:${weddingData.groom.altPhone}`} className="hover:underline">
                        {weddingData.groom.altPhone}
                      </a>
                    </div>
                  </div>

                  {/* Passenger 2: Safna (Bride) */}
                  <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/60 p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-burgundy">
                        SAFNA
                      </span>
                      <span className="text-[10px] font-mono uppercase text-sky-600 font-semibold bg-sky-50 px-2 py-0.5 rounded">
                        Bride / Passenger 02
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-foreground/85">
                      D/o {weddingData.bride.father} &amp; {weddingData.bride.mother}
                    </p>
                    <p className="text-xs text-foreground/65">
                      {weddingData.bride.residence}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-mono text-sky-700">
                      <Phone className="size-3 shrink-0" />
                      <a href={`tel:${weddingData.bride.phone}`} className="hover:underline">
                        {weddingData.bride.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Destination & Timings */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-sky-600 font-semibold">
                      <MapPin className="size-3.5 text-sky-600" />
                      <span>Destination</span>
                    </div>
                    <h3 className="mt-1 font-serif text-2xl font-light text-burgundy sm:text-3xl">
                      {weddingData.venue.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-neutral-600">
                      {weddingData.venue.address}, {weddingData.venue.city}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 sm:text-right">
                    <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-gold sm:justify-end">
                      <Clock className="size-3.5 text-gold" />
                      <span>Departure &amp; Ceremony</span>
                    </div>
                    <p className="font-serif text-base font-medium text-burgundy">
                      Departure: @ {weddingData.departureTime}
                    </p>
                    <p className="text-xs font-medium text-foreground/80">
                      Nikah: {weddingData.timeLabel}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4 text-[11px] text-neutral-500">
                  <span className="italic font-serif text-gold">Insha Allah</span>
                  <span>Sharing the happiness • Relatives &amp; Friends</span>
                </div>
              </div>

              {/* Perforated Divider */}
              <div className="relative hidden w-0 border-r-2 border-dashed border-neutral-300 lg:block">
                <div className="absolute -top-3 -left-3 size-6 rounded-full bg-warm-white border border-neutral-300/60" />
                <div className="absolute -bottom-3 -left-3 size-6 rounded-full bg-warm-white border border-neutral-300/60" />
              </div>

              {/* Right Tear-Off Stub (Boarding Pass Stub) */}
              <div className="relative border-t-2 border-dashed border-neutral-300 bg-neutral-50/70 p-6 lg:w-72 lg:border-t-0 lg:border-l-0">
                {/* Date Header Badge */}
                <div className="rounded-xl bg-sky-500 px-4 py-4 text-center text-white shadow-md">
                  <span className="block text-[11px] font-sans uppercase tracking-[0.2em] font-medium text-sky-100">
                    {weddingData.dayLabel}
                  </span>
                  <span className="block font-serif text-4xl font-bold leading-tight">
                    03
                  </span>
                  <span className="block text-xs uppercase tracking-wider font-semibold">
                    JANUARY 2027
                  </span>
                  <span className="mt-1 block text-[10px] text-sky-100">
                    ({weddingData.hijriDate})
                  </span>
                </div>

                {/* Circular Rubber Stamp: "You are invited to the ceremony - ALSAD & SAFNA" */}
                <div className="relative my-6 flex justify-center">
                  <div className="relative flex size-28 -rotate-12 items-center justify-center rounded-full border-2 border-dashed border-red-700/60 p-2 text-center text-red-800/80 shadow-sm transition-transform hover:rotate-0">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[8px] uppercase tracking-tighter leading-tight font-semibold">
                        You are invited to the ceremony
                      </span>
                      <span className="my-0.5 font-serif text-xs font-bold uppercase tracking-wider text-red-900">
                        ALSAD &amp; SAFNA
                      </span>
                      <span className="text-[7px] tracking-widest font-mono">
                        ★ OFFICIAL PASS ★
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Wish */}
                <div className="text-center">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-neutral-700">
                    HAVE A NICE TRIP
                  </p>
                  <p className="mt-1 text-[11px] italic text-neutral-500">
                    Destination: Happily Ever After
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 bg-neutral-100/70 px-6 py-4">
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <Sparkles className="size-4 text-amber-500" />
                <span>Special Tourism &amp; Travel Themed Wedding Pass</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50"
                >
                  <Calendar className="size-3.5 text-sky-600" />
                  <span>Add to Calendar</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowOriginalModal(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-burgundy px-4 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-deep-burgundy"
                >
                  <ExternalLink className="size-3.5" />
                  <span>View Printed Pass</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Modal to view client's printed card image */}
        {showOriginalModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setShowOriginalModal(false)}
          >
            <div
              className="relative max-w-2xl overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b pb-2 px-2">
                <h4 className="font-serif text-lg text-burgundy">
                  Original Boarding Pass Wedding Card
                </h4>
                <button
                  onClick={() => setShowOriginalModal(false)}
                  className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100"
                >
                  ✕
                </button>
              </div>
              <div className="mt-2 overflow-hidden rounded-xl">
                <Image
                  src="/images/travel-card.jpg"
                  alt="Alsad & Safna Travel Wedding Card"
                  width={1000}
                  height={500}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="mt-3 flex justify-end px-2">
                <a
                  href="/images/travel-card.jpg"
                  download="Alsad_Safna_Boarding_Pass.jpg"
                  className="inline-flex items-center gap-2 rounded-lg bg-burgundy px-4 py-2 text-xs font-medium text-white hover:bg-deep-burgundy"
                >
                  <Download className="size-3.5" />
                  <span>Download Card Image</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
