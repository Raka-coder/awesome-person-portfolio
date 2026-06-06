"use client";
import AboutStory from "@/components/about/story/AboutStory";
import SkillsVisualization from "@/components/about/SkillsVisualization";
import ExperienceTimeline from "@/components/about/experience/ExperienceTimeline";

export default function AnimatedAboutSection() {
  return (
    <div className="min-h-screen">
      <AboutStory />
      <SkillsVisualization />
      <ExperienceTimeline />
    </div>
  );
}