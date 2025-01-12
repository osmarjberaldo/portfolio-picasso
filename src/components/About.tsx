import { Card } from "./ui/card";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          {t('about.title')}
        </h2>
        
        <Card className="max-w-3xl mx-auto bg-zinc-900/50 text-gray-300">
          <div className="p-8">
            <p className="mb-6">
              {t('about.description')}
            </p>
            
            <p className="mb-6">
              {t('about.journey')}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}