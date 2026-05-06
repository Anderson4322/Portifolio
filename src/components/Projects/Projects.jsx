import { Link } from "react-router-dom";
import ImgCard from "./imagemBACK";

import react from "../../assets/react.svg";
import techcompany from "../../assets/logo.svg";
import html from "../../assets/html.jpg";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Projetos</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Projeto 1 */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-red-600/50 transition-all duration-300">
          <div className="rounded-xl mb-6">
            <ImgCard src={'https://static.vecteezy.com/ti/vetor-gratis/p1/7570850-backend-development-line-icone-vetor.jpg'}/>
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
        </div>

        {/* Projeto 2 */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-red-600/50 transition-all duration-300">
          <div className="rounded-xl mb-6">
            <ImgCard src={html}/>
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
        </div>

        {/* Projeto 3 */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-red-600/50 transition-all duration-300">
          <div className="rounded-xl mb-6">
            <ImgCard src={react}/>
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
        </div>
        {/* Projeto 4 */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-transparent hover:border-red-600/50 transition-all duration-300">
          <div className="rounded-xl mb-6">
            <ImgCard src={techcompany}/>
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
        </div>

      </div>
    </section>
  );
}