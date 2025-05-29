"use client";

import Hero from "@/components/landingPage/Hero";
import RecentProjects from "@/components/landingPage/RecentProjects";
import CTA from "@/components/GeneralUse/CTA";
import LatestArticles from "@/components/landingPage/LatestArticles";
import Contact from "@/components/landingPage/Contact";
import WhyChooseMe from "@/components/GeneralUse/WhyChooseMe";
import Certifications from "@/components/landingPage/Certifications";
import {
  ctaSectionContent,
  projects,
  certifications,
  benefits,
  blogPosts,
  content,
} from "@/lib/helpers/landing.data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <Hero />

        <RecentProjects projects={projects} />

        <Certifications certifications={certifications} />

        <WhyChooseMe benefits={benefits} content={content} />

        <Contact />

        <LatestArticles blogPosts={blogPosts} />

        <CTA content={ctaSectionContent} />
      </main>
    </div>
  );
}
