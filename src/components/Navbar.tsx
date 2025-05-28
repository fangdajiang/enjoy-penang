import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive ? 'bg-blue-700' : ''}`}>{t('home')}</NavLink>
            <NavLink to="/student-services" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive ? 'bg-blue-700' : ''}`}>{t('studentServices')}</NavLink>
            <NavLink to="/accommodation" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive ? 'bg-blue-700' : ''}`}>{t('accommodation')}</NavLink>
            <NavLink to="/transport" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive ? 'bg-blue-700' : ''}`}>{t('transportServices')}</NavLink>
            <NavLink to="/life-services" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive ? 'bg-blue-700' : ''}`}>{t('lifeServices')}</NavLink>
            <NavLink to="/travel-guide" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive ? 'bg-blue-700' : ''}`}>{t('travelGuide')}</NavLink>
            <NavLink to="/faq" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive ? 'bg-blue-700' : ''}`}>{t('faq')}</NavLink>
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
            <NavLink to="/" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`} onClick={toggleMenu}>{t('home')}</NavLink>
            <NavLink to="/student-services" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`} onClick={toggleMenu}>{t('studentServices')}</NavLink>
            <NavLink to="/accommodation" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`} onClick={toggleMenu}>{t('accommodation')}</NavLink>
            <NavLink to="/transport" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`} onClick={toggleMenu}>{t('transportServices')}</NavLink>
            <NavLink to="/life-services" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`} onClick={toggleMenu}>{t('lifeServices')}</NavLink>
            <NavLink to="/travel-guide" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`} onClick={toggleMenu}>{t('travelGuide')}</NavLink>
            <NavLink to="/faq" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`} onClick={toggleMenu}>{t('faq')}</NavLink>
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