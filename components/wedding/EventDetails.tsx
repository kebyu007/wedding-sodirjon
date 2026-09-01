"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function EventDetails() {
  return (
    <section id="location" className="py-24 px-6 flex flex-col items-center bg-wedding-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-full max-w-xl mx-auto border border-wedding-muted/20 p-10 md:p-16 flex flex-col items-center text-center relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-wedding-bg px-4">
          <span className="font-sans text-xs tracking-[0.2em] text-wedding-accent uppercase">
            To‘y marosimi
          </span>
        </div>

        <h3 className="font-serif text-3xl text-wedding-dark mb-8 mt-4">
          {weddingData.dateLabel}
        </h3>
        
        <p className="font-sans text-lg text-wedding-dark tracking-widest mb-6">
          {weddingData.time}
        </p>

        <div className="w-8 h-[1px] bg-wedding-accent/50 mb-6" />

        <h4 className="font-serif text-2xl text-wedding-dark mb-2">
          {weddingData.venue}
        </h4>
        <p className="font-sans text-sm text-wedding-muted mb-10">
          {weddingData.address}
        </p>

        <a 
          href={weddingData.mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-8 py-4 bg-wedding-dark text-wedding-bg font-sans text-xs tracking-[0.2em] uppercase hover:bg-wedding-accent transition-colors duration-500"
        >
          <MapPin size={16} className="group-hover:animate-bounce" />
          Yo‘lni ko‘rish
        </a>
      </motion.div>
    </section>
  );
}
