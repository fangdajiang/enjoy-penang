import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: string;
  titleKey?: string;
  descriptionKey?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  color, 
  titleKey, 
  descriptionKey 
}) => {
  const { t } = useLanguage();
  
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className={`p-6 ${color} text-white flex items-center justify-center`}>
          <Icon className="h-12 w-12" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{titleKey ? t(titleKey) : title}</h3>
          <p className="text-gray-600">{descriptionKey ? t(descriptionKey) : description}</p>
          <div className="mt-4 text-blue-600 font-medium flex items-center">
            {t('learnMore')}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;