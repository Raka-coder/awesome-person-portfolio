"use client";
import { ProjectTabs } from '@/components/ProjectsTablist';
import { projectsData } from '@/data/projects';
import { motion } from 'framer-motion';

export default function AnimatedProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center min-h-screen p-6 md:p-12 pt-20 md:pt-12"
    >
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
        >
          My Project
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-center md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 font-medium"
        >
          Some of my notable projects and contributions I've made so far.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-md md:text-xl lg:text-xl text-slate-300 mb-6 md:mb-8 font-medium"
        >
          Featured Projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ProjectTabs projects={projectsData.projects} categories={projectsData.categories} />
        </motion.div>
      </div>
    </motion.div>
  )
}
