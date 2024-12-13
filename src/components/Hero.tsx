import React from 'react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Fundo com efeito de onda */}
      <div className="absolute w-full h-full">
        <div className="wave-effect"></div>
      </div>

      <div className="container mx-auto text-center z-10">
        {/* Saudação */}
        <div className="mb-4">
          <span className="text-2xl">👋 Olá! Eu sou</span>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">OSMAR</span>{' '}
            <span className="text-yellow-400">BERALDO</span>
          </h1>
        </div>

        {/* Título e Experiência */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl mb-2">
            Desenvolvedor Full Stack | Analista de Sistemas | PenTester
          </h2>
          <p className="text-lg">
            com <span className="bg-yellow-400 px-2 rounded">14+ Anos</span> de Experiência
          </p>
        </div>

        {/* Botões */}
        <div className="flex gap-4 justify-center mb-12">
          <button className="bg-transparent border-2 border-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
            Currículo
          </button>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition">
            Contrate-me
          </button>
        </div>

        {/* Área da foto com tecnologias */}
        <div className="relative w-[300px] h-[300px] mx-auto">
          {/* Foto central */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full overflow-hidden">
            <img
              src="/sua-foto.jpg"
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tecnologias flutuantes */}
          <div className="tech-bubble top-0 left-0">
            <img src="/nextjs-icon.svg" alt="NextJS" className="w-10 h-10" />
          </div>
          <div className="tech-bubble top-0 right-0">
            <img src="/tailwind-icon.svg" alt="Tailwind CSS" className="w-10 h-10" />
          </div>
          <div className="tech-bubble bottom-0 left-0">
            <img src="/react-icon.svg" alt="ReactJS" className="w-10 h-10" />
          </div>
          <div className="tech-bubble bottom-0 right-0">
            <img src="/javascript-icon.svg" alt="JavaScript" className="w-10 h-10" />
          </div>
          <div className="tech-bubble left-1/2 -translate-x-1/2 top-0">
            <img src="/graphql-icon.svg" alt="GraphQL" className="w-10 h-10" />
          </div>
          <div className="tech-bubble left-1/2 -translate-x-1/2 bottom-0">
            <img src="/figma-icon.svg" alt="Figma" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}