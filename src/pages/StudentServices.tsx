import React from 'react';
import { Book, Plane, Home, FileText, School, Briefcase, Wallet } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const StudentServices: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('universityApplication'),
      description: t('universityApplicationDesc'),
      icon: School,
    },
    {
      title: t('studentVisa'),
      description: t('studentVisaDesc'),
      icon: FileText,
    },
    {
      title: t('preDeparture'),
      description: t('preDepartureDesc'),
      icon: Plane,
    },
    {
      title: t('accommodationSearch'),
      description: t('accommodationSearchDesc'),
      icon: Home,
    },
    {
      title: t('orientation'),
      description: t('orientationDesc'),
      icon: Book,
    },
    {
      title: t('partTimeJob'),
      description: t('partTimeJobDesc'),
      icon: Briefcase,
    }
  ];

  const universities = [
    {
      name: t('usm'),
      description: t('usmDesc'),
      link: "https://www.usm.my/",
    },
    {
      name: t('penangMedical'),
      description: t('penangMedicalDesc'),
      link: "https://www.rcsiucd.edu.my/",
    },
    {
      name: t('wawasanUniversity'),
      description: t('wawasanUniversityDesc'),
      link: "https://www.wou.edu.my/",
    },
    {
      name: t('distedCollege'),
      description: t('distedCollegeDesc'),
      link: "https://www.disted.edu.my/",
    },
    {
      name: t('kduPenang'),
      description: t('kduPenangDesc'),
      link: "https://www.kdupg.edu.my/",
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="relative bg-blue-700 text-white py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt={t('studentServices')} 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t('studentServices')}</h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            {t('comprehensiveStudentSupport')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{t('ourServicesForStudents')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('studentServiceDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                {t('learnMore')} <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('universitiesInPenang')}</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              {t('universitiesDescription')}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {universities.map((university, index) => (
              <div key={index} className={`p-6 ${index !== universities.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                    <p className="mt-1 text-gray-600">{university.description}</p>
                  </div>
                  <a 
                    href={university.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t('visitWebsite')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-blue-50 rounded-xl p-8">
          <div className="md:flex md:items-center">
            <div className="md:flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('needMoreHelp')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('scheduleConsultation')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-colors">
                  {t('bookConsultation')}
                </a>
                <a href="#" className="bg-white border border-blue-600 hover:bg-blue-50 text-blue-600 font-medium px-5 py-2 rounded-lg transition-colors">
                  {t('browseFAQs')}
                </a>
              </div>
            </div>
            <div className="hidden md:block md:flex-shrink-0 mt-8 md:mt-0 md:ml-8">
              <Wallet className="h-24 w-24 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentServices;