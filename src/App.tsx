import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StudentServices from './pages/StudentServices';
import TravelGuide from './pages/TravelGuide';
import Accommodation from './pages/Accommodation';
import TransportServices from './pages/TransportServices';
import LifeServices from './pages/LifeServices';
import FAQ from './pages/FAQ';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student-services" element={<StudentServices />} />
            <Route path="/travel-guide" element={<TravelGuide />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/transport" element={<TransportServices />} />
            <Route path="/life-services" element={<LifeServices />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;