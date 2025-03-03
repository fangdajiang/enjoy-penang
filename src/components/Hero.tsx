import React from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <div 
        className="h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5240516/pexels-photo-5240516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              {t('exploreBeautifulPenang')}
            </h1>
            <p className="text-xl sm:text-2xl mb-8">
              {t('discoverMalaysia')}
            </p>
            <a 
              href="#services" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full text-lg transition-colors"
            >
              {t('getStarted')}
            </a>
            
            <div className="mt-12 relative max-w-2xl mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder={t('searchPlaceholder')}
                  className="w-full py-4 px-6 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Search className="h-6 w-6" />
                  <span className="sr-only">{t('searchButton')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;