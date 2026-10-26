"use client";

import React from "react";
import { Plane, Compass, HeartHandshake, MapPin } from "lucide-react";
import { Ornament, Subtitle } from "./Ornament";
import { Reveal } from "./Reveal";

export function Story() {
  const flightMilestones = [
    {
      icon: Compass,
      stage: "Departure",
      title: "Roots & Origins",
      location: "Nedumpana & Umayanalloor",
      desc: "Two distinct paths destined to meet, nurtured by family values and blessed beginnings.",
    },
    {
      icon: HeartHandshake,
      stage: "In Flight",
      title: "Written in Destiny",
      location: "Guided by Faith",
      desc: "What began with a quiet meeting blossomed into deep understanding, shared dreams, and lifelong companionship.",
    },
    {
      icon: Plane,
      stage: "Arrival",
      title: "Destination Forever",
      location: "Ayisha Convention Centre",
      desc: "With grateful hearts and the blessings of Allah, we touch down into our new life together as one.",
    },
  ];

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-warm-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-sky-700">
            <Plane className="size-3.5 text-sky-600 rotate-45" />
            <span>Flight Itinerary</span>
          </div>
          <h2 className="mt-4 text-balance font-serif text-4xl font-light text-burgundy sm:text-5xl">
            Our Journey Together
          </h2>
          <Ornament className="mt-7" />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-pretty font-serif text-xl leading-relaxed text-foreground/80 sm:text-2xl">
            Just like every great voyage begins with a single step, our journey
            together is chartered by faith, family blessings, and endless love.
          </p>
        </Reveal>

        {/* Travel Timeline Itinerary Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {flightMilestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 150}>
                <div className="group relative flex h-full flex-col items-center rounded-xl border border-gold/30 bg-ivory/80 p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl">
                  <div className="flex size-14 items-center justify-center rounded-full border border-gold/40 bg-warm-white text-sky-700 shadow-sm transition-transform group-hover:scale-110">
                    <Icon className="size-6" />
                  </div>
                  <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-sky-600 font-bold">
                    {item.stage}
                  </span>
                  <h3 className="mt-1 font-serif text-xl text-burgundy font-medium">
                    {item.title}
                  </h3>
                  <span className="mt-1 flex items-center gap-1 text-xs font-sans text-gold">
                    <MapPin className="size-3" />
                    <span>{item.location}</span>
                  </span>
                  <p className="mt-3 text-xs leading-relaxed text-foreground/70">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
