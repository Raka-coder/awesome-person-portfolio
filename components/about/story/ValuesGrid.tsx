"use client";
import { Code2, Server, Lightbulb, Heart } from "lucide-react";
import SpotlightCard from "../shared/SpotlightCard";

const values = [
  { icon: Code2, title: "Code Quality", desc: "Clean, maintainable, scalable" },
  { icon: Server, title: "Infrastructure", desc: "Reliable, secure, performant" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Creative solutions to complex challenges" },
  { icon: Heart, title: "User First", desc: "Technology that serves people" },
];

export default function ValuesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {values.map((value, index) => (
        <SpotlightCard key={value.title} index={index} className="!p-6 text-center group/value">
          <div className="absolute top-3 right-3 text-[10px] font-mono text-foreground/20 group-hover/value:text-primary/30 transition-colors">
            0{index + 1}
          </div>
          <div className="inline-flex p-4 rounded-2xl bg-secondary/50 text-foreground/40 mb-6 group-hover/value:bg-primary/10 group-hover/value:text-primary transition-all duration-300">
            <value.icon className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-foreground mb-2 tracking-tight group-hover/value:text-primary transition-colors">{value.title}</h4>
          <p className="text-xs text-foreground/50 leading-relaxed">{value.desc}</p>
        </SpotlightCard>
      ))}
    </div>
  );
}