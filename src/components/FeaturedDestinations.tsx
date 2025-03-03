import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface DestinationProps {
  name: string;
  description: string;
  image: string;
  translationKey: string;
  descriptionKey: string;
}

const destinations: DestinationProps[] = [
  {
    name: "Georgetown Heritage",
    description: "Explore the UNESCO World Heritage Site with its unique cultural blend and historic architecture.",
    image: "https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    translationKey: "georgetownHeritage",
    descriptionKey: "georgetownDescription"
  },
  {
    name: "Penang Hill",
    description: "Take a scenic funicular railway ride to enjoy panoramic views of the island from 833m above sea level.",
    image: "https://images.pexels.com/photos/5240489/pexels-photo-5240489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    translationKey: "penangHill",
    descriptionKey: "penangHillDescription"
  },
  {
    name: "Kek Lok Si Temple",
    description: "Visit Malaysia's largest Buddhist temple complex with its impressive architecture and gardens.",
    image: "https://images.pexels.com/photos/6272235/pexels-photo-6272235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    translationKey: "kekLokSiTemple",
    descriptionKey: "kekLokSiDescription"
  },
  {
    name: "Batu Ferringhi Beach",
    description: "Relax at this popular beach destination known for its soft white sand and water sports activities.",
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    translationKey: "batuFerringhiBeach",
    descriptionKey: "batuFerringhiDescription"
  }
];

const Destination: React.FC<DestinationProps> = ({ name, description, image, translationKey, descriptionKey }) => {
  const { t } = useLanguage();
  
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img 
        src={image} 
        alt={t(translationKey)} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white">{t(translationKey)}</h3>
        <p className="text-white/80 mt-2">{t(descriptionKey)}</p>
        <a href="#" className="mt-4 inline-block text-sm font-medium text-white hover:text-yellow-300 transition-colors">
          {t('discoverMore')}
        </a>
      </div>
    </div>
  );
};

const FeaturedDestinations: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('discoverPenangTreasures')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('exploreCulturalDestinations')}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Destination key={index} {...destination} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors">
            {t('viewAllDestinations')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;