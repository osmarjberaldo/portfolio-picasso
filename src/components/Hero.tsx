import React from 'react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-black overflow-hidden">
      {/* Efeito de fundo */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(252, 211, 77, 0.15) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(252, 211, 77, 0.1) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            animation: 'spin 20s linear infinite'
          }}
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Saudação */}
        <div className="mb-4">
          <span className="text-2xl text-gray-300">👋 Olá! Eu sou</span>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">OSMAR</span>{' '}
            <span className="text-yellow-400">J.BERALDO</span>
          </h1>
          <h2>PÁGINA EM ATUALIZAÇÃO</h2>
        </div>

        {/* Título e Experiência */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl mb-2 text-gray-300">
            Desenvolvedor Full Stack | Analista de Sistemas | PenTester
          </h2>
          <p className="text-lg text-gray-300">
            com <span className="bg-yellow-400 px-2 rounded text-black">14+ Anos</span> de Experiência
          </p>
        </div>

        {/* Botões */}
        <div className="flex gap-4 justify-center mb-12">
          <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
            Currículo
          </a>
          <a href="#contact" className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition">
            Contrate-me
          </a>
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

          {/* Tecnologias flutuantes - Primeira linha */}
          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-1" 
               style={{ width: '100px', borderRadius: '5px', top: '20px', left: '-120px' }}>
            <div className="bg-black h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                   alt="NextJS" className="w-5 h-5 invert" />
            </div>
            <span className="px-2 text-xs font-medium text-black">Next.js</span>
          </div>

          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-2" 
               style={{ width: '100px', borderRadius: '5px', top: '20px', right: '-120px' }}>
            <div className="bg-[#2496ED] h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                   alt="Docker" className="w-5 h-5" />
            </div>
            <span className="px-2 text-xs font-medium text-black">Docker</span>
          </div>

          {/* Segunda linha */}
          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-3" 
               style={{ width: '100px', borderRadius: '5px', top: '80px', left: '-120px' }}>
            <div className="bg-[#282C34] h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                   alt="React" className="w-5 h-5" />
            </div>
            <span className="px-2 text-xs font-medium text-black">React</span>
          </div>

          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-4" 
               style={{ width: '100px', borderRadius: '5px', top: '80px', right: '-120px' }}>
            <div className="bg-[#3178C6] h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                   alt="TypeScript" className="w-5 h-5" />
            </div>
            <span className="px-2 text-xs font-medium text-black">TypeScript</span>
          </div>

          {/* Terceira linha */}
          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-5" 
               style={{ width: '100px', borderRadius: '5px', top: '140px', left: '-120px' }}>
            <div className="bg-[#333333] h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                   alt="Node.js" className="w-5 h-5" />
            </div>
            <span className="px-2 text-xs font-medium text-black">Node.js</span>
          </div>

          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-6" 
               style={{ width: '100px', borderRadius: '5px', top: '140px', right: '-120px' }}>
            <div className="bg-[#FFD43B] h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                   alt="Python" className="w-5 h-5" />
            </div>
            <span className="px-2 text-xs font-medium text-black">Python</span>
          </div>

          {/* Quarta linha */}
          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-5" 
               style={{ width: '100px', borderRadius: '5px', top: '200px', left: '-120px' }}>
            <div className="bg-[#00599C] h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
                   alt="C++" className="w-6 h-6 object-contain" style={{ margin: '0 auto' }} />
            </div>
            <span className="px-2 text-xs font-medium text-black">C++</span>
          </div>

          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-5" 
               style={{ width: '100px', borderRadius: '5px', top: '200px', right: '-120px' }}>
            <div className="bg-[#777BB4] h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
                   alt="PHP" className="w-6 h-6 object-contain" style={{ margin: '0 auto' }} />
            </div>
            <span className="px-2 text-xs font-medium text-black">PHP</span>
          </div>

          {/* Quinta linha */}
          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-5" 
               style={{ width: '100px', borderRadius: '5px', top: '260px', left: '-120px' }}>
            <div className="bg-[#4479A1] h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                   alt="MySQL" className="w-6 h-6 object-contain" style={{ margin: '0 auto' }} />
            </div>
            <span className="px-2 text-xs font-medium text-black">MySQL</span>
          </div>

          <div className="tech-bubble absolute h-7 bg-white shadow-lg rounded flex items-center animate-float-5" 
               style={{ width: '100px', borderRadius: '5px', top: '260px', right: '-120px' }}>
            <div className="bg-[#FF2D20] h-7 w-9 flex items-center justify-center" 
                 style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" 
                   alt="Laravel" className="w-6 h-6 object-contain" style={{ margin: '0 auto' }} />
            </div>
            <span className="px-2 text-xs font-medium text-black">Laravel</span>
          </div>
        </div>
      </div>
    </section>
  );
}