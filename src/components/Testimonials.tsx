import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  roleKey: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Penang Gateway made my transition to student life in Penang incredibly smooth. Their visa guidance and accommodation services saved me so much time and stress!",
    name: "Wei Chen",
    role: "International Student",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    roleKey: "internationalStudent"
  },
  {
    quote: "As a first-time visitor to Penang, I was overwhelmed with planning. The travel guides and local tips from Penang Gateway made my vacation perfect!",
    name: "Sarah Johnson",
    role: "Tourist from Australia",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    roleKey: "touristFromAustralia"
  },
  {
    quote: "The immigration information was spot on and up-to-date. I had no issues with my entry process thanks to the detailed guidance provided.",
    name: "Raj Patel",
    role: "Business Traveler",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    roleKey: "businessTraveler"
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image, roleKey }) => {
  const { t } = useLanguage();
  
  return (
    <div className="px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center text-center">
          <img 
            src={image} 
            alt={name} 
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <p className="text-gray-600 italic mb-4">"{quote}"</p>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{t(roleKey)}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('whatPeopleSay')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('hearFromUsers')}</p>
        </div>
        
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;