import React from 'react';

interface Certificate {
  platform: {
    name: string;
    icon: string;
    color: string;
  };
  title: string;
  link: string;
}

export function Certificates() {
  const certificates: Certificate[] = [
    {
      platform: {
        name: "Udemy",
        icon: "https://cdn.simpleicons.org/udemy/A435F0",
        color: "text-[#A435F0]"
      },
      title: "CSS e Sass Avançado: Flexbox, Grid, Animações e Mais!",
      link: "#"
    },
    {
      platform: {
        name: "Udemy",
        icon: "https://cdn.simpleicons.org/udemy/A435F0",
        color: "text-[#A435F0]"
      },
      title: "Curso Completo de JavaScript 2020: Do Zero ao Especialista!",
      link: "#"
    },
    {
      platform: {
        name: "Coursera",
        icon: "https://cdn.simpleicons.org/coursera/0056D2",
        color: "text-[#0056D2]"
      },
      title: "Design UX Google",
      link: "#"
    },
    {
      platform: {
        name: "FreeCodeCamp",
        icon: "https://cdn.simpleicons.org/freecodecamp/0A0A23",
        color: "text-[#0A0A23]"
      },
      title: "Bibliotecas Front End",
      link: "#"
    },
    {
      platform: {
        name: "LinkedIn",
        icon: "https://cdn.simpleicons.org/linkedin/0A66C2",
        color: "text-[#0A66C2]"
      },
      title: "Treinamento Essencial React.js",
      link: "#"
    },
    {
      platform: {
        name: "Educative",
        icon: "https://cdn.simpleicons.org/education/2B70F8",
        color: "text-[#2B70F8]"
      },
      title: "Entendendo Redux: Um Guia para Iniciantes em Gerenciamento de Estado",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Certificados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-white/80 backdrop-blur-md 
                       rounded-2xl p-6 relative group 
                       hover:bg-white/90 transition-all duration-300
                       border border-white/20"
            >
              {/* Plataforma e Ícone */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-white/90 shadow-sm">
                  <img
                    src={cert.platform.icon}
                    alt={cert.platform.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className={`font-medium ${cert.platform.color}`}>
                  {cert.platform.name}
                </span>
                
                {/* Ícone de Certificado */}
                <div className="absolute top-6 right-6">
                  <img
                    src="https://cdn.simpleicons.org/certificate/94A3B8"
                    alt="Certificado"
                    className="w-6 h-6 opacity-40 group-hover:opacity-60 transition-opacity"
                  />
                </div>
              </div>

              {/* Título do Certificado */}
              <h3 className="text-gray-800 text-lg font-semibold mb-4 pr-8 group-hover:text-gray-900 transition-colors">
                {cert.title}
              </h3>

              {/* Botão Ver */}
              <button
                onClick={() => window.open(cert.link, '_blank')}
                className="inline-flex items-center gap-2 text-sm text-gray-500 
                         hover:text-gray-800 transition-colors group-hover:text-gray-700
                         bg-white/60 px-3 py-1.5 rounded-full hover:bg-white/90"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Ver
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}