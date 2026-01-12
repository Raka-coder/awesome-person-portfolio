import { Card, CardContent } from "./ui/card";
import { skills } from "@/data/skills";
import { Skill } from "@/types/skills";
import { motion } from "framer-motion";

export default function CardSkills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-2 sm:px-0">
      {skills.map((skill: Skill) => (
        <Card key={skill.name} className="bg-card border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <skill.icon className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-slate-100">
                  {skill.name}
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                {skill.items?.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-start"
                  >
                    <img
                      src={item.badge}
                      alt={item.name}
                      className="h-8 object-contain"
                    />
                  </motion.div>
                ))}
              </div>

              {skill.description && (
                <p className="text-xs text-slate-400 mt-2 italic">
                  {skill.description}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
