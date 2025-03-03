import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import FeaturedDestinations from '../components/FeaturedDestinations';
import { GraduationCap, Building, Car, Stethoscope, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('studentServices'),
      description: t('studentServicesDesc'),
      icon: GraduationCap,
      link: "/student-services",
      color: "bg-blue-600"
    },
    {
      title: t('accommodation'),
      description: t('accommodationDesc'),
      icon: Building,
      link: "/accommodation",
      color: "bg-yellow-600"
    },
    {
      title: t('transportServices'),
      description: t('transportServicesDesc'),
      icon: Car,
      link: "/transport",
      color: "bg-red-600"
    },
    {
      title: t('lifeServices'),
      description: t('lifeServicesDesc'),
      icon: Stethoscope,
      link: "/life-services",
      color: "bg-purple-600"
    },
    {
      title: t('travelGuide'),
      description: t('travelGuideDesc'),
      icon: MapPin,
      link: "/travel-guide",
      color: "bg-teal-600"
    }
  ];

  return (
    <div>
      <Hero />
      
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('ourServices')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('comprehensiveSupport')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard key={index + 3} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('aboutPenangGateway')}</h2>
              <p className="text-lg text-gray-600 mb-4">
                {t('aboutParagraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                {t('aboutParagraph2')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('aboutParagraph3')}
              </p>
              <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors">
                {t('learnMoreAboutUs')}
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt={t('penangLandscape')} 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-semibold text-lg">{t('trustedByVisitors')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedDestinations />
      
      <Testimonials />
      
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('readyToExplorePenang')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('helpYouMakeTheMost')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-full transition-colors">
              {t('getStarted')}
            </a>
            <a href="#" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-medium px-6 py-3 rounded-full transition-colors">
              {t('contactUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;