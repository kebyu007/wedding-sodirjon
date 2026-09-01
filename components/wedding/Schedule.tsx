"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-wedding-bg relative flex flex-col items-center overflow-hidden">
      {/* Decorative timeline line: left edge on mobile, center on desktop */}
      <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[1px] bg-wedding-accent/30 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 bg-wedding-bg px-6 pb-16 text-center"
      >
        <span className="font-sans text-xs tracking-[0.2em] text-wedding-accent uppercase">
          Dastur
        </span>
      </motion.div>

      <div className="w-full max-w-4xl px-6 flex flex-col gap-12 md:gap-16 relative z-10">
        {weddingData.schedule.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot: left edge on mobile, center on desktop */}
              <div className="absolute left-2 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-wedding-bg rounded-full border-2 border-wedding-accent z-10" />

              {/* Content container */}
              <div className={`w-full md:w-1/2 flex flex-col pl-10 md:pl-0 ${isEven ? "md:items-start md:pl-16 md:text-left" : "md:items-end md:pr-16 md:text-right"} items-start text-left`}>
                <span className="font-serif text-3xl text-wedding-accent mb-2">
                  {item.time}
                </span>
                <h4 className="font-serif text-2xl text-wedding-dark mb-2">
                  {item.title}
                </h4>
                <p className="font-sans text-sm text-wedding-muted max-w-[250px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
