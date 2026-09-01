"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % weddingData.gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + weddingData.gallery.length) % weddingData.gallery.length);
  };

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-wedding-bg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        {/* First Image - Large */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-3/5 aspect-[3/4] md:aspect-[4/5] overflow-hidden cursor-pointer group rounded-sm shadow-sm"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={weddingData.gallery[0].src}
            alt={weddingData.gallery[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>

        {/* Second Image - Small and offset */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-4/5 md:w-2/5 aspect-[3/4] overflow-hidden cursor-pointer group md:-mt-32 rounded-sm shadow-md"
          onClick={() => openLightbox(1)}
        >
          <Image
            src={weddingData.gallery[1].src}
            alt={weddingData.gallery[1].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 80vw, 40vw"
          />
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50 transition-colors"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-12 text-white/70 hover:text-white p-4 z-50 transition-colors"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-4xl aspect-[3/4] md:aspect-auto md:h-[85vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={weddingData.gallery[currentIndex].src}
                alt={weddingData.gallery[currentIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-12 text-white/70 hover:text-white p-4 z-50 transition-colors"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
