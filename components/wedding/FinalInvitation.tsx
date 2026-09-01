"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function FinalInvitation() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={weddingData.heroImage}
          alt="Wedding Hero Blurred"
          fill
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-wedding-dark/80 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-wedding-bg mb-12 drop-shadow-md">
          Sizni kutamiz
        </h2>

        <div className="font-serif text-2xl md:text-3xl text-wedding-bg mb-6">
          {weddingData.couple.first} <span className="text-wedding-accent italic">&</span> {weddingData.couple.second}
        </div>

        <p className="font-sans text-sm md:text-base tracking-[0.3em] text-wedding-bg/80 mb-12 uppercase">
          {weddingData.dateLabel}
        </p>

        <h3 className="font-serif text-2xl text-wedding-bg mb-8">
          {weddingData.venue}
        </h3>

        <a 
          href={weddingData.mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-8 py-4 border border-wedding-bg/50 text-wedding-bg font-sans text-xs tracking-[0.2em] uppercase hover:bg-wedding-bg hover:text-wedding-dark transition-all duration-500"
        >
          <MapPin size={16} className="group-hover:animate-bounce" />
          Yo‘lni ko‘rish
        </a>
      </motion.div>
    </section>
  );
}
