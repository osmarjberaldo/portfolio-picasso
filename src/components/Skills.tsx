import React from 'react';

export function Skills() {
  const designTools = [
    { name: 'Adobe XD', icon: 'https://cdn.simpleicons.org/adobexd/FF61F6' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  ];

  const technologies = [
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'jQuery', icon: 'https://cdn.simpleicons.org/jquery/0769AD' },
    { name: 'SCSS', icon: 'https://cdn.simpleicons.org/sass/CC6699' },
    { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
    { name: 'ReactJS', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux/764ABC' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'NextJS', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
    { name: 'AMP', icon: 'https://cdn.simpleicons.org/amp/005AF0' },
    { name: 'React Hook Forms', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'TailwindCSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Material UI', icon: 'https://cdn.simpleicons.org/mui/007FFF' },
    { name: 'Chakra UI', icon: 'https://cdn.simpleicons.org/chakraui/319795' },
    { name: 'Semantic UI', icon: 'https://cdn.simpleicons.org/semanticuireact/35BDB2' },
    { name: 'Ant Design', icon: 'https://cdn.simpleicons.org/antdesign/0170FE' },
    { name: 'GraphQL', icon: 'https://cdn.simpleicons.org/graphql/E10098' },
    { name: 'Apollo GraphQL', icon: 'https://cdn.simpleicons.org/apollographql/311C87' },
    { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer/0055FF' },
    { name: 'Styled Components', icon: 'https://cdn.simpleicons.org/styledcomponents/DB7093' },
    { name: 'React Query', icon: 'https://cdn.simpleicons.org/reactquery/FF4154' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  ];

  const devTools = [
    { name: 'Visual Studio Code', icon: 'https://cdn.simpleicons.org/visualstudiocode/007ACC' },
    { name: 'Gitlab', icon: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
    { name: 'Github', icon: 'https://cdn.simpleicons.org/github/181717' },
    { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/000000' },
    { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Skills
        </h2>

        {/* Design Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
            Design Tools I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {designTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
                {tool.name}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
            Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
            Development & Productivity Tools I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {devTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}