export default function Skills() {
  return (
    <section id="skills" className="py-24 text-center bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-tighter">
          Tecnologias
        </h2>
        
        <p className="text-gray-400 max-w-xl mx-auto mb-16 leading-relaxed">
          Tecnologias que utilizo para desenvolver aplicações modernas, 
          performáticas e escaláveis.
        </p>

        {/* --- GRUPO: FRONTEND --- */}
        <div className="mb-16">
          <h3 className="mb-8 text-red-500 text-1xl font-bold  tracking-[0.3em]">
            FRONTEND
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            
            {/* React */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">React</p>
            </div>

            {/* JavaScript */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">JavaScript</p>
            </div>

            {/* Tailwind */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">Tailwind</p>
            </div>

            {/* HTML */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">HTML</p>
            </div>

            {/* CSS */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">CSS</p>
            </div>
              {/* BOOTSTRAP */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-purple-500/50 transition-all">
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              className="w-6 h-6"
              />
  <p className="text-gray-300 font-medium text-sm">Bootstrap</p>
</div>

          </div>
        </div>

        {/* --- GRUPO: BACKEND --- */}
        <div className="mb-16">
          <h3 className="mb-8 text-red-500 text-sm font-bold uppercase tracking-[0.3em]">
            Backend
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            
            {/* Node.js */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">Node.js</p>
            </div>

            {/* Express */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">Express</p>
            </div>

            {/* PostgreSQL */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="Postgres" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">PostgreSQL</p>
            </div>

          </div>
        </div>

        {/* --- GRUPO: FERRAMENTAS --- */}
        <div className="mb-16">
          <h3 className="mb-8 text-red-500 text-sm font-bold uppercase tracking-[0.3em]">
            Ferramentas
          </h3>
          <div className="flex justify-center cursor-pointer gap-6 flex-wrap">
            
            {/* Git */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">Git</p>
            </div>

            {/* GitHub */}
            <div className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">GitHub</p>
            </div>

            {/* NPM */}
            <div className="flex items-center gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" className="w-6 h-6" />
              <p className="text-gray-300 font-medium text-sm">NPM</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
