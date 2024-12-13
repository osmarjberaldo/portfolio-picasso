import React from 'react';

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  logo?: string;
  screenshot: string;
  tipo: string;
  technologies: Technology[];
  link: string;
  bgColor: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "CricTracker",
      logo: "/images/crictracker-logo.png",
      screenshot: "/images/crictracker-screenshot.png",
      tipo: "Website & Painel Admin",
      technologies: [
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
        { name: "SCSS", icon: "https://cdn.simpleicons.org/sass/CC6699" },
        { name: "ReactJS", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
        { name: "AMP", icon: "https://cdn.simpleicons.org/amp/005AF0" },
        { name: "React Hook Form", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
        { name: "Apollo GraphQL", icon: "https://cdn.simpleicons.org/apollographql/311C87" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" }
      ],
      link: "#",
      bgColor: "bg-blue-950"
    },
    {
      title: "SportsBuzz",
      logo: "/images/sportsbuzz-logo.png",
      screenshot: "/images/sportsbuzz-screenshot.png",
      tipo: "Website & Painel Admin",
      technologies: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" }
      ],
      link: "#",
      bgColor: "bg-purple-950"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Projetos em que Trabalhei
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl overflow-hidden ${project.bgColor}`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.tipo}</p>
                  </div>
                  <button
                    onClick={() => window.open(project.link, '_blank')}
                    className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    Acessar {project.title}
                    <span className="text-lg">→</span>
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-gray-400 mb-3">Tecnologias utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-black/30 text-sm text-white px-3 py-1.5 rounded-full"
                      >
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-4 h-4"
                        />
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={project.screenshot}
                    alt={`Screenshot do ${project.title}`}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}