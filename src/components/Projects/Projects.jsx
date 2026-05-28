import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImgCard from "./imagemBACK";

import react from "../../assets/react.svg";
import techcompany from "../../assets/logo.svg";
import html from "../../assets/html.jpg";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto overflow-hidden"
    >

      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          Projetos
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="h-1 bg-red-600 mx-auto rounded-full"
        />
      </motion.div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Projeto 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-red-600/50 transition-all duration-300"
        >

          <div className="rounded-xl mb-6">
            <ImgCard src={'https://static.vecteezy.com/ti/vetor-gratis/p1/7570850-backend-development-line-icone-vetor.jpg'} />
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
            Back-End Pessoal
          </h3>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            API REST com Node.js, Express e PostgreSQL, incluindo CRUD completo,
            organização em camadas e integração com banco de dados.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="https://github.com/Anderson4322/Back-End-Pessoal"
              className="text-red-400 font-semibold hover:text-red-300 hover:underline transition-colors"
            >
              Ver Projeto
            </Link>
          </div>

        </motion.div>

        {/* Projeto 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="group bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-red-600/50 transition-all duration-300"
        >

          <div className="rounded-xl mb-6">
            <ImgCard src={html} />
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
            HTMLs
          </h3>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Coleção de interfaces responsivas utilizando HTML, CSS e boas
            práticas de layout moderno.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="https://github.com/Anderson4322/Htmls"
              className="text-red-400 font-semibold hover:text-red-300 hover:underline transition-colors"
            >
              Ver Projeto
            </Link>
          </div>

        </motion.div>

        {/* Projeto 3 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="group bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-red-600/50 transition-all duration-300"
        >

          <div className="rounded-xl mb-6">
            <ImgCard src={react} />
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
            React Native App
          </h3>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Aplicação mobile desenvolvida com React Native, focada em integração
            com APIs e navegação entre telas.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="https://github.com/Anderson4322/ReactNative"
              className="text-red-400 font-semibold hover:text-red-300 hover:underline transition-colors"
            >
              Ver Projeto
            </Link>
          </div>

        </motion.div>

        {/* Projeto 4 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
          className="group bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-red-600/50 transition-all duration-300"
        >

          <div className="rounded-xl mb-6">
            <ImgCard src={techcompany} />
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
            Tech Company
          </h3>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Landing page moderna com React e Tailwind focada em design
            profissional, animações e experiência do usuário.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="https://github.com/Anderson4322/TechCompany"
              className="text-red-400 font-semibold hover:text-red-300 hover:underline transition-colors"
            >
              Ver Projeto
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
