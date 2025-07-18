import type { Metadata } from "next";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import AnimatedAboutSection from "./AnimatedAboutSection";

export const metadata: Metadata = {
  title: "Raka | About me",
  description:
    "Learn more about Raka Restu, his skills, expertise, and experience.",
};

export default function About() {
  return (
    <PortfolioLayout>
      <AnimatedAboutSection />
    </PortfolioLayout>
  );
}
