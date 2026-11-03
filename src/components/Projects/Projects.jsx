import { motion } from "framer-motion";
import ImgCard from "./imagemBACK";
import { Link } from "react-router-dom";
import react from "../../assets/react.svg";
import techcompany from "../../assets/logo.svg";
import Mecanica_logo from "../../assets/mecanicaLogo.jpg";
import Csharp_logo from "../../assets/apiC.png";
import Academia_logo from "../../assets/imageAcademia.jpg";
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
        <h2 className="text-4xl font-bold mb-4">Projetos</h2>

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
            <ImgCard src={Csharp_logo} />
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
            API em Csharp
          </h3>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Desenvolvimento de uma API RESTful em C# utilizando o framework
            ASP.NET Core e Entity Framework. A API fornece endpoints para
            operação GET e é projetada para ser escalável e segura.
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
            <ImgCard src={Mecanica_logo} />
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
            Briefing de Mecanica
          </h3>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Criação de um site de briefing para uma oficina mecânica, utilizando
            HTML, CSS e JavaScript para fornecer informações sobre serviços,
            equipe e contato.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="https://github.com/Anderson4322/Mecanica"
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
              to="https://github.com/Anderson4322/TechCompany_React.js"
              className="text-red-400 font-semibold hover:text-red-300 hover:underline transition-colors"
            >
              Ver Projeto
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          viewport={{ once: true }}
          className="group bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-red-600/50 transition-all duration-300"
        >
          <div className="rounded-xl mb-6">
            <ImgCard src={Academia_logo} />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
            Projeto de Academia
          </h3>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Desenvolvimento de um sistema de gerenciamento para academias,
            incluindo funcionalidades como cadastro de alunos e agendamento de
            treinos.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              to="https://github.com/Anderson4322/dashboardAcademia"
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
