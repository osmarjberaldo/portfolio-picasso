import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const projects = [
  {
    title: "CricTracker",
    image: "/lovable-uploads/da94be72-3c68-4096-b9d9-ecd4cb7a27f8.png",
    description: "Website & Admin Panel",
    technologies: ["JavaScript", "ReactJS", "SCSS", "NodeJS", "Redux", "Redux Saga", "MongoDB", "Apollo GraphQL"],
    link: "https://crictracker.com"
  },
  {
    title: "SportsBuzz",
    description: "Website & Admin Panel",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "GraphQL"],
    link: "https://sportsbuzz.com"
  },
  {
    title: "Epiko Market",
    description: "Website",
    technologies: ["JavaScript", "ReactJS", "Redux", "NodeJS", "MongoDB"],
    link: "https://epikomarket.com"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Projects I've Worked on
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-pill text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                variant="default"
                className="w-full gap-2"
                onClick={() => window.open(project.link, '_blank')}
              >
                Go to {project.title} <Info className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};