import React from 'react';
import { Phone, MapPin, Ambulance, Heart, Youtube, Instagram, Facebook } from 'lucide-react';
import { foundationData } from '../data/foundationData';
import { GoogleTranslateWidget } from './GoogleTranslateWidget';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0e2c22] text-white/95 text-[13.5px] sm:text-sm border-b border-brand-gold-500/25 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left: Tagline & Office Location */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 font-bold text-brand-gold-400">
            <Heart className="w-4 h-4 fill-brand-gold-400 text-brand-gold-400" />
            <span className="tracking-wide">{foundationData.tagline}</span>
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="inline-flex items-center gap-1.5 text-white/90 font-medium">
            <MapPin className="w-4 h-4 text-brand-gold-400 shrink-0" />
            <span>{foundationData.contact.locality}, {foundationData.contact.tehsil} (फिरोजाबाद)</span>
          </span>
        </div>

        {/* Right: Emergency Numbers & Language Widget */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
          {/* Phone */}
          <a 
            href={`tel:${foundationData.contact.phone}`} 
            className="inline-flex items-center gap-1.5 text-white hover:text-brand-gold-300 transition-colors font-bold"
            title="फाउंडेशन हेल्पलाइन पर कॉल करें"
          >
            <Phone className="w-4 h-4 text-brand-gold-400" />
            <span>{foundationData.contact.phoneFormatted}</span>
          </a>

          {/* Ambulance quick dial */}
          <a 
            href={`tel:${foundationData.contact.ambulanceHelpline}`} 
            className="hidden lg:inline-flex items-center gap-1.5 text-rose-200 hover:text-white transition-colors bg-rose-950/70 px-2.5 py-1 rounded-md border border-rose-500/40 font-bold"
            title="निःशुल्क एम्बुलेंस आपातकालीन समन्वय"
          >
            <Ambulance className="w-4 h-4 text-rose-400" />
            <span>एम्बुलेंस: {foundationData.contact.ambulanceHelpline}</span>
          </a>

          <span className="hidden md:inline text-white/30">•</span>

          {/* Social Media Links */}
          <div className="flex items-center gap-2">
            <a 
              href={foundationData.socialLinks.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on YouTube"
              title="Follow us on YouTube"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a 
              href={foundationData.socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on Instagram"
              title="Follow us on Instagram"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a 
              href={foundationData.socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on Facebook"
              title="Follow us on Facebook"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>

          <span className="hidden md:inline text-white/30">•</span>

          {/* Google Translate Selector (Strictly Hindi & English) */}
          <GoogleTranslateWidget variant="dark" compact={false} />
        </div>
      </div>
    </div>
  );
};

