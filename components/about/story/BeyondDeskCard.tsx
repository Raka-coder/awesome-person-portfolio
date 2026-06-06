import { Lightbulb } from "lucide-react";
import SpotlightCard from "../shared/SpotlightCard";

export default function BeyondDeskCard() {
  return (
    <SpotlightCard className="flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
          <Lightbulb className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-foreground tracking-tight">Beyond the Desk</h3>
      </div>
      <div className="space-y-6 flex-1">
        <p className="text-base md:text-lg leading-relaxed text-foreground/60">
          Di luar jam kerja, saya adalah seorang pembelajar yang antusias. Saya percaya bahwa teknologi selalu berkembang, dan kemampuan untuk beradaptasi adalah keterampilan teknis terpenting yang saya miliki.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-foreground/60">
          Saya selalu terbuka untuk berdiskusi tentang teknologi baru, atau sekadar berbagi rekomendasi hal-hal menarik yang sedang saya pelajari.
        </p>
      </div>
      <div className="mt-12 pt-8 border-t border-border/30 flex items-center justify-between">
        <div className="flex -space-x-3">
           {[1,2,3].map(i => (
             <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary/80 flex items-center justify-center">
               <span className="text-[10px] font-bold">0{i}</span>
             </div>
           ))}
        </div>
        <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Active Learner</span>
      </div>
    </SpotlightCard>
  );
}