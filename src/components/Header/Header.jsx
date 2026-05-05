import Perfil from "../../assets/Anderson.jpg"
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-600 to-pink-600 py-24">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        {/* TEXTO */}
        <div className="text-center md:text-left flex-1">

          <span className="inline-block bg-red-500/20 text-red-200 px-4 py-1 rounded-full text-sm mb-6">
            Disponível para oportunidades
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Anderson Felipe Ambrosio
          </h1>

          <p className="text-lg mt-4 text-gray-100 max-w-xl">
            Desenvolvo interfaces modernas com React, integrando APIs e criando
            aplicações funcionais com foco em performance e experiência do usuário.
          </p>

          <p className="mt-4 text-red-200">
            React • Node.js • PostgreSQL • Tailwind
          </p>

          <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-black px-6 py-3 rounded-lg hover:bg-gray-800 transition shadow-xl hover:scale-105"
            >
              Ver Projetos
            </a>

            <a
              href="#contact"
              className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition shadow-xl hover:scale-105"
            >
              Contato
            </a>

          </div>

        </div>

        {/* FOTO */}
        <div className="flex-1 flex justify-center">

          <img
            src={Perfil}
            alt="Foto de Anderson"
            className="w-60 h-60 object-cover rounded-full border-4 border-white/20 shadow-xl hover:scale-105 transition duration-300"
          />

        </div>

      </div>
    </header>
  );
}