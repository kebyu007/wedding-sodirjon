"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isReady, setIsReady] = useState(false);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const target = weddingData.date.getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsOver(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
      setIsReady(true);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isReady) return null; // Avoid hydration mismatch

  return (
    <section className="py-24 bg-wedding-bg text-wedding-dark flex flex-col items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl mx-auto px-6 flex flex-col items-center"
      >
        <h3 className="font-serif text-3xl md:text-4xl text-wedding-dark mb-10 text-center leading-relaxed">
          Har bir lahzani <br className="md:hidden" />
          <span className="text-wedding-accent italic">sanayapmiz</span>
        </h3>

        {isOver ? (
          <div className="text-center my-10">
            <h4 className="font-serif text-2xl text-wedding-accent mb-4">
              Bugun bizning baxtli kunimiz!
            </h4>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 md:gap-6 mb-12 w-full">
            <TimeUnit value={timeLeft.days} label="KUN" />
            <Divider />
            <TimeUnit value={timeLeft.hours} label="SOAT" />
            <Divider />
            <TimeUnit value={timeLeft.minutes} label="DAQIQA" />
            <Divider />
            <TimeUnit value={timeLeft.seconds} label="SONIYA" />
          </div>
        )}

        <div className="flex flex-col items-center">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-wedding-accent mb-4"
          >
            <Heart strokeWidth={1} size={32} />
          </motion.div>
          <p className="font-sans text-xs tracking-[0.25em] text-wedding-muted uppercase">
            Sizni kutamiz
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center w-16 md:w-24">
      <span className="font-serif text-3xl md:text-5xl text-wedding-dark tracking-widest mb-3">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-sans text-[9px] md:text-xs tracking-[0.2em] text-wedding-muted">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="font-serif text-2xl md:text-4xl text-wedding-accent/50 -mt-6">
      :
    </div>
  );
}
