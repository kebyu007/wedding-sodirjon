"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src={weddingData.heroImage}
          alt="Wedding Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Elegant overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-wedding-bg drop-shadow-lg tracking-wide">
            {weddingData.couple.first}
          </h1>
          
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="font-serif italic text-4xl md:text-6xl text-wedding-accent my-2 drop-shadow-md"
          >
            &
          </motion.span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-wedding-bg drop-shadow-lg tracking-wide">
            {weddingData.couple.second}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="h-12 w-[1px] bg-wedding-bg/50" />
          <p className="font-sans text-sm md:text-base text-wedding-bg tracking-[0.3em] font-light drop-shadow-md">
            {weddingData.dateLabel}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
