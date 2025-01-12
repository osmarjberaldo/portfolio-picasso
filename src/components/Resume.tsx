import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const resumeTemplates = [
  {
    titleKey: "resume.modern_cv",
    price: "R$ 50",
    image: "/lovable-uploads/db2e6dc0-39ec-4b26-842d-9ef5e2995a1a.png"
  },
  {
    titleKey: "resume.web_app",
    price: "R$ 3000",
    image: "/lovable-uploads/db2e6dc0-39ec-4b26-842d-9ef5e2995a1a.png"
  },
  {
    titleKey: "resume.mobile_app",
    price: "R$ 4000",
    image: "/lovable-uploads/db2e6dc0-39ec-4b26-842d-9ef5e2995a1a.png"
  }
];

export const Resume = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-black/20">
      <h2 className="text-4xl font-bold text-center mb-4 text-primary">
        {t('resume.quick_hire')}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {resumeTemplates.map((template, index) => (
          <Card key={index} className="glass-card group hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                {t(template.titleKey)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold text-primary">{template.price}</div>
              <Button variant="default" className="w-full gap-2">
                {t('resume.buy_design')} <Download className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};