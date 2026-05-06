export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-24 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Título e Destaque */}
        <div>
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            Sobre mim
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Transformando linhas de código em soluções de impacto.
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
           Sou um desenvolvedor apaixonado por construir o futuro da web. 
            Não apenas escrevo código; eu projeto experiências que facilitam a vida das pessoas.
          </p>
        </div>

        {/* Lado Direito: Texto Detalhado */}
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <p className="text-gray-300 leading-relaxed mb-6">
            Com foco no ecossistema <strong>React</strong> e <strong>Node.js</strong>, especializei-me em criar aplicações full-stack robustas. Minha prioridade é a união entre uma interface impecável e um back-end escalável com <strong>PostgreSQL</strong>.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            Atualmente, dedico meu tempo aprimorando a performance de aplicações e explorando arquiteturas modernas. Acredito que <strong>código limpo</strong> não é um luxo, mas um requisito para o sucesso de qualquer produto.
          </p>

          {/* Pequenos stats ou diferenciais */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="border-l-2 border-red-500 pl-4">
              <span className="block text-white font-bold">Foco em UI/UX</span>
              <span className="text-sm text-gray-500">Interfaces Fluidas</span>
            </div>
            <div className="border-l-2 border-red-500 pl-4">
              <span className="block text-white font-bold">Clean Code</span>
              <span className="text-sm text-gray-500">Código Escalável</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
