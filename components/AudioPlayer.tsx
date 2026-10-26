"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    const tryPlay = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          window.removeEventListener("pointerdown", tryPlay);
          window.removeEventListener("touchstart", tryPlay);
          window.removeEventListener("keydown", tryPlay);
        })
        .catch(() => {
          // Browser prevented autoplay before interaction
        });
    };

    tryPlay();

    window.addEventListener("pointerdown", tryPlay);
    window.addEventListener("touchstart", tryPlay);
    window.addEventListener("keydown", tryPlay);

    return () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("keydown", tryPlay);
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true));
    } else {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/anlatmam.mp3"
        autoPlay
        loop
        preload="auto"
        playsInline
        aria-label="Background wedding music"
      />

      {/* Subtle audio controller floating pill */}
      <button
        type="button"
        onClick={toggleSound}
        className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-gold/40 bg-ivory/80 text-burgundy shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-gold hover:bg-ivory"
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        title={isMuted ? "Unmute audio" : "Mute audio"}
      >
        {isMuted ? (
          <VolumeX className="size-5" />
        ) : (
          <Volume2 className={`size-5 ${isPlaying ? "animate-pulse" : ""}`} />
        )}
      </button>
    </>
  );
}
