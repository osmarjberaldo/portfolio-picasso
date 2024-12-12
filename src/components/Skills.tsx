import { Card } from "./ui/card";

export const Skills = () => {
  const designTools = ["Adobe XD", "Figma"];
  
  const technologies = [
    "HTML5", "CSS3", "JavaScript", "jQuery", "SCSS", "Bootstrap",
    "ReactJS", "Redux", "Firebase", "NextJS", "AMP",
    "React Hook Forms", "TailwindCSS", "Material UI", "Chakra UI",
    "Semantic UI", "Ant Design", "GraphQL", "Apollo GraphQL",
    "Framer Motion", "Styled Components", "React Query", "Git"
  ];

  const devTools = [
    "Visual Studio Code", "Gitlab", "Github", "Notion", "Postman"
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-primary">Skills</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h3 className="text-xl font-semibold text-center mb-6 text-primary/80">
            Design Tools I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {designTools.map((tool) => (
              <span key={tool} className="tech-pill">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-center mb-6 text-primary/80">
            Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-center mb-6 text-primary/80">
            Development & Productivity Tools I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {devTools.map((tool) => (
              <span key={tool} className="tech-pill">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};