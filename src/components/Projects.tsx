import React from 'react';
import { useTranslation } from 'react-i18next';

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  titleKey: string;
  screenshot: string;
  typeKey: string;
  technologies: Technology[];
  link: string;
  bgColor: string;
}

export function Projects() {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      titleKey: "projects.qr_code_free.title",
      screenshot: "https://i.ibb.co/8nWbmMZT/Captura-de-tela-2025-03-18-074316.png",
      typeKey: "projects.types.web_mobile_app",
      technologies: [
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
        { name: "REST API", icon: "https://media.licdn.com/dms/image/v2/D4D12AQHMZSBsgCI9YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657641228013?e=2147483647&v=beta&t=PGvET7cRlEDvIgL7-7Y9n0UvrpHFyT_WeqNrFUYaz-I" },
        { name: "npm", icon: "https://cdn.simpleicons.org/npm/CB3837" },
      ],
      link: "https://devosmar.com.br/qrcodefree/",
      bgColor: "bg-blue-950"
    },
    {
      titleKey: "projects.civil_engineering.title",
      screenshot: "https://i.ibb.co/f1dPyF4/Captura-de-tela-2024-12-19-081323.png",
      typeKey: "projects.types.web_mobile_app",
      technologies: [
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Vite", icon: "https://img.icons8.com/fluent/512/vite.png" },
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
      titleKey: "projects.pipeconnect.title",
      screenshot: "https://i.ibb.co/2M40BBB/Captura-de-tela-2024-12-19-082836.png",
      typeKey: "projects.types.mobile_app",
      technologies: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "MQTT", icon: "https://cdn.simpleicons.org/mqtt/FF0000" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "REST API", icon: "https://media.licdn.com/dms/image/v2/D4D12AQHMZSBsgCI9YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657641228013?e=2147483647&v=beta&t=PGvET7cRlEDvIgL7-7Y9n0UvrpHFyT_WeqNrFUYaz-I" },
        { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" },
        { name: "Expo", icon: "https://cdn.simpleicons.org/expo/000020" },
        { name: "Google Play", icon: "https://cdn.simpleicons.org/googleplay/00897B" },
        { name: "App Store", icon: "https://cdn.simpleicons.org/appstore/0D96F6" }
      ],
      link: "https://apps.apple.com/us/app/pipeconnect/id6737283726?platform=iphone",
      bgColor: "bg-purple-900"
    },
    {
      titleKey: "projects.busca_certidoes.title",
      screenshot: "https://i.ibb.co/hW05CH2/Captura-de-tela-2024-12-19-083434.png",
      typeKey: "projects.types.website_admin",
      technologies: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Vite", icon: "https://img.icons8.com/fluent/512/vite.png" },
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
      titleKey: "projects.adjac.title",
      screenshot: "https://i.ibb.co/r0P4Df9/Captura-de-tela-2024-12-19-083924.png",
      typeKey: "projects.types.android_app",
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
      titleKey: "projects.pipeconnect_hardware.title",
      screenshot: "https://i.ibb.co/CKRCJvM/Captura-de-tela-2024-12-26-152637.png",
      typeKey: "projects.types.pool_automation",
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
      titleKey: "projects.pipecontrol.title",
      screenshot: "https://i.ibb.co/Pg6YT6m/Captura-de-tela-2024-12-26-153151.png",
      typeKey: "projects.types.pool_control",
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
      titleKey: "projects.pipe100.title",
      screenshot: "https://pipelinepiscinas.com.br/wp-content/uploads/elementor/thumbs/ozonio-qeytkf5ltgq6jwsly76j3o1nb5gg93qyfem4hlkjgo.webp",
      typeKey: "projects.types.pool_ozone",
      technologies: [
        { name: "Altium", icon: "https://cdn.simpleicons.org/altiumdesigner/A5915F" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      ],
      link: "https://pipelinepiscinas.com.br/",
      bgColor: "bg-blue-950"
    },
    {
      titleKey: "projects.franquia_piscinas.title",
      screenshot: "https://i.ibb.co/njFj0k0/Captura-de-tela-2024-12-27-145516.png",
      typeKey: "projects.types.franquia_piscinas",
      technologies: [
        { name: "Wordpress", icon: "https://cdn.simpleicons.org/wordpress/61DAFB" },
        { name: "IA", icon: "https://cdn.simpleicons.org/openai/412991" },
        { name: "REST API", icon: "https://media.licdn.com/dms/image/v2/D4D12AQHMZSBsgCI9YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657641228013?e=2147483647&v=beta&t=PGvET7cRlEDvIgL7-7Y9n0UvrpHFyT_WeqNrFUYaz-I" },
        { name: "Json", icon: "https://cdn.simpleicons.org/json/000000" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Github", icon: "https://cdn.simpleicons.org/github/181717" },
      ],
      link: "https://franquiapipeline.com/",
      bgColor: "bg-purple-900"
    },
    {
      titleKey: "projects.resistor_calculator.title",
      screenshot: "https://i.ibb.co/dJ4xykb8/Captura-de-tela-2025-05-15-081124.png",
      typeKey: "projects.types.web_app",
      technologies: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Vite", icon: "https://img.icons8.com/fluent/512/vite.png" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" }
      ],
      link: "https://resistoronline.devosmar.com.br/",
      bgColor: "bg-green-950"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          {t('projects.latest')}
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div key={project.titleKey} className={`flex flex-col md:flex-row gap-8 ${project.bgColor} rounded-3xl overflow-hidden p-8`}>
              <div className="md:w-[45%]">
                <div className="bg-gradient-to-br from-blue-400/20 to-purple-400/20 p-2 rounded-2xl">
                  <img 
                    src={project.screenshot} 
                    alt={t('projects.screenshot_alt', { project: t(project.titleKey) })} 
                    className="rounded-xl shadow-lg w-full h-[280px] object-cover border border-white/10"
                  />
                </div>
              </div>

              <div className="md:w-[55%] space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t(project.titleKey)}
                  </h3>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {t(project.typeKey)}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 mb-3">{t('projects.technologies_used')}</h4>
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
                  {t('projects.access')} {t(project.titleKey)}
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