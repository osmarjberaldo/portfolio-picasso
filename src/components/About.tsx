import { Card } from "./ui/card";

export function About() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Sobre Mim
        </h2>
        
        <div className="max-w-3xl mx-auto text-gray-300">
          <p className="mb-6">
            Sou um Desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e 
            intuitivas. Com mais de 14 anos de experiência no desenvolvimento de software, 
            especializei-me em tecnologias modernas como React, Node.js, TypeScript, PHP, Python, C#, Java, C++, C, SQL, NoSQL, etc.
          </p>
          
          <p className="mb-6">
            Minha jornada inclui trabalhos com empresas de diversos portes, onde desenvolvi 
            habilidades sólidas em arquitetura de software, práticas ágeis e liderança técnica.
          </p>
        </div>
      </div>
    </section>
  );
}