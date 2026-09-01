"use client";

import { motion } from "framer-motion";
import { Home, Heart, MapPin, Calendar, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past the hero section (roughly 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-[#1C1B19]/80 backdrop-blur-xl border border-white/10 shadow-2xl text-white/90">
        <button onClick={() => scrollTo("top")} className="p-2 hover:text-wedding-accent transition-colors">
          <Home size={18} strokeWidth={1.5} />
        </button>
        <button onClick={() => scrollTo("story")} className="p-2 hover:text-wedding-accent transition-colors">
          <Heart size={18} strokeWidth={1.5} />
        </button>
        <button onClick={() => scrollTo("schedule")} className="p-2 hover:text-wedding-accent transition-colors">
          <Calendar size={18} strokeWidth={1.5} />
        </button>
        <button onClick={() => scrollTo("gallery")} className="p-2 hover:text-wedding-accent transition-colors">
          <ImageIcon size={18} strokeWidth={1.5} />
        </button>
        <button onClick={() => scrollTo("location")} className="p-2 hover:text-wedding-accent transition-colors">
          <MapPin size={18} strokeWidth={1.5} />
        </button>
      </div>
    </motion.div>
  );
}
