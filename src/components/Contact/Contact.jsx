import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center bg-black">
      {/* Container de Título */}
      <div className="mb-16">
        <h2 className="text-5xl font-black tracking-tighter text-white mb-4">
          CONTATO
        </h2>
        <p className="text-red-500 font-mono text-sm uppercase tracking-[0.3em]">
          Vamos construir algo juntos
        </p>
      </div>

      {/* Grid de Links/Texto */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        
        <h1 className="text-xl font-medium text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300 cursor-pointer">
         <Link to="https://www.linkedin.com/in/anderson-ambr%C3%B3sio-6b8793281/">LinkedIn</Link> 
        </h1>

        <h1 className="text-xl font-medium text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300 cursor-pointer">
        <Link to="https://github.com/Anderson4322">GitHub</Link>
        </h1>

        <h1 className="text-xl font-medium text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300 cursor-pointer">
        <Link to="https://wa.me/17991106474">Whatsapp</Link>  
        </h1>

      </div>

      {/* Detalhe Visual Inferior */}
      <div className="mt-20 w-16 h-1 bg-red-600 mx-auto rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
    </section>
  );
}
