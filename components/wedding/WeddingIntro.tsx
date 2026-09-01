"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lock, Unlock, Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";

interface WeddingIntroProps {
  onOpen: () => void;
}

export default function WeddingIntro({ onOpen }: WeddingIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleOpen = () => {
    setIsUnlocking(true);
    // Short delay to show the unlock icon before fading out
    setTimeout(() => {
      setIsOpen(true);
      onOpen();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111] text-white overflow-hidden"
        >
          {/* Blurred Background Image matching the screenshot's depth */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-110"
            style={{ 
              backgroundImage: `url(${weddingData.heroImage})`,
              filter: "blur(15px)"
            }}
          ></div>
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

          <div className="relative z-10 flex flex-col items-center mt-[-10vh]">
            {/* Elegant Vertical Line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 80 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="w-[1px] bg-white/70 mb-4"
            />

            {/* Heart Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
              className="mb-8"
            >
              <Heart fill="currentColor" size={18} className="text-white" />
            </motion.div>

            {/* Main Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center font-serif text-[28px] md:text-4xl tracking-[0.15em] leading-[1.4] mb-16"
            >
              <span>SIZGA</span>
              <span>TAKLIFNOMA</span>
              <span>KELDI</span>
            </motion.div>

            {/* Interactive Lock Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              onClick={handleOpen}
              className="w-[72px] h-[72px] rounded-full border-[1.5px] border-white/60 flex items-center justify-center mb-6 relative group transition-colors hover:bg-white/10"
            >
              {/* Subtle pulsing ring to indicate it's clickable */}
              <div className="absolute inset-0 rounded-full border border-white/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              
              <motion.div
                initial={false}
                animate={{ scale: isUnlocking ? 1.2 : 1, opacity: isUnlocking ? 0 : 1 }}
                className="absolute"
              >
                <Lock size={22} strokeWidth={1.5} className="text-white" />
              </motion.div>

              <motion.div
                initial={false}
                animate={{ scale: isUnlocking ? 1 : 0.5, opacity: isUnlocking ? 1 : 0 }}
                className="absolute"
              >
                <Unlock size={22} strokeWidth={1.5} className="text-white" />
              </motion.div>
            </motion.button>

            {/* Helper Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.6 }}
              className="font-sans text-xs md:text-sm tracking-[0.1em] text-white/60 text-center font-light leading-relaxed"
            >
              Qulfchani bosib,<br />taklifnomani oching
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
