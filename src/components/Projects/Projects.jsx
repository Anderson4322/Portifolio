import { Link } from "react-router-dom";
import ImgCard from "./imagemBACK"

import react from "../../assets/react.svg"
import techcompany from "../../assets/logo.svg"
import html from "../../assets/html.jpg"
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Projeto 1 */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300">
        <ImgCard src={'https://static.vecteezy.com/ti/vetor-gratis/p1/7570850-backend-development-line-icone-vetor.jpg'}/>
          <h3 className="text-xl font-semibold">Back-End Pessoal</h3>

          <p className="text-gray-400 mt-2">
            API REST com Node.js, Express e PostgreSQL, incluindo CRUD completo,
            organização em camadas e integração com banco de dados.
          </p>

          <div className="flex gap-4 mt-4">
            <h1 className="text-red-400 hover:underline">
          <Link to="https://github.com/Anderson4322/Back-End-Pessoal">Ver Projeto</Link> 
            </h1>
        
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300">
            <ImgCard src={html}/>


          <h3 className="text-xl font-semibold">HTMLs</h3>

          <p className="text-gray-400 mt-2">
            Coleção de interfaces responsivas utilizando HTML, CSS e boas
            práticas de layout moderno.
          </p>

          <div className="flex gap-4 mt-4">
           <h1 className="text-red-400 hover:underline">
          <Link to="https://github.com/Anderson4322/Htmls">Ver Projeto</Link> 
            </h1>
          
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300">
          <ImgCard src={react}/>

          <h3 className="text-xl font-semibold">React Native App</h3>

          <p className="text-gray-400 mt-2">
            Aplicação mobile desenvolvida com React Native, focada em integração
            com APIs e navegação entre telas.
          </p>

          <div className="flex gap-4 mt-4">
            <h1 className="text-red-400 hover:underline">
          <Link to="https://github.com/Anderson4322/ReactNative">Ver Projeto</Link> 
            </h1>
           
          </div>
        </div>
        {/* Projeto 4 */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300">
          <ImgCard src={techcompany}/>

          <h3 className="text-xl font-semibold">Projeto TechCompany</h3>

          <p className="text-gray-400 mt-2">
            Aplicação mobile desenvolvida com React Native, focada em integração
            com APIs e navegação entre telas.
          </p>

          <div className="flex gap-4 mt-4">
             <h1 className="text-red-400 hover:underline">
          <Link to="https://github.com/Anderson4322/TechCompany">Ver Projeto</Link> 
            </h1>
           
          </div>
        </div>
      


      </div>
    </section>
  );
}
