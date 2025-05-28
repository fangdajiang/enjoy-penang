import React from 'react';
import { Building, Home, Hotel } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AccommodationOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  priceRange: string;
  titleKey?: string;
  descriptionKey?: string;
  featuresKeys?: string[];
  priceRangeKey?: string;
}

const accommodationOptions: AccommodationOptionProps[] = [
  {
    title: "Hotels & Resorts",
    description: "From luxury beachfront resorts to boutique heritage hotels in Georgetown.",
    icon: <Hotel className="h-10 w-10 text-yellow-500" />,
    features: [
      "Daily housekeeping",
      "Restaurant and room service",
      "Swimming pools and fitness centers",
      "24-hour reception"
    ],
    priceRange: "RM150 - RM800+ per night",
    titleKey: "hotelsAndResorts",
    descriptionKey: "hotelsDesc",
    featuresKeys: [
      "dailyHousekeeping",
      "restaurantAndRoomService",
      "swimmingPools",
      "hourReception"
    ],
    priceRangeKey: "hotelsPriceRange"
  },
  {
    title: "Serviced Apartments",
    description: "Fully furnished apartments with hotel-like amenities for short to medium stays.",
    icon: <Building className="h-10 w-10 text-blue-500" />,
    features: [
      "Fully equipped kitchen",
      "Living and dining areas",
      "Weekly housekeeping",
      "Security services"
    ],
    priceRange: "RM2,500 - RM5,000+ per month",
    titleKey: "servicedApartments",
    descriptionKey: "servicedApartmentsDesc",
    featuresKeys: [
      "fullyEquippedKitchen",
      "livingAndDiningAreas",
      "weeklyHousekeeping",
      "securityServices"
    ],
    priceRangeKey: "servicedApartmentsPriceRange"
  },
  {
    title: "Condos & Apartments",
    description: "Residential condominiums and apartments for long-term rentals with modern amenities.",
    icon: <Home className="h-10 w-10 text-green-500" />,
    features: [
      "Fully furnished options available",
      "Swimming pool and gym access",
      "Security and parking",
      "Minimum 12-month lease terms typical"
    ],
    priceRange: "RM1,500 - RM4,000+ per month",
    titleKey: "condosAndApartments",
    descriptionKey: "condosDesc",
    featuresKeys: [
      "fullyFurnishedOptions",
      "facilityAccess",
      "securityAndParking",
      "minimumLeaseTerms"
    ],
    priceRangeKey: "condosPriceRange"
  }
];

const AccommodationOption: React.FC<AccommodationOptionProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  priceRange,
  titleKey,
  descriptionKey,
  featuresKeys,
  priceRangeKey
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold ml-3">{titleKey ? t(titleKey) : title}</h3>
        </div>
        <p className="text-gray-600 mb-6">
          {descriptionKey ? t(descriptionKey) : description}
        </p>
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2">{t('features')}:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{featuresKeys && featuresKeys[index] ? t(featuresKeys[index]) : feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-2">{t('priceRange')}:</h4>
          <p className="text-gray-600">{priceRangeKey ? t(priceRangeKey) : priceRange}</p>
        </div>
        <div className="mt-6">
          <a href="#" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
            {t('viewOptions')}
          </a>
        </div>
      </div>
    </div>
  );
};

const Accommodation: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('accommodation')}</h1>
          <p className="text-xl max-w-3xl">
            {t('accommodationDesc')}
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('findYourHomeInPenang')}</h2>
            <p className="text-lg text-gray-600 mb-4">
              {t('accommodationDesc1')}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              {t('accommodationDesc2')}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              {t('accommodationDesc3')}
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/3774041/pexels-photo-3774041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt={t('penangAccommodationAlt')} 
              className="rounded-lg shadow-lg h-full object-cover"
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('accommodationOptions')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {accommodationOptions.map((option, index) => (
            <AccommodationOption key={index} {...option} />
          ))}
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('popularLocations')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5007456/pexels-photo-5007456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt={t('georgetownAlt')} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('georgetownHeritageZone')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('georgetownDesc')}
                </p>
                <div>
                  <span className="text-sm font-medium text-gray-800">{t('perfectFor')}:</span>
                  <p className="text-gray-600">{t('tourists')}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/13582942/pexels-photo-13582942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt={t('batuFerringhiAlt')} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('batuFerringhi')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('batuFerringhiDesc')}
                </p>
                <div>
                  <span className="text-sm font-medium text-gray-800">{t('perfectFor')}:</span>
                  <p className="text-gray-600">{t('beachLovers')}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt={t('gurneyAlt')} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('gurneyArea')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('gurneyDesc')}
                </p>
                <div>
                  <span className="text-sm font-medium text-gray-800">{t('perfectFor')}:</span>
                  <p className="text-gray-600">{t('professionals')}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt={t('gelugorAlt')} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('gelugorAndBayanLepas')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('gelugorDesc')}
                </p>
                <div>
                  <span className="text-sm font-medium text-gray-800">{t('perfectFor')}:</span>
                  <p className="text-gray-600">{t('students')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('bookingTips')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{t('bestTimeToBook')}</h3>
                <p className="text-gray-600">
                  {t('bestTimeToBookDesc')}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('longTermRentals')}</h3>
                <p className="text-gray-600">
                  {t('longTermRentalsDesc')}
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{t('utilities')}</h3>
                <p className="text-gray-600">
                  {t('utilitiesDesc')}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('negotiation')}</h3>
                <p className="text-gray-600">
                  {t('negotiationDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('ourAccommodationServices')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{t('shortTermBooking')}</h3>
              <p className="text-gray-600 mb-4">
                {t('shortTermBookingDesc')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{t('longTermRentalFinding')}</h3>
              <p className="text-gray-600 mb-4">
                {t('longTermRentalFindingDesc')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{t('viewingArrangements')}</h3>
              <p className="text-gray-600 mb-4">
                {t('viewingArrangementsDesc')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{t('leaseNegotiation')}</h3>
              <p className="text-gray-600 mb-4">
                {t('leaseNegotiationDesc')}
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('findYourPerfectStay')}</h2>
            <p className="max-w-3xl mx-auto mb-6">
              {t('getPersonalizedRecommendations')}
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t('contactAccommodationTeam')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;