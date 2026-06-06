import { Terminal } from "lucide-react";
import SpotlightCard from "../shared/SpotlightCard";

export default function PhilosophyCard() {
  return (
    <SpotlightCard className="!p-0 border-primary/20">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-secondary/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
        </div>
        <div className="ml-4 flex items-center gap-2">
          <Terminal className="w-3 h-3 text-foreground/40" />
          <span className="text-[10px] font-mono text-foreground/40 tracking-wider">philosophy.exe</span>
        </div>
      </div>
      <div className="p-8 md:p-10">
        <div className="absolute top-10 right-10 text-6xl font-serif text-primary/10 select-none">&ldquo;</div>
        <p className="text-xl md:text-2xl font-bold leading-tight text-foreground tracking-tight mb-8">
          Bagi saya, dunia IT bukan sekadar tentang hardware atau jaringan. Ini adalah tentang <span className="text-primary">menghapus hambatan</span>.
        </p>
        <div className="space-y-6">
          <p className="text-base md:text-lg leading-relaxed text-foreground/60">
            Selama pengalaman saya di bidang IT Support, saya belajar bahwa setiap kendala teknis yang dihadapi pengguna adalah waktu yang hilang dari produktivitas mereka.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-border/50 via-border/10 to-transparent" />
          <p className="text-base md:text-lg leading-relaxed text-foreground/60">
            Fokus saya adalah memastikan teknologi bekerja di belakang layar agar orang-orang di depan layar dapat bekerja dengan efektif, tenang, dan tanpa gangguan.
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
}