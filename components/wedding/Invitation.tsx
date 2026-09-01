"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function Invitation() {
  return (
    <section id="story" className="py-24 md:py-32 px-6 flex flex-col items-center text-center bg-wedding-bg">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        <span className="font-sans text-xs tracking-[0.2em] text-wedding-accent uppercase mb-6">
          Taklifnoma
        </span>
        
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed text-wedding-dark mb-10">
          "Bizning eng baxtli kunimizda sizni ham kutib qolamiz."
        </h2>
        
        <div className="w-12 h-[1px] bg-wedding-muted/30 mb-10" />

        <div className="font-serif text-2xl md:text-3xl text-wedding-dark mb-4">
          {weddingData.couple.first} <span className="text-wedding-accent italic">&</span> {weddingData.couple.second}
        </div>

        <div className="flex flex-col items-center gap-2 font-sans text-sm md:text-base text-wedding-muted tracking-widest mt-6">
          <p className="uppercase">{weddingData.weekday} &middot; {weddingData.dateLabel}</p>
          <p>{weddingData.time}</p>
        </div>
      </motion.div>
    </section>
  );
}
