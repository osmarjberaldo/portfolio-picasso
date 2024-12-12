export const Education = () => {
  const education = [
    {
      period: "2017 - 2020",
      degree: "Bachelor's Degree",
      field: "Bachelor of Computer Applications",
      university: "Veer Narmad South Gujarat University",
      location: "Surat, Gujarat, India",
      type: "Graduation",
    },
    {
      period: "2020 - 2022",
      degree: "Master's Degree",
      field: "Master of Computer Applications",
      university: "Parul University",
      location: "Vadodara, Gujarat, India",
      type: "Post Graduation",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-primary">Education</span>
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