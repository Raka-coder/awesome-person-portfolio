import { Card, CardContent } from "./ui/card";
import { skills } from "@/data/skills";
import { Skill } from "@/types/skills";
import { motion } from "framer-motion";

export default function CardSkills() {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-8 px-2 sm:px-0">
      {skills.map((skill: Skill) => (
        <Card key={skill.name} className="w-full sm:w-auto min-w-[200px]">
          <CardContent>
            <div className="flex items-center gap-4">
              <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300" />
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-base sm:text-lg font-semibold"
                >
                  {skill.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xs sm:text-sm text-slate-400"
                >
                  {skill.description}
                </motion.p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
