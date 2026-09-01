import { weddingData } from "@/data/wedding";

export default function Footer() {
  return (
    <footer className="py-12 bg-wedding-dark text-wedding-bg flex flex-col items-center text-center px-6">
      <p className="font-serif italic text-lg text-wedding-accent mb-4">With love</p>
      
      <div className="font-serif text-xl mb-4 text-wedding-bg/90">
        {weddingData.couple.first} <span className="text-wedding-accent italic">&</span> {weddingData.couple.second}
      </div>
      
      <p className="font-sans text-xs tracking-[0.2em] text-wedding-bg/60 uppercase">
        {weddingData.dateLabel}
      </p>
    </footer>
  );
}
