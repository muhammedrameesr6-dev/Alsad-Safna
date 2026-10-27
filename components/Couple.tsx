"use client";

import React from "react";
import { Ornament, Subtitle } from "./Ornament";
import { Reveal } from "./Reveal";
import { weddingData } from "@/lib/data";

interface PersonCardProps {
  role: string;
  name: string;
  parents: string;
  residence: string;
  grandparents: string;
  initial: string;
}

function PersonCard({
  role,
  name,
  parents,
  residence,
  grandparents,
  initial,
}: PersonCardProps) {
  return (
    <div className="group relative flex flex-col items-center border border-gold/30 bg-warm-white px-8 py-12 text-center transition-all duration-500 hover:border-gold/70 hover:shadow-xl hover:shadow-burgundy/5">
      <div className="flex size-28 items-center justify-center rounded-full border border-gold/50 bg-ivory transition-transform duration-500 group-hover:scale-105">
        <span className="font-serif text-5xl text-burgundy">{initial}</span>
      </div>
      <p className="mt-6 font-sans text-xs uppercase tracking-[0.35em] text-gold">
        {role}
      </p>
      <h3 className="mt-3 font-serif text-3xl text-burgundy sm:text-4xl">
        {name}
      </h3>
      <span className="mt-4 h-px w-12 bg-gold/50" />
      <p className="mt-4 text-sm font-medium leading-relaxed text-foreground/85">
        {parents}
      </p>
      <p className="mt-1 text-xs text-foreground/65">{residence}</p>
      <p className="mt-3 text-xs italic leading-relaxed text-foreground/60">
        ({grandparents})
      </p>
    </div>
  );
}

export function Couple() {
  const { groom, bride } = weddingData;

  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <Subtitle>The Blessed Union</Subtitle>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light text-burgundy sm:text-5xl">
            Two Hearts, One Journey
          </h2>
          <Ornament className="mt-7" />
        </Reveal>

        <div className="mt-14 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          {/* Alsad First */}
          <Reveal delay={100}>
            <PersonCard
              role="The Groom"
              name={groom.fullName}
              parents={`Son of ${groom.father} & ${groom.mother}`}
              residence={groom.residence}
              grandparents={groom.grandparents}
              initial={groom.name.charAt(0)}
            />
          </Reveal>

          <Reveal delay={200} className="flex justify-center">
            <span className="font-serif text-5xl italic text-gold md:text-6xl">
              &amp;
            </span>
          </Reveal>

          {/* Safna Second */}
          <Reveal delay={300}>
            <PersonCard
              role="The Bride"
              name={bride.fullName}
              parents={`Daughter of ${bride.father} & ${bride.mother}`}
              residence={bride.residence}
              grandparents={bride.grandparents}
              initial={bride.name.charAt(0)}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
