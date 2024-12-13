import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Configurações do EmailJS - substitua com suas credenciais reais
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

emailjs.init(EMAILJS_PUBLIC_KEY);

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setStatus('idle');

    try {
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        phone: formData.telefone,
        subject: formData.assunto,
        message: formData.mensagem,
        to_name: 'Osmar Beraldo', // Nome do destinatário
        to_email: 'osmarjunioberaldo@hotmail.com'
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus('error');
    } finally {
      setEnviando(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          Entre em Contato
        </h2>

        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* Redes Sociais */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://linkedin.com/in/seu-perfil"
              className="flex items-center gap-2 bg-[#0A66C2]/10 text-[#0A66C2] px-4 py-2 rounded-full hover:bg-[#0A66C2]/20 transition-colors"
            >
              <img
                src="https://cdn.simpleicons.org/linkedin/0A66C2"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/seu-perfil"
              className="flex items-center gap-2 bg-[#E4405F]/10 text-[#E4405F] px-4 py-2 rounded-full hover:bg-[#E4405F]/20 transition-colors"
            >
              <img
                src="https://cdn.simpleicons.org/instagram/E4405F"
                alt="Instagram"
                className="w-5 h-5"
              />
              Instagram
            </a>
            <a
              href="https://facebook.com/seu-perfil"
              className="flex items-center gap-2 bg-[#1877F2]/10 text-[#1877F2] px-4 py-2 rounded-full hover:bg-[#1877F2]/20 transition-colors"
            >
              <img
                src="https://cdn.simpleicons.org/facebook/1877F2"
                alt="Facebook"
                className="w-5 h-5"
              />
              Facebook
            </a>
            <a
              href="https://t.me/seu-perfil"
              className="flex items-center gap-2 bg-[#26A5E4]/10 text-[#26A5E4] px-4 py-2 rounded-full hover:bg-[#26A5E4]/20 transition-colors"
            >
              <img
                src="https://cdn.simpleicons.org/telegram/26A5E4"
                alt="Telegram"
                className="w-5 h-5"
              />
              Telegram
            </a>
            <a
              href="mailto:osmarjunioberaldo@hotmail.com"
              className="flex items-center gap-2 bg-gray-500/10 text-gray-300 px-4 py-2 rounded-full hover:bg-gray-500/20 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              osmarjunioberaldo@hotmail.com
            </a>
          </div>

          {/* Formulário de Contato */}
          <div className="w-full mt-8">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
              Formulário de Contato
            </h3>
            
            {status === 'success' && (
              <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-center">
                Mensagem enviada com sucesso!
              </div>
            )}

            {status === 'error' && (
              <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-center">
                Erro ao enviar mensagem. Por favor, tente novamente.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome Completo *"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                />
                <input
                  type="text"
                  name="assunto"
                  placeholder="Assunto *"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                />
              </div>

              <textarea
                name="mensagem"
                placeholder="Mensagem *"
                required
                value={formData.mensagem}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />

              <button
                type="submit"
                disabled={enviando}
                className="w-full md:w-auto px-8 py-3 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enviando ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}