import React from 'react';
import { Stethoscope, Landmark, Wifi } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LifeServices: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('lifeServices')}</h1>
          <p className="text-xl max-w-3xl">
            {t('lifeServicesDesc')}
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('livingInPenang')}</h2>
            <p className="text-lg text-gray-600 mb-4">
              {t('livingInPenangDesc1')}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              {t('livingInPenangDesc2')}
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 mb-6">
              <h3 className="text-lg font-medium text-purple-800 mb-2">{t('ourLifeServices')}</h3>
              <ul className="space-y-2 text-purple-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('healthcareInfo')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('bankingServices')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('mobileInternet')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('shoppingInfo')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('utilityConnections')}</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/4552353/pexels-photo-4552353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt={t('penangLifestyleAlt')} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('essentialLifeServices')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 text-white p-6 flex items-center">
              <Stethoscope className="h-10 w-10" />
              <h3 className="text-xl font-semibold ml-3">{t('healthcare')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {t('healthcareDesc')}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{t('keyInformation')}:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• {t('privateHospitals')}</li>
                  <li>• {t('publicHospitals')}</li>
                  <li>• {t('medicalInsurance')}</li>
                  <li>• {t('doctorsEnglish')}</li>
                  <li>• {t('pharmacies')}</li>
                </ul>
              </div>
              <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                {t('healthcareGuide')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-6 flex items-center">
              <Landmark className="h-10 w-10" />
              <h3 className="text-xl font-semibold ml-3">{t('banking')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {t('bankingDesc')}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{t('keyInformation')}:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• {t('majorBanks')}</li>
                  <li>• {t('documentsNeeded')}</li>
                  <li>• {t('atmsAvailable')}</li>
                  <li>• {t('onlineBanking')}</li>
                  <li>• {t('creditCards')}</li>
                </ul>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                {t('bankingGuide')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white p-6 flex items-center">
              <Wifi className="h-10 w-10" />
              <h3 className="text-xl font-semibold ml-3">{t('telecommunications')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {t('telecomDesc')}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{t('keyInformation')}:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• {t('majorProviders')}</li>
                  <li>• {t('touristSim')}</li>
                  <li>• {t('homeInternet')}</li>
                  <li>• {t('freeWifi')}</li>
                  <li>• {t('fourGCoverage')}</li>
                </ul>
              </div>
              <a href="#" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                {t('telecomGuide')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('needHelp')}</h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            {t('needHelpDesc')}
          </p>
          <div className="flex justify-center">
            <a 
              href="#" 
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              {t('contactLifeServices')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeServices;