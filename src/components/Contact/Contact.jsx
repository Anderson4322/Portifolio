import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 text-center bg-black overflow-hidden"
    >
      {/* TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-5xl font-black tracking-tighter text-white mb-4">
          CONTATO
        </h2>

        <p className="text-red-500 font-mono text-sm uppercase tracking-[0.3em]">
          Vamos construir algo juntos
        </p>
      </motion.div>

      {/* LINKS */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">

        {/* LINKEDIN */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <Link to="https://www.linkedin.com/in/anderson-ambr%C3%B3sio-6b8793281/">
            LinkedIn
          </Link>
        </motion.h1>

        {/* GITHUB */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <Link to="https://github.com/Anderson4322">
            GitHub
          </Link>
        </motion.h1>

        {/* WHATSAPP */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <Link to="https://wa.me/17991106474">
            Whatsapp
          </Link>
        </motion.h1>
      </div>

      {/* DETALHE INFERIOR */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 w-16 h-1 bg-red-600 mx-auto rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"
      />
    </section>
  );
}
