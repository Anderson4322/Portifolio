import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Contato</h2>

      <p className="text-gray-300 mb-6">
        Vamos trabalhar juntos ou trocar uma ideia 🚀
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <h1><Link to="https://www.linkedin.com/in/anderson-ambrosio-6b8793281">LinkedIn</Link></h1>

        <h1><Link to="https://github.com/Anderson4322">GitHub</Link></h1>
        <h1>
          <Link to="https://mail.google.com/mail/anderskyfelipe@gmail.com">Gmail</Link>
        </h1>
      </div>
    </section>
  );
}
