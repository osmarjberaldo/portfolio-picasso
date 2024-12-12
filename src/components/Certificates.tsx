import { Card } from "./ui/card";

export const Certificates = () => {
  const certificates = [
    {
      platform: "Udemy",
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    },
    {
      platform: "Udemy",
      title: "The Complete JavaScript Course 2020: From Zero to Expert!",
    },
    {
      platform: "Coursera",
      title: "Google UX Design",
    },
    {
      platform: "FreeCodeCamp",
      title: "Front End Libraries",
    },
    {
      platform: "LinkedIn",
      title: "React.js Essential Training",
    },
    {
      platform: "Educative",
      title: "Understanding Redux: A Beginner's Guide To State Management",
    },
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-primary">Certificates</span>
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <Card key={cert.title} className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-primary text-sm mb-2 block">
                  {cert.platform}
                </span>
                <h3 className="font-medium">{cert.title}</h3>
              </div>
              <button className="px-3 py-1 text-sm rounded bg-white/5 hover:bg-white/10 transition-colors">
                View
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};