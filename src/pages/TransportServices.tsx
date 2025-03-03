import React from 'react';
import { Car, Bus, Plane, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TransportServices: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('transportServices')}</h1>
          <p className="text-xl max-w-3xl">
            {t('transportServicesDesc')}
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('gettingAroundPenang')}</h2>
            <p className="text-lg text-gray-600 mb-4">
              {t('gettingAroundPenangDesc1')}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              {t('gettingAroundPenangDesc2')}
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-5 mb-6">
              <h3 className="text-lg font-medium text-red-800 mb-2">{t('ourTransportServices')}</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('airportPickup')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('carRental')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('privateDriver')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('publicTransportGuidance')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('drivingLicense')}</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/3566358/pexels-photo-3566358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Penang Transportation" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('transportOptions')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-red-600 text-white p-6 flex items-center">
              <Bus className="h-10 w-10" />
              <h3 className="text-xl font-semibold ml-3">{t('publicBuses')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {t('publicBusesDesc')}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{t('busInfo')}:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• {t('fareRange')}</li>
                  <li>• {t('operatingHours')}</li>
                  <li>• {t('busCard')}</li>
                  <li>• {t('busRoutes')}</li>
                  <li>• {t('busFrequency')}</li>
                </ul>
              </div>
              <a href="#" className="text-red-600 hover:text-red-800 font-medium flex items-center">
                {t('moreInfo')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-6 flex items-center">
              <Car className="h-10 w-10" />
              <h3 className="text-xl font-semibold ml-3">{t('rideHailing')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {t('rideHailingDesc')}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{t('keyInformation')}:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Grab - {t('mostPopularOption')}</li>
                  <li>• InDrive - {t('newAlternative')}</li>
                  <li>• {t('priceEstimates')}</li>
                  <li>• {t('paymentMethods')}</li>
                  <li>• {t('appDownload')}</li>
                </ul>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                {t('moreInfo')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white p-6 flex items-center">
              <Car className="h-10 w-10" />
              <h3 className="text-xl font-semibold ml-3">{t('carRental')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {t('carRentalDesc')}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{t('keyInformation')}:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• {t('majorRentalCompanies')}</li>
                  <li>• {t('licenseRequirements')}</li>
                  <li>• {t('typicalPrices')}</li>
                  <li>• {t('insuranceDetails')}</li>
                  <li>• {t('bookingProcess')}</li>
                </ul>
              </div>
              <a href="#" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                {t('moreInfo')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 text-white p-6 flex items-center">
              <Car className="h-10 w-10" />
              <h3 className="text-xl font-semibold ml-3">{t('bicyclesAndEScooters')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {t('bicyclesAndEScootersDesc')}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{t('keyInformation')}:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• {t('rentalRates')}</li>
                  <li>• {t('eScootersAvailability')}</li>
                  <li>• {t('cyclingLanes')}</li>
                  <li>• {t('helmetRequirement')}</li>
                </ul>
              </div>
              <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                {t('moreInfo')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-yellow-600 text-white p-6 flex items-center">
              <Plane className="h-10 w-10" />
              <h3 className="text-xl font-semibold ml-3">{t('airportTransfers')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {t('airportTransfersDesc')}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{t('transferOptions')}:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• {t('airportBuses')}</li>
                  <li>• {t('privateCars')}</li>
                  <li>• {t('shuttleServices')}</li>
                  <li>• {t('rideHailing')}</li>
                  <li>• {t('taxisAtAirport')}</li>
                </ul>
              </div>
              <a href="#" className="text-yellow-600 hover:text-yellow-800 font-medium flex items-center">
                {t('moreInfo')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-teal-600 text-white p-6 flex items-center">
              <MapPin className="h-10 w-10" />
              <h3 className="text-xl font-semibold ml-3">{t('ferryAndBridge')}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {t('ferryAndBridgeDesc')}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">{t('keyInformation')}:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• {t('ferryService')}</li>
                  <li>• {t('firstBridge')}</li>
                  <li>• {t('secondBridge')}</li>
                  <li>• {t('bridgeToll')}</li>
                </ul>
              </div>
              <a href="#" className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                {t('moreInfo')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('drivingInPenang')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('drivingRequirements')}</h3>
              <p className="text-gray-600 mb-4">
                {t('drivingRequirementsDesc')}
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('validLicense')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('internationalLicense')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('licenseConversion')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('minimumAge')}</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">{t('roadRules')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('driveOnLeft')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('speedLimits')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('seatbelts')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('zeroTolerance')}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('parkingInPenang')}</h3>
              <p className="text-gray-600 mb-4">
                {t('parkingInPenangDesc')}
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('couponSystem')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('paidParking')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('illegallyParked')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('freeParking')}</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">{t('navigationTips')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('useNavigationApps')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('oneWayStreets')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('rushHours')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('flooding')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-red-600 text-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('needTransportAssistance')}</h2>
              <p className="mb-6">
                {t('transportAssistanceDesc')}
              </p>
              <a href="#" className="inline-block bg-white text-red-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-full transition-colors">
                {t('requestTransportService')}
              </a>
            </div>
            <div className="bg-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('airportPickupRequest')}</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder={t('yourName')} 
                      className="w-full px-4 py-2 rounded text-gray-700"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder={t('yourEmail')} 
                      className="w-full px-4 py-2 rounded text-gray-700"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder={t('flightNumber')} 
                    className="w-full px-4 py-2 rounded text-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder={t('arrivalDateAndTime')} 
                    className="w-full px-4 py-2 rounded text-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder={t('destinationInPenang')} 
                    className="w-full px-4 py-2 rounded text-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <select className="w-full px-4 py-2 rounded text-gray-700">
                    <option value="">{t('numberOfPassengers')}</option>
                    <option value="1">{t('onePerson')}</option>
                    <option value="2">{t('twoPeople')}</option>
                    <option value="3">{t('threePeople')}</option>
                    <option value="4">{t('fourPeople')}</option>
                    <option value="5+">{t('fivePlusPeople')}</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-red-600 hover:bg-gray-100 font-medium px-6 py-2 rounded transition-colors"
                >
                  {t('submitRequest')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportServices;