import { Card } from "./ui/card";

export function About() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Sobre Mim
        </h2>
        
        <Card className="max-w-3xl mx-auto bg-zinc-900/50 text-gray-300">
          <div className="p-8">
            <p className="mb-6">
              Sou um Desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e 
              intuitivas. Com mais de 14 anos de experiência no desenvolvimento de software, 
              especializei-me em tecnologias modernas como React, Node.js, TypeScript, PHP, Python, 
              C#, Java, C++, C, SQL, NoSQL, entre outras.
            </p>
            
            <p className="mb-6">
              Minha jornada profissional inclui trabalhos com empresas de diversos portes, 
              onde desenvolvi habilidades sólidas em arquitetura de software, metodologias 
              ágeis e liderança técnica. Busco constantemente aprender novas tecnologias e 
              aprimorar minhas habilidades para entregar as melhores soluções.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}