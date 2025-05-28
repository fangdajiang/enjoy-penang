import React from 'react';
import { MapPin, Building, Plane, Car, GraduationCap, Stethoscope } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TravelGuide: React.FC = () => {
  const { t } = useLanguage();
  
  const attractions = [
    {
      title: "Penang Hill",
      description: "Take a scenic funicular railway ride up Penang Hill for panoramic views of Georgetown and the mainland.",
      icon: <MapPin className="w-8 h-8 text-teal-600" />,
      image: "https://images.pexels.com/photos/3389817/pexels-photo-3389817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      titleKey: "penangHill",
      descriptionKey: "penangHillDescription"
    },
    {
      title: "Georgetown Heritage",
      description: "Explore the UNESCO World Heritage Site with its colorful street art, colonial architecture, and rich cultural history.",
      icon: <Building className="w-8 h-8 text-teal-600" />,
      image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      titleKey: "georgetownHeritage",
      descriptionKey: "georgetownDescription"
    },
    {
      title: "Kek Lok Si Temple",
      description: "Visit Malaysia's largest Buddhist temple complex with its impressive seven-story pagoda and bronze statue of Guanyin.",
      icon: <Building className="w-8 h-8 text-teal-600" />,
      image: "https://images.pexels.com/photos/6272235/pexels-photo-6272235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      titleKey: "kekLokSiTemple",
      descriptionKey: "kekLokSiDescription"
    },
    {
      title: "Batu Ferringhi Beach",
      description: "Relax on the pristine beaches of Batu Ferringhi or enjoy thrilling water sports and beachside dining.",
      icon: <Plane className="w-8 h-8 text-teal-600" />,
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      titleKey: "batuFerringhiBeach",
      descriptionKey: "batuFerringhiBeachDescription"
    },
    {
      title: "Penang Food Tour",
      description: "Sample the island's famous street food from Char Koay Teow to Assam Laksa at the hawker centers of Gurney Drive.",
      icon: <GraduationCap className="w-8 h-8 text-teal-600" />,
      image: "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      titleKey: "penangFoodTour",
      descriptionKey: "penangFoodTourDescription"
    },
    {
      title: "Tropical Spice Garden",
      description: "Wander through lush gardens showcasing over 500 varieties of exotic flora and spices native to the region.",
      icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
      image: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      titleKey: "tropicalSpiceGarden",
      descriptionKey: "tropicalSpiceGardenDescription"
    }
  ];

  const culturalExperiences = [
    {
      title: t('peranakan'),
      description: t('peranakanDesc')
    },
    {
      title: t('traditionalCrafts'),
      description: t('traditionalCraftsDesc')
    },
    {
      title: t('culturalPerformances'),
      description: t('culturalPerformancesDesc')
    },
    {
      title: t('festivalCalendar'),
      description: t('festivalCalendarDesc')
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-teal-600">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-40"
            src="https://images.pexels.com/photos/5240516/pexels-photo-5240516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt={t('penangLandscapeAlt')} 
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {t('discoverPenang')}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-white">
            {t('explorePenang')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">{t('topAttractions')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('topAttractionsDescription')}
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img src={attraction.image} alt={t(attraction.titleKey)} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {attraction.icon}
                  <h3 className="ml-2 text-xl font-bold text-gray-900">{t(attraction.titleKey)}</h3>
                </div>
                <p className="text-gray-600">{t(attraction.descriptionKey)}</p>
                <a href="#" className="mt-4 inline-flex items-center text-teal-600 hover:text-teal-700">
                  {t('learnMore')}
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Experiences */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <Car className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">{t('culturalExperiences')}</h2>
            <p className="text-gray-600 text-lg text-center mb-12">
              {t('culturalExperiencesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalExperiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Tips */}
        <div className="mt-24 bg-teal-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('essentialTravelTips')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">{t('bestTimeToVisit')}</h3>
              <p className="text-gray-700">{t('bestTimeToVisitDescription')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">{t('gettingAround')}</h3>
              <p className="text-gray-700">{t('gettingAroundDescription')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">{t('localEtiquette')}</h3>
              <p className="text-gray-700">{t('localEtiquetteDescription')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">{t('safety')}</h3>
              <p className="text-gray-700">{t('safetyDescription')}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('readyToExperiencePenang')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('letUsHelpYouPlan')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-full transition-colors">
              {t('planYourTrip')}
            </a>
            <a href="#" className="bg-white border border-teal-600 hover:bg-teal-50 text-teal-600 font-medium px-6 py-3 rounded-full transition-colors">
              {t('downloadTravelGuide')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;