import type { Metadata } from 'next'
import { PortfolioLayout } from '@/components/PortfolioLayout'
import AnimatedProjectsSection from './AnimatedProjectsSection';

export const metadata: Metadata = {
  title: "Raka | My project",
  description: "Explore notable projects and contributions by Raka Restu.",
};

export default function Project() {
  return (
    <PortfolioLayout>
      <AnimatedProjectsSection />
    </PortfolioLayout>
  )
}