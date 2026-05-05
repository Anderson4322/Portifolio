import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiPostgresql, SiExpress, SiNpm } from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
      { name: "GitHub", icon: <FaGitAlt className="text-white" /> },
      { name: "NPM", icon: <SiNpm className="text-red-500" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Tecnologias</h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        Tecnologias que utilizo para desenvolver aplicações modernas, performáticas e escaláveis.
      </p>

      <div className="flex flex-col gap-10">
        {skills.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="mb-4 text-red-400 text-lg font-semibold">
              {group.title}
            </h3>

            <div className="flex justify-center gap-4 flex-wrap">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full 
                  hover:bg-red-500 hover:text-white hover:scale-110 
                  transition-all duration-300 shadow-md cursor-default"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}