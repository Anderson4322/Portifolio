import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-24 px-6 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LADO ESQUERDO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 flex items-center gap-3"
          >
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            Sobre mim
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-4"
          >
            Transformando linhas de código em soluções de impacto.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Sou um desenvolvedor apaixonado por construir o futuro da web.
            Não apenas escrevo código; eu projeto experiências que facilitam
            a vida das pessoas.
          </motion.p>
        </motion.div>

        {/* CARD DIREITO */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-red-500/30 transition-all duration-500 hover:-translate-y-1"
        >

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed mb-6"
          >
            Com foco no ecossistema <strong>React</strong> e{" "}
            <strong>Node.js</strong>, especializei-me em criar aplicações
            full-stack robustas. Minha prioridade é a união entre uma interface
            impecável e um back-end escalável com{" "}
            <strong>PostgreSQL</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed"
          >
            Atualmente, dedico meu tempo aprimorando a performance de aplicações
            e explorando arquiteturas modernas. Acredito que{" "}
            <strong>código limpo</strong> não é um luxo, mas um requisito para
            o sucesso de qualquer produto.
          </motion.p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-2 gap-4">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="border-l-2 border-red-500 pl-4"
            >
              <span className="block text-white font-bold">
                Foco em UI/UX
              </span>

              <span className="text-sm text-gray-500">
                Interfaces Fluidas
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="border-l-2 border-red-500 pl-4"
            >
              <span className="block text-white font-bold">
                Clean Code
              </span>

              <span className="text-sm text-gray-500">
                Código Escalável
              </span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
