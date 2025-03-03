import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Penang Gateway</span>
            </h3>
            <p className="text-gray-300 mb-4">Your trusted companion for all things Penang. We help international visitors, students, and tourists navigate life in Penang with ease.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400">
                <span className="sr-only">Facebook</span>
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-blue-600 font-bold">F</span>
                </div>
              </a>
              <a href="#" className="hover:text-pink-400">
                <span className="sr-only">Instagram</span>
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-pink-600 font-bold">IG</span>
                </div>
              </a>
              <a href="#" className="hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-blue-400 font-bold">X</span>
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/student-services" className="text-gray-300 hover:text-white transition-colors">Student Services</Link></li>
              <li><Link to="/immigration" className="text-gray-300 hover:text-white transition-colors">Immigration</Link></li>
              <li><Link to="/accommodation" className="text-gray-300 hover:text-white transition-colors">Accommodation</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/transport" className="text-gray-300 hover:text-white transition-colors">Transport Services</Link></li>
              <li><Link to="/life-services" className="text-gray-300 hover:text-white transition-colors">Life Services</Link></li>
              <li><Link to="/travel-guide" className="text-gray-300 hover:text-white transition-colors">Travel Guide</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Document Translation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Airport Pickup</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">George Town, Penang, Malaysia</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-300" />
                <a href="mailto:info@penanggateway.com" className="text-gray-300 hover:text-white transition-colors">info@penanggateway.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-300" />
                <a href="tel:+6046123456" className="text-gray-300 hover:text-white transition-colors">+604-612 3456</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Penang Gateway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;