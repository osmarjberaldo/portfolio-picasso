import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Certificates } from "@/components/Certificates";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { GoogleAdsense } from "@/components/GoogleAdsense";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Index;