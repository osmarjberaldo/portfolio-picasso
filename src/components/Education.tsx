import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation();

  const education = [
    {
      period: t('education.systems_analyst.period'),
      degree: t('education.systems_analyst.degree'),
      field: t('education.systems_analyst.field'),
      university: t('education.systems_analyst.university'),
      location: t('education.systems_analyst.location'),
      type: t('education.systems_analyst.type'),
    },
    {
      period: t('education.cybersecurity.period'),
      degree: t('education.cybersecurity.degree'),
      field: t('education.cybersecurity.field'),
      university: t('education.cybersecurity.university'),
      type: t('education.cybersecurity.type'),
    },
    {
      period: t('education.pedagogy.period'),
      degree: t('education.pedagogy.degree'),
      field: t('education.pedagogy.field'),
      university: t('education.pedagogy.university'),
      type: t('education.pedagogy.type'),
    },
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-yellow-400">{t('education.academic_formation')}</span>
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {education.map((edu) => (
          <div key={edu.period} className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="px-2 py-1 rounded bg-white/5">{edu.period}</span>
              <span className="px-2 py-1 rounded bg-primary/20 text-primary">
                {edu.type}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-yellow-400">{edu.field}</h3>
            <p className="text-gray-400">{edu.university}</p>
            {edu.location && <p className="text-sm text-gray-500">{edu.location}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};