import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsTranslate } from 'react-icons/bs';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt-BR' ? 'en' : 'pt-BR';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-yellow-400/10 hover:bg-yellow-400/20 rounded-full p-2 transition-colors text-white"
    >
      <BsTranslate className="w-5 h-5" />
      <span className="text-sm font-medium">
        {i18n.language === 'pt-BR' ? 'EN' : 'PT-BR'}
      </span>
    </button>
  );
}
