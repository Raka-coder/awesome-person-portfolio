import AnimatedContactSection from "./AnimatedContactSection";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";

export const metadata = {
  title: "Raka | Contact",
  description: "Get in touch with Raka Restu for collaboration or inquiries.",
};

export default function ContactPage() {
  return (
    <PortfolioLayout>
      <AnimatedContactSection />
    </PortfolioLayout>
  );
}
