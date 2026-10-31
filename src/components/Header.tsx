import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ChevronDown, HeartHandshake, ShieldCheck, Youtube, Instagram, Facebook } from 'lucide-react';
import { foundationData } from '../data/foundationData';
import { servicesData } from '../data/servicesData';
import { GoogleTranslateWidget } from './GoogleTranslateWidget';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navItems = [
    { name: 'मुख्य पृष्ठ', english: 'Home', path: '/' },
    { name: 'हमारे बारे में', english: 'About Us', path: '/about' },
    { 
      name: 'हमारी सेवाएँ', 
      english: 'Services', 
      path: '/services', 
      hasDropdown: true 
    },
    { name: 'गतिविधियाँ', english: 'Activities', path: '/activities' },
    { name: 'संपर्क करें', english: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-green-100 transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold-500 rounded-lg p-0.5 sm:p-1 min-w-0">
            {/* Custom Emblem */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-brand-green-700 via-brand-green-800 to-brand-green-900 flex items-center justify-center p-0.5 shadow-md border-2 border-brand-gold-400 shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full border border-brand-gold-300/40 flex flex-col items-center justify-center text-center p-0.5 sm:p-1 bg-brand-green-900/60">
                <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-gold-400" />
                <span className="text-[6.5px] sm:text-[7px] text-brand-gold-200 tracking-tighter uppercase font-semibold">LAF</span>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[17px] sm:text-xl md:text-2xl lg:text-[26px] font-serif font-bold text-brand-green-800 tracking-tight leading-tight group-hover:text-brand-green-900 transition-colors whitespace-nowrap">
                  {foundationData.hindiName}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold bg-brand-gold-100 text-brand-gold-800 rounded-md border border-brand-gold-300">
                  जसराना
                </span>
              </div>
              <span className="text-[11.5px] sm:text-xs md:text-sm lg:text-[15px] font-semibold text-brand-muted tracking-wide leading-none whitespace-nowrap mt-0.5">
                {foundationData.name}
              </span>
              <span className="text-xs text-brand-gold-700 font-semibold tracking-wider hidden xl:block mt-0.5">
                {foundationData.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            {navItems.map((item) => (
              <div 
                key={item.path} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setServicesDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setServicesDropdownOpen(false)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3.5 xl:px-4 py-2 rounded-lg text-[16px] xl:text-[17px] font-semibold transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? 'text-brand-green-700 bg-brand-green-50 font-bold border-b-2 border-brand-green-700'
                        : 'text-brand-dark hover:text-brand-green-700 hover:bg-stone-50'
                    }`
                  }
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-stone-400 transition-transform group-hover:rotate-180" />
                  )}
                </NavLink>

                {/* Services Dropdown Menu */}
                {item.hasDropdown && servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-88 bg-white rounded-2xl shadow-2xl border border-stone-200/90 p-3 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 pb-2 mb-2 border-b border-stone-100">
                      <span className="text-xs font-bold text-brand-gold-700 uppercase tracking-wider">
                        हमारी 7 प्रमुख सेवाएँ
                      </span>
                    </div>
                    <div className="space-y-1">
                      {servicesData.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start gap-2.5 px-3 py-2 rounded-lg hover:bg-brand-green-50/70 transition-colors group"
                        >
                          <div className="w-2 h-2 rounded-full bg-brand-gold-500 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                          <div>
                            <p className="text-[15px] font-bold text-brand-dark group-hover:text-brand-green-800 leading-snug">
                              {service.hindiTitle}
                            </p>
                            <p className="text-xs text-brand-muted truncate max-w-[240px] mt-0.5">
                              {service.title}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-stone-100 px-3">
                      <Link 
                        to="/services" 
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-sm font-bold text-brand-green-700 hover:text-brand-gold-600 transition-colors flex items-center justify-between"
                      >
                        <span>सभी सेवाएँ देखें</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Buttons & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Call Button */}
            <a
              href={`tel:${foundationData.contact.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-[15px] font-bold bg-brand-green-700 text-white hover:bg-brand-green-800 shadow-sm hover:shadow transition-all shrink-0"
              title="फाउंडेशन को सीधे कॉल करें"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold-300" />
              <span className="hidden sm:inline">कॉल करें:</span>
              <span className="hidden sm:inline">7505082602</span>
              <span className="sm:hidden font-bold">कॉल करें</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent('नमस्ते लक्की अतुर्वा फाउंडेशन, मुझे आपकी सेवाओं एवं सहयोग के संबंध में जानकारी चाहिए।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-[16px] font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-sm hover:shadow transition-all"
              title="सीधे व्हाट्सएप पर संपर्क करें"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-brand-dark hover:text-brand-green-800 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-brand-gold-500"
              aria-label="मेनू खोलें"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4">
          <div className="py-2.5 border-b border-stone-100 flex items-center justify-between">
            <span className="text-sm font-semibold text-brand-green-800">भाषा / Language:</span>
            <GoogleTranslateWidget variant="light" compact />
          </div>

          <div className="space-y-1.5">
            {navItems.map((item) => (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3.5 py-3 rounded-xl text-lg font-bold transition-colors ${
                      isActive
                        ? 'bg-brand-green-50 text-brand-green-800'
                        : 'text-stone-800 hover:bg-stone-50'
                    }`
                  }
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <span className="text-sm text-stone-500 font-medium">{item.english}</span>
                  </div>
                </NavLink>

                {/* In mobile, show indented service links when Services is shown */}
                {item.hasDropdown && (
                  <div className="pl-4 pr-3 py-2 space-y-1.5 bg-stone-50/90 rounded-xl my-1.5 border border-stone-200/60">
                    <span className="text-xs font-bold text-brand-gold-700 uppercase tracking-wide block py-1">
                      प्रमुख 7 सेवाएँ:
                    </span>
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.slug}
                        to={`/services/${svc.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 px-2.5 text-[15px] font-semibold text-stone-700 hover:text-brand-green-800 hover:bg-white rounded-lg transition-colors"
                      >
                        • {svc.hindiTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Direct Action Buttons */}
          <div className="pt-3 border-t border-stone-200 grid grid-cols-2 gap-2.5">
            <a
              href={`tel:${foundationData.contact.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-base font-bold bg-brand-green-700 text-white shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-gold-300" />
              <span>कॉल 7505082602</span>
            </a>
            <a
              href={`https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent('नमस्ते लक्की अतुर्वा फाउंडेशन, मुझे आपकी सेवाओं के बारे में जानकारी चाहिए।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-base font-bold bg-[#25D366] text-white shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>व्हाट्सएप संदेश</span>
            </a>
          </div>

          {/* Mobile Social Links */}
          <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-bold text-stone-600">सोशल मीडिया पर जुड़ें:</span>
            <div className="flex items-center gap-2.5">
              <a
                href={foundationData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on YouTube"
                title="Follow us on YouTube"
                className="w-9 h-9 rounded-full bg-red-50 hover:bg-[#FF0000] text-red-600 hover:text-white flex items-center justify-center transition-all border border-red-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={foundationData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                title="Follow us on Instagram"
                className="w-9 h-9 rounded-full bg-fuchsia-50 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-fuchsia-600 hover:text-white flex items-center justify-center transition-all border border-fuchsia-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={foundationData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                title="Follow us on Facebook"
                className="w-9 h-9 rounded-full bg-blue-50 hover:bg-[#1877F2] text-blue-600 hover:text-white flex items-center justify-center transition-all border border-blue-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-center pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-stone-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-green-700" />
              जसराना, फिरोजाबाद (उ.प्र.) में समर्पित जनकल्याण संस्था
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

