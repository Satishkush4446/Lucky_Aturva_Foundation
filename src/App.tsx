import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { foundationData } from './data/foundationData';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#202A25]">
        {/* Top Contact & Language Bar */}
        <TopBar />

        {/* Main Sticky Header */}
        <Header />

        {/* Dynamic Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Complete Footer */}
        <Footer />

        {/* Floating Quick WhatsApp & Call Action Pills */}
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
          {/* Quick Call pill */}
          <a
            href={`tel:${foundationData.contact.phone}`}
            className="flex items-center gap-2 py-2 px-3.5 rounded-full bg-brand-green-800 text-white shadow-lg hover:bg-brand-green-900 transition-all text-xs font-bold hover:scale-105 border border-brand-gold-400/40"
            title="सीधे फोन करें"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold-300" />
            <span className="hidden sm:inline">कॉल: {foundationData.contact.phoneFormatted}</span>
          </a>

          {/* WhatsApp floating button */}
          <a
            href={`https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent('नमस्ते लक्की अतुर्वा फाउंडेशन, मुझे आपकी सेवाओं के बारे में जानकारी चाहिए।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2.5 px-4 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1EBE5D] transition-all text-xs sm:text-sm font-bold hover:scale-105 border-2 border-white"
            title="WhatsApp पर चैट करें"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span className="font-semibold">WhatsApp सहायता</span>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;

