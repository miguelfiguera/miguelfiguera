import ProjectApproachSection from "@/components/PortfolioComponents/ProjectApproachSection";
import TestimonialsSection from "@/components/PortfolioComponents/TestimonialsSection";
import PortfolioCTASection from "@/components/PortfolioComponents/PortfolioCTASection";
import { ProjectShowcaseSection } from "@/components/PortfolioComponents/ProjectShowcaseSection";
import {
  projects,
  processSteps,
  testimonials,
} from "@/lib/helpers/portfolio.data";

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <ProjectShowcaseSection projects={projects} />
        <ProjectApproachSection processSteps={processSteps} />
        <TestimonialsSection testimonials={testimonials} />
        <PortfolioCTASection />
      </main>
    </div>
  );
}
