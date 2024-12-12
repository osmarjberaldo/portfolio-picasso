import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const resumeTemplates = [
  {
    title: "Modern Resume / CV",
    price: "10$",
    image: "/lovable-uploads/db2e6dc0-39ec-4b26-842d-9ef5e2995a1a.png"
  },
  {
    title: "Modern Resume / CV",
    price: "10$",
    image: "/lovable-uploads/db2e6dc0-39ec-4b26-842d-9ef5e2995a1a.png"
  },
  {
    title: "Modern Resume / CV",
    price: "10$",
    image: "/lovable-uploads/db2e6dc0-39ec-4b26-842d-9ef5e2995a1a.png"
  }
];

export const Resume = () => {
  return (
    <section className="py-20 px-4 bg-black/20">
      <h2 className="text-4xl font-bold text-center mb-4 text-primary">
        Buy Me a Coffee
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {resumeTemplates.map((template, index) => (
          <Card key={index} className="glass-card group hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                {template.title}
              </CardTitle>
              <p className="text-sm text-gray-400">Figma Design Made by me</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold text-primary">{template.price}</div>
              <Button variant="default" className="w-full gap-2">
                Purchase Design <Download className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};