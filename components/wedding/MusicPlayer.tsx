"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer({ isPlaying, toggleMusic }: { isPlaying: boolean, toggleMusic: () => void }) {
  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Toggle music"
      >
        {isPlaying ? <Pause size={20} /> : <Music size={20} />}
      </motion.button>
    </AnimatePresence>
  );
}
