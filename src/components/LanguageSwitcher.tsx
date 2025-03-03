import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
    >
      <span className="mr-1">{language === 'en' ? '中文' : 'English'}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h20M12 2v20" />
      </svg>
    </button>
  );
};

export default LanguageSwitcher;
