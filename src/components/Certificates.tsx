import React from 'react';
import { useTranslation } from 'react-i18next';

export function Certificates() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
          {t('certificates.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto bg-blue-950 rounded-3xl p-8">
          {/* Cabeçalho com ícone e local */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{t('certificates.my_certificates')}</h3>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-2xl font-bold text-white mb-4">
            {t('certificates.constantly_updating')}
          </h2>

          {/* Lista de responsabilidades */}
          <ul className="space-y-3 text-gray-300">            
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">→</span>
              <span>{t('certificates.description')}</span>
            </li>
          </ul>

          {/* Link para certificados */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1g2xwjoSDSmpSS0XoKc8nMi3xKxMaz6uq?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-900/30 border border-white/20 rounded-full hover:bg-blue-800/40 hover:border-white/40 transition-all cursor-pointer"
            >
              <img 
                src="https://cdn.simpleicons.org/googledrive/4285F4" 
                alt="Google Drive" 
                className="w-8 h-8"
              />
              <span className="text-white text-lg font-medium">{t('certificates.view_certificates')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}