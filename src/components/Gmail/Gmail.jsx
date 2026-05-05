import { useState } from "react";

export default function EmailPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Mensagem enviada! 🚀");
    console.log(form);

    // Aqui depois você pode integrar com EmailJS ou backend
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      <div className="w-full max-w-xl bg-gray-900 rounded-2xl shadow-lg p-8">

        {/* Header estilo Gmail */}
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Enviar mensagem
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Nome */}
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="bg-gray-800 p-3 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-gray-800 p-3 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Mensagem */}
          <textarea
            name="mensagem"
            placeholder="Digite sua mensagem..."
            value={form.mensagem}
            onChange={handleChange}
            rows="5"
            required
            className="bg-gray-800 p-3 rounded-lg text-white outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Botão */}
          <button
            type="submit"
            className="bg-red-600 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
          >
            Enviar
          </button>

        </form>
      </div>
    </div>
  );
}