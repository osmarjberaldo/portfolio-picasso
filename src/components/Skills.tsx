import React from 'react';

export function Skills() {
  const designTools = [
    { name: 'Adobe XD', icon: 'https://cdn.simpleicons.org/adobexd/FF61F6' },
    { name: 'Adobe Photoshop', icon: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF' },
    { name: 'Adobe Premiere', icon: 'https://cdn.simpleicons.org/adobepremierepro/9999FF' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Canva', icon: 'https://cdn.simpleicons.org/canva/00C4CC' },
    { name: 'Midjourney', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Midjourney_Emblem.svg' },
    { name: 'DALL-E', icon: 'https://cdn.simpleicons.org/openai/412991' },
  ];

  const technologies = [
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'C#', icon: 'https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png' },
    { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
    { name: 'Arduino', icon: 'https://cdn.simpleicons.org/arduino/00979D' },
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Visual Basic', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
    { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
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
    { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
    { name: 'JSON', icon: 'https://cdn.simpleicons.org/json/000000' },
    { name: 'XML', icon: 'https://cdn.simpleicons.org/xml/000000' },
    { name: 'REST', icon: 'https://media.licdn.com/dms/image/v2/D4D12AQHMZSBsgCI9YQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657641228013?e=2147483647&v=beta&t=PGvET7cRlEDvIgL7-7Y9n0UvrpHFyT_WeqNrFUYaz-I' },
    { name: 'MQTT', icon: 'https://cdn.simpleicons.org/mqtt/FF0000' },
    { name: 'OAuth', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDc3eMuGSvAepDMqi_xMl8GC9tmfAaulmf1Q&s' },
    { name: 'JWT', icon: 'https://jwt.io/img/pic_logo.svg' },
    { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/00BCD4' },
    { name: 'Prometheus', icon: 'https://cdn.simpleicons.org/prometheus/E10098' },
    { name: 'Grafana', icon: 'https://cdn.simpleicons.org/grafana/F46800' },
  ];

  const devTools = [
    { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png' },
    { name: 'Visual Studio', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png' },
    { name: 'Windows', icon: 'https://img.icons8.com/?size=512&id=108792&format=png' },
    { name: 'Linux', icon: 'https://cdn-icons-png.flaticon.com/512/6124/6124995.png' },
    { name: 'macOS', icon: 'https://cdn.simpleicons.org/apple/000000' },
    { name: 'Gitlab', icon: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
    { name: 'Github', icon: 'https://img.icons8.com/m_rounded/512/228BE6/github.png' },
    { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/000000' },
    { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Azure', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17HXm5WjbqugVq4F8DDs2xoidNIkI5THSKw&s' },
    { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
    { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png' },
    { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
    { name: 'Slack', icon: 'https://cdn.simpleicons.org/slack/4A154B' },
    { name: 'Scrum', icon: 'https://cdn-icons-png.flaticon.com/512/8553/8553379.png' },
    { name: 'PyCharm', icon: 'https://cdn.simpleicons.org/pycharm/000000' },
    { name: 'pytest', icon: 'https://cdn.simpleicons.org/pytest/000000' },
    { name: 'eslint', icon: 'https://cdn.simpleicons.org/eslint/4B32C3' },
    { name: 'Wireshark', icon: 'https://cdn.simpleicons.org/wireshark/000000' },
    { name: 'Burp Suite', icon: 'https://cdn.simpleicons.org/burpsuite/000000' },   
    { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Habilidades
        </h2>

        {/* Design Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
            Ferramentas de Design que Utilizo
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
            Tecnologias que Utilizo
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
            Ferramentas de Desenvolvimento e Produtividade
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