"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlightAnimation } from "@/components/FlightAnimation";
import { BoardingPass } from "@/components/BoardingPass";
import { InvitationCard } from "@/components/InvitationCard";
import { Couple } from "@/components/Couple";
import { Countdown } from "@/components/Countdown";
import { Venue } from "@/components/Venue";
import { Footer } from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document
        .getElementById("boarding-pass")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen]);

  return (
    <main className="relative">
      <FlightAnimation />
      <AudioPlayer />
      <Navbar />
      <Hero onOpenInvitation={() => setIsOpen(true)} />
      {isOpen && (
        <>
          <BoardingPass />
          <InvitationCard />
          <Couple />
          <Countdown />
          <Venue />
          <Footer />
        </>
      )}
    </main>
  );
}
