export const Education = () => {
  const education = [
    {
      period: "2022 - 2024",
      degree: "Analista em Desenvolvimento de Sistemas",
      field: "Analista em Desenvolvimento de Sistemas",
      university: "Unicesumar",
      location: "Maringa",
      type: "Graduação",
    },
    {
      period: "2024 - Andamento",
      degree: "Gestão de Riscos e Cibersegurança",
      field: "Gestão de Riscos e Cibersegurança",
      university: "Cenes",
      type: "Pós-Graduação",
    },
    {
      period: "2024 - Andamento",
      degree: "Coordenação Pedagógica e Supervisão Escolar",
      field: "Coordenação Pedagógica e Supervisão Escolar",
      university: "Cenes",
      type: "Pós-Graduação",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-primary">Formações</span>
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
            
            <h3 className="text-xl font-semibold">{edu.field}</h3>
            <p className="text-gray-400">{edu.university}</p>
            <p className="text-sm text-gray-500">{edu.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};