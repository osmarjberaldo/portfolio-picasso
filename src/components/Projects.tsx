import React from 'react';

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  screenshot: string;
  tipo: string;
  technologies: Technology[];
  link: string;
  bgColor: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Aplicativo de Calculo de Estacas",
      screenshot: "https://i.ibb.co/f1dPyF4/Captura-de-tela-2024-12-19-081323.png",
      tipo: "Aplicativo Web e Mobile",
      technologies: [
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "REST", icon: "https://media.licdn.com/dms/image/v2/D4D12AQHMZSBsgCI9YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657641228013?e=2147483647&v=beta&t=PGvET7cRlEDvIgL7-7Y9n0UvrpHFyT_WeqNrFUYaz-I" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      ],
      link: "https://calculoescavao.netlify.app/",
      bgColor: "bg-blue-950"
    },
    {
      title: "PipeConnect",
      screenshot: "https://i.ibb.co/2M40BBB/Captura-de-tela-2024-12-19-082836.png",
      tipo: "Aplicativo Mobile - Android e iOS",
      technologies: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "MQTT", icon: "https://cdn.simpleicons.org/mqtt/FF0000" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "REST API", icon: "https://media.licdn.com/dms/image/v2/D4D12AQHMZSBsgCI9YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657641228013?e=2147483647&v=beta&t=PGvET7cRlEDvIgL7-7Y9n0UvrpHFyT_WeqNrFUYaz-I" },
        { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" },
        { name: "Expo", icon: "https://cdn.simpleicons.org/expo/000020" },
        { name: "Google Play", icon: "https://cdn.simpleicons.org/googleplay/00897B" },
        { name: "App Store", icon: "https://cdn.simpleicons.org/appstore/0D96F6" },
      ],
      link: "https://apps.apple.com/us/app/pipeconnect/id6737283726?platform=iphone",
      bgColor: "bg-purple-900"
    },
    {
      title: "Busca Cetidões",
      screenshot: "https://i.ibb.co/hW05CH2/Captura-de-tela-2024-12-19-083434.png",
      tipo: "Website e Painel Admin",
      technologies: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      ],
      link: "https://buscacertidoes.com.br/",
      bgColor: "bg-blue-950"
    },
    {
      title: "AdJac",
      screenshot: "https://i.ibb.co/r0P4Df9/Captura-de-tela-2024-12-19-083924.png",
      tipo: "Aplicativo Mobile - Android",
      technologies: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "REST API", icon: "https://media.licdn.com/dms/image/v2/D4D12AQHMZSBsgCI9YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657641228013?e=2147483647&v=beta&t=PGvET7cRlEDvIgL7-7Y9n0UvrpHFyT_WeqNrFUYaz-I" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Github", icon: "https://img.icons8.com/m_rounded/512/228BE6/github.png" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Expo", icon: "https://cdn.simpleicons.org/expo/000020" },
        { name: "Google Play", icon: "https://cdn.simpleicons.org/googleplay/00897B" },
      ],
      link: "https://play.google.com/store/apps/details?id=com.zimiro.AdJc",
      bgColor: "bg-purple-900"
    },
    {
      title: "PipeConnect",
      screenshot: "https://i.ibb.co/CKRCJvM/Captura-de-tela-2024-12-26-152637.png",
      tipo: "Placa de Automação para Piscinas - WIFI",
      technologies: [
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/61DAFB" },
        { name: "Altium", icon: "https://cdn.simpleicons.org/altiumdesigner/A5915F" },
        { name: "Json", icon: "https://cdn.simpleicons.org/json/646CFF" },
        { name: "MQTT", icon: "https://cdn.simpleicons.org/mqtt/FF0000" },
        { name: "REST API", icon: "https://media.licdn.com/dms/image/v2/D4D12AQHMZSBsgCI9YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657641228013?e=2147483647&v=beta&t=PGvET7cRlEDvIgL7-7Y9n0UvrpHFyT_WeqNrFUYaz-I" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Github", icon: "https://cdn.simpleicons.org/github/181717" },
      ],
      link: "https://pipelinepiscinas.com.br/",
      bgColor: "bg-blue-950"
    },
    {
      title: "PipeControl",
      screenshot: "https://i.ibb.co/Pg6YT6m/Captura-de-tela-2024-12-26-153151.png",
      tipo: "Placa de Controle para Quipamentos de Piscina",
      technologies: [
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/61DAFB" },
        { name: "Altium", icon: "https://cdn.simpleicons.org/altiumdesigner/A5915F" },
        { name: "REST API", icon: "https://media.licdn.com/dms/image/v2/D4D12AQHMZSBsgCI9YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657641228013?e=2147483647&v=beta&t=PGvET7cRlEDvIgL7-7Y9n0UvrpHFyT_WeqNrFUYaz-I" },
         { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Github", icon: "https://cdn.simpleicons.org/github/181717" },
      ],
      link: "https://pipelienpiscinas.com.br",
      bgColor: "bg-purple-900"
    },
    {
      title: "Pipe100",
      screenshot: "https://pipelinepiscinas.com.br/wp-content/uploads/elementor/thumbs/ozonio-qeytkf5ltgq6jwsly76j3o1nb5gg93qyfem4hlkjgo.webp",
      tipo: "Gerador de Ozonio para Piscinas",
      technologies: [
        { name: "Altium", icon: "https://cdn.simpleicons.org/altiumdesigner/A5915F" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Github", icon: "https://cdn.simpleicons.org/github/181717" },
      ],
      link: "https://pipelinepiscinas.com.br/",
      bgColor: "bg-blue-950"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Últimos Projetos
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div key={project.title} className={`flex flex-col md:flex-row gap-8 ${project.bgColor} rounded-3xl overflow-hidden p-8`}>
              <div className="md:w-[45%]">
                <div className="bg-gradient-to-br from-blue-400/20 to-purple-400/20 p-2 rounded-2xl">
                  <img 
                    src={project.screenshot} 
                    alt={`Screenshot do ${project.title}`} 
                    className="rounded-xl shadow-lg w-full h-[280px] object-cover border border-white/10"
                  />
                </div>
              </div>

              <div className="md:w-[55%] space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {project.tipo}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 mb-3">Tecnologias utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-white text-sm text-blue-950 px-3 py-1.5 rounded-full font-medium"
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

                <button
                  onClick={() => window.open(project.link, '_blank')}
                  className="flex items-center gap-2 text-white bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  Acessar {project.title}
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}