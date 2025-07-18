"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import CardSkills from "@/components/CardSkills";
import TabsExperience from "@/components/TabsExperience";

export default function AnimatedAboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-12 pt-20 md:pt-12"
    >
      <div className="max-w-full sm:max-w-5xl px-2 sm:px-0">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
        >
          About Me
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 font-medium text-center"
        >
          Find out a lot about me
        </motion.h2>

        <Card className="mb-6 md:mb-0">
          <CardContent>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-full sm:max-w-4xl px-2 sm:px-4 text-justify">
              Hello! I'm Raka, a passionate IT Support based in Indonesia. I am an information technology student with experience in IT support. I have experience handling technical issues such as network and hardware maintenance. This experience has prepared me for technical development and team contributions.
              I am also ready to learn new technical skills relevant to the industry.
            </p>
          </CardContent>
        </Card>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 md:pt-8 font-medium text-center"
        >
          Skill & Expertise
        </motion.h2>

        <CardSkills />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 md:pt-8 font-medium text-center"
        >
          Experience
        </motion.h2>

        <TabsExperience />
      </div>
    </motion.div>
  );
}
