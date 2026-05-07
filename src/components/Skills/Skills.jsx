import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24 text-center bg-black overflow-hidden">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >

        {/* TITULO */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-white uppercase tracking-tighter"
        >
          Tecnologias
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-xl mx-auto mb-16 leading-relaxed"
        >
          Tecnologias que utilizo para desenvolver aplicações modernas,
          performáticas e escaláveis.
        </motion.p>

        {/* --- FRONTEND --- */}
        <div className="mb-16">

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-8 text-red-500 text-1xl font-bold tracking-[0.3em]"
          >
            FRONTEND
          </motion.h3>

          <div className="flex justify-center gap-6 flex-wrap">

            {/* React */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            >
              <motion.img
                whileHover={{ rotate: 8 }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-6 h-6"
              />
              <p className="text-gray-300 font-medium text-sm">React</p>
            </motion.div>

            {/* JavaScript */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-yellow-500/50 transition-all duration-300"
            >
              <motion.img
                whileHover={{ rotate: 8 }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JS"
                className="w-6 h-6"
              />
              <p className="text-gray-300 font-medium text-sm">JavaScript</p>
            </motion.div>

            {/* Tailwind */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-blue-200/50 transition-all duration-300"
            >
              <motion.img
                whileHover={{ rotate: 8 }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind"
                className="w-6 h-6"
              />
              <p className="text-gray-300 font-medium text-sm">Tailwind</p>
            </motion.div>

            {/* HTML */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-red-500/50 transition-all duration-300"
            >
              <motion.img
                whileHover={{ rotate: 8 }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
                className="w-6 h-6"
              />
              <p className="text-gray-300 font-medium text-sm">HTML</p>
            </motion.div>

            {/* CSS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-blue-600/50 transition-all duration-300"
            >
              <motion.img
                whileHover={{ rotate: 8 }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
                className="w-6 h-6"
              />
              <p className="text-gray-300 font-medium text-sm">CSS</p>
            </motion.div>

            {/* BOOTSTRAP */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="flex items-center cursor-pointer gap-3 bg-gray-900 border border-white/5 px-6 py-3 rounded-xl hover:border-purple-500/50 transition-all duration-300"
            >
              <motion.img
                whileHover={{ rotate: 8 }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
                className="w-6 h-6"
              />
              <p className="text-gray-300 font-medium text-sm">Bootstrap</p>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}
