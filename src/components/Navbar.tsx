import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <MapPin className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">{t('penangGatewayBrand')}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">{t('home')}</Link>
            <Link to="/student-services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">{t('studentServices')}</Link>
            <Link to="/accommodation" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">{t('accommodation')}</Link>
            <Link to="/transport" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">{t('transportServices')}</Link>
            <Link to="/life-services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">{t('lifeServices')}</Link>
            <Link to="/travel-guide" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">{t('travelGuide')}</Link>
            <Link to="/faq" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">{t('faq')}</Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-600">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>{t('home')}</Link>
            <Link to="/student-services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>{t('studentServices')}</Link>
            <Link to="/accommodation" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>{t('accommodation')}</Link>
            <Link to="/transport" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>{t('transportServices')}</Link>
            <Link to="/life-services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>{t('lifeServices')}</Link>
            <Link to="/travel-guide" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>{t('travelGuide')}</Link>
            <Link to="/faq" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={toggleMenu}>{t('faq')}</Link>
            <div className="mt-4 px-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;