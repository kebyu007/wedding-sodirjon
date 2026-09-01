"use client";

import { useState, useRef, useEffect } from "react";
import WeddingIntro from "@/components/wedding/WeddingIntro";
import Hero from "@/components/wedding/Hero";
import Invitation from "@/components/wedding/Invitation";
import Countdown from "@/components/wedding/Countdown";
import EventDetails from "@/components/wedding/EventDetails";
import Schedule from "@/components/wedding/Schedule";
import Gallery from "@/components/wedding/Gallery";
import FinalInvitation from "@/components/wedding/FinalInvitation";
import Footer from "@/components/wedding/Footer";
import FloatingNav from "@/components/wedding/FloatingNav";
import MusicPlayer from "@/components/wedding/MusicPlayer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio("/audio/wedding.mp3");
    audioRef.current.loop = true;
    
    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Play might fail if file doesn't exist, handle gracefully
      audioRef.current.play().catch(() => {
        console.warn("Audio file not found or playback prevented.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleOpenInvitation = () => {
    setHasOpened(true);
    // Start music on first interaction
    toggleMusic();
  };

  return (
    <main className="relative min-h-screen">
      <WeddingIntro onOpen={handleOpenInvitation} />
      
      {hasOpened && <MusicPlayer isPlaying={isPlaying} toggleMusic={toggleMusic} />}
      
      {/* Scrollable Content */}
      <div className={!hasOpened ? "h-[100vh] overflow-hidden" : ""}>
        <Hero />
        <Invitation />
        <Countdown />
        <EventDetails />
        <Schedule />
        <Gallery />
        <FinalInvitation />
        <Footer />
      </div>

      {hasOpened && <FloatingNav />}
    </main>
  );
}
