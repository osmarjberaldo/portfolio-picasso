import { Card } from "./ui/card";

export const Experience = () => {
  const experiences = [
    {
      company: "Troonbound Pvt. Ltd.",
      location: "Surat, Gujarat, India",
      position: "Front End Developer",
      period: "JUNE 2023 - PRESENT",
      responsibilities: [
        "Developed and maintained front-end of 5-6 Laravel Inertia.js, developing publishing in front-end design and development.",
        "Led the development of the Virtual Academy project, a full-stack Next.js application.",
        "Managed both front-end and back-end web projects utilizing Node.js API Routes for seamless integration.",
        "Integrated Stripe Payment Gateway for seamless and secure transactions.",
        "Successfully optimized the application on Visual for optimal performance and accessibility.",
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-primary">Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <Card key={exp.company} className="glass-card p-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
              </div>
              <span className="px-3 py-1 rounded bg-primary/20 text-primary text-sm">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-3 text-gray-300">
              {exp.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};