import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("https://devosmar.com.br/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to_email: "contato@devosmar.com.br",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || t('contact.error_message'));
      }

      if (data.status === "success") {
        setStatus("success");
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
          mensagem: "",
        });
      } else {
        throw new Error(data.message || t('contact.error_message'));
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t('contact.error_message'));
    } finally {
      setEnviando(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="min-h-screen bg-zinc-950 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          {t('contact.title')}
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-zinc-900/50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-300"
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-zinc-800 border border-zinc-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-zinc-800 border border-zinc-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm font-medium text-gray-300"
                >
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-zinc-800 border border-zinc-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium text-gray-300"
                >
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-zinc-800 border border-zinc-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-300"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full bg-zinc-800 border border-zinc-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                className={`w-full bg-yellow-400 text-black py-2 px-4 rounded-md font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors ${
                  enviando ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {enviando ? t('contact.sending') : t('contact.send_message')}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center mt-4">
                  {t('contact.success_message')}
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center mt-4">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-yellow-400">
              {t('contact.other_ways')}
            </h3>
            <p className="text-gray-300">
              {t('contact.choose_preferred')}
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/5543933002712?text=Olá,%20vim%20pelo%20seu%20site"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-500/10 text-gray-300 px-4 py-2 rounded-full hover:bg-gray-500/20 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/osmarjberaldo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-500/10 text-gray-300 px-4 py-2 rounded-full hover:bg-gray-500/20 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:contato@devosmar.com.br"
                className="flex items-center gap-2 bg-gray-500/10 text-gray-300 px-4 py-2 rounded-full hover:bg-gray-500/20 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contato@devosmar.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
