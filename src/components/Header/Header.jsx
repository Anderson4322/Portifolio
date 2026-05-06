import Perfil from "../../assets/Anderson.png";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-red-900 to-pink-900 py-20 md:py-32 text-white overflow-hidden relative">

      {/* Detalhe decorativo de fundo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left flex-[1.5]"
        >

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-red-200 px-4 py-1.5 rounded-full text-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponível para novos projetos
          </motion.div>

          {/* TITULO */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-tight"
          >
            Anderson <br />
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400">
              Felipe Ambrosio
            </div>
          </motion.h1>

          {/* DESCRIÇÃO */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl mt-6 text-gray-300 max-w-2xl leading-relaxed"
          >
            Desenvolvedor Full Stack especializado em{" "}
            <span className="text-white font-semibold">React</span>.
            Construindo interfaces de alta performance e experiências digitais memoráveis.
          </motion.p>

          {/* TECNOLOGIAS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {["React", "Node.js", "PostgreSQL", "Tailwind"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-red-300 hover:scale-105 transition"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* BOTÕES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 flex gap-4 flex-wrap justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 shadow-2xl hover:-translate-y-1"
            >
              Ver Projetos
            </a>

            <h1
              className="bg-transparent cursor-pointer border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              onClick={() => {
                alert("No momento não esta disponivel o curriculo para download");
              }}
            >
              Download CV
            </h1>
          </motion.div>
        </motion.div>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative group">

            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            <img
              src={Perfil}
              alt="Foto de Anderson"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-2xl transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>

      </div>
    </header>
  );
}
