import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Ambulance, 
  HeartHandshake, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Youtube,
  Instagram,
  Facebook
} from 'lucide-react';
import { foundationData } from '../data/foundationData';
import { servicesData } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b241c] text-white/85 border-t-4 border-brand-gold-500">
      {/* Top Banner inside Footer */}
      <div className="bg-[#071913] py-7 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-brand-gold-500/20 border border-brand-gold-400/40 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6 text-brand-gold-400" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-serif font-bold text-white leading-relaxed">
                "{foundationData.quote}"
              </p>
              <p className="text-sm text-brand-gold-300 font-semibold mt-0.5">
                — {foundationData.president.hindiTitle}: {foundationData.president.hindiName}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${foundationData.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-[15px] font-bold bg-brand-gold-500 text-stone-950 hover:bg-brand-gold-400 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>हेल्पलाइन: {foundationData.contact.phoneFormatted}</span>
            </a>
            <a
              href={`https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent('नमस्ते लक्की अतुर्वा फाउंडेशन, मुझे आपकी सेवा एवं सहयोग के संबंध में जानकारी चाहिए।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-[15px] font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp पर लिखें</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Foundation Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-gold-500/20 border border-brand-gold-400/40 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-7 h-7 text-brand-gold-400" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-xl leading-tight">
                  {foundationData.hindiName}
                </h4>
                <p className="text-sm text-brand-gold-300 font-medium">
                  {foundationData.name}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-[15.5px] text-white/80 leading-[1.75]">
              {foundationData.subTagline}। जसराना, फिरोजाबाद (उत्तर प्रदेश) में निस्वार्थ भाव से जरूरतमंदों, बुजुर्गों, निराश्रित विधवाओं एवं गौवंश की सेवा में समर्पित सामाजिक संगठन।
            </p>

            <div className="pt-2 border-t border-white/10 space-y-1.5 text-sm">
              <p className="text-white/95">
                <strong className="text-brand-gold-400 font-semibold">{foundationData.president.hindiTitle}:</strong>{' '}
                {foundationData.president.hindiName}
              </p>
              <p className="text-xs sm:text-[13px] text-white/70">
                निवास एवं कार्यालय: {foundationData.contact.locality}, {foundationData.contact.tehsil} (फिरोजाबाद)
              </p>
            </div>

            {/* Social media links */}
            <div className="pt-3">
              <p className="text-xs font-semibold text-brand-gold-400 uppercase tracking-wider mb-2.5">
                सोशल मीडिया पर जुड़ें (Follow Us)
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href={foundationData.socialLinks.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow us on YouTube"
                  title="Follow us on YouTube"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-white/15 hover:border-[#FF0000] hover:scale-110 group"
                >
                  <Youtube className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href={foundationData.socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow us on Instagram"
                  title="Follow us on Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-white/15 hover:border-pink-400 hover:scale-110 group"
                >
                  <Instagram className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href={foundationData.socialLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow us on Facebook"
                  title="Follow us on Facebook"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-white/15 hover:border-[#1877F2] hover:scale-110 group"
                >
                  <Facebook className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-brand-gold-400 mb-4 pb-2 border-b border-white/10">
              त्वरित नेविगेशन (Quick Links)
            </h4>
            <ul className="space-y-2.5 text-[15px] sm:text-[16px]">
              <li>
                <Link to="/" className="hover:text-brand-gold-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-4 h-4 text-brand-gold-500 shrink-0" />
                  <span>मुख्य पृष्ठ (Home)</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-4 h-4 text-brand-gold-500 shrink-0" />
                  <span>हमारे बारे में (About Us)</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-4 h-4 text-brand-gold-500 shrink-0" />
                  <span>हमारी सेवाएँ (Our Services)</span>
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-brand-gold-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-4 h-4 text-brand-gold-500 shrink-0" />
                  <span>सामाजिक गतिविधियाँ (Activities)</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-4 h-4 text-brand-gold-500 shrink-0" />
                  <span>संपर्क एवं कार्यालय (Contact Us)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The 7 Services Links */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-brand-gold-400 mb-4 pb-2 border-b border-white/10">
              हमारी 7 प्रमुख सेवाएँ
            </h4>
            <ul className="space-y-2.5 text-[15px] sm:text-[16px]">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link 
                    to={`/services/${svc.slug}`} 
                    className="hover:text-brand-gold-300 transition-colors flex items-start gap-1.5 py-0.5"
                  >
                    <ChevronRight className="w-4 h-4 text-brand-gold-500 shrink-0 mt-1" />
                    <span>{svc.hindiTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-base font-bold uppercase tracking-wider text-brand-gold-400 mb-4 pb-2 border-b border-white/10">
              संपर्क सूत्र एवं कार्यालय
            </h4>
            
            <div className="space-y-3 text-[15px] sm:text-[16px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold-400 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  {foundationData.contact.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <a href={`tel:${foundationData.contact.phone}`} className="hover:text-brand-gold-300 transition-colors font-bold">
                  {foundationData.contact.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Ambulance className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={`tel:${foundationData.contact.ambulanceHelpline}`} className="hover:text-white text-rose-300 transition-colors font-bold">
                  एम्बुलेंस: {foundationData.contact.ambulanceHelpline}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href={`https://wa.me/${foundationData.contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#25D366] transition-colors font-semibold"
                >
                  व्हाट्सएप: {foundationData.contact.phoneFormatted}
                </a>
              </div>

              <div className="pt-2 text-xs sm:text-sm text-white/70">
                <p>कार्यालय समय: {foundationData.contact.officeHours}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Transparent Compliance & Verification Disclaimer */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs sm:text-[13.5px] text-white/70 leading-relaxed text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-brand-gold-400 shrink-0" />
            <p>
              <strong className="text-brand-gold-400">पारदर्शिता अस्वीकरण (Disclaimer):</strong> लक्की अतुर्वा फाउंडेशन एक गैर-सरकारी सामाजिक सेवा संगठन है। हम सरकारी योजनाओं में केवल मार्गदर्शन एवं समन्वय प्रदान करते हैं; किसी भी योजना की अंतिम पात्रता व लाभ सरकारी नियमानुसार ही मान्य होता है।
            </p>
          </div>
          <div className="shrink-0 text-white/75 font-medium">
            चरण 1 (Phase 1 Frontend Edition)
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/70 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {foundationData.hindiName} ({foundationData.name}). सर्वाधिकार सुरक्षित।</p>
          <p className="text-xs sm:text-[13px] text-white/70">
            परानपुर मोड़, जसराना, फिरोजाबाद (उ.प्र.) • अध्यक्ष: {foundationData.president.hindiName}
          </p>
        </div>
      </div>
    </footer>
  );
};

