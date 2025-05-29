import ServiceList from "@/components/ServiceComponents/ServiceList";
import WhyChooseMe from "@/components/GeneralUse/WhyChooseMe";
import CTA from "@/components/GeneralUse/CTA";
import HowIWork from "@/components/ServiceComponents/HowIWork";
import TechnologiesSection from "@/components/ServiceComponents/TechnologiesSection";
import {
  ctaContent,
  serviceListIntroData,
  servicesData,
  whyChooseMeContent,
  benefits,
  workProcess,
  technologiesIntroData,
  technologiesData,
} from "@/lib/helpers/services.data";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <ServiceList content={serviceListIntroData} services={servicesData} />

        <WhyChooseMe benefits={benefits} content={whyChooseMeContent} />

        <HowIWork workProcess={workProcess} />

        <TechnologiesSection
          content={technologiesIntroData}
          technologies={technologiesData}
        />

        <CTA content={ctaContent} />
      </main>
    </div>
  );
}
