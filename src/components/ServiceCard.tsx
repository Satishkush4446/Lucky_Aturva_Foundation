import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Ambulance, 
  Gift, 
  Users, 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall 
} from 'lucide-react';
import { ServiceItem } from '../data/servicesData';
import { foundationData } from '../data/foundationData';

const iconMap: Record<string, React.ReactNode> = {
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-brand-gold-600" />,
  Ambulance: <Ambulance className="w-6 h-6 text-brand-gold-600" />,
  Gift: <Gift className="w-6 h-6 text-brand-gold-600" />,
  Users: <Users className="w-6 h-6 text-brand-gold-600" />,
  Stethoscope: <Stethoscope className="w-6 h-6 text-brand-gold-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-brand-gold-600" />,
  ShieldHeart: <ShieldCheck className="w-6 h-6 text-brand-gold-600" />,
};

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <div className={`group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between ${
      featured ? 'ring-2 ring-brand-gold-400/40' : ''
    }`}>
      {/* Top Image & Icon */}
      <div>
        <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
          <img
            src={service.heroImage}
            alt={service.hindiTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Floating Icon badge */}
          <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-white/95 shadow-md border border-brand-gold-200/60 backdrop-blur-sm">
            {iconMap[service.iconName] || <HeartHandshake className="w-6 h-6 text-brand-gold-600" />}
          </div>

          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-green-900/85 text-brand-gold-300 backdrop-blur-sm border border-brand-gold-400/30">
              निःशुल्क सेवा
            </span>
          </div>
        </div>

        {/* Content body with generous padding & readable typography */}
        <div className="p-6 sm:p-7">
          <h3 className="text-[21px] sm:text-[22px] md:text-[23px] font-bold font-serif text-brand-green-950 group-hover:text-brand-green-700 transition-colors leading-[1.35]">
            {service.hindiTitle}
          </h3>
          <p className="text-[13.5px] sm:text-sm text-brand-muted font-medium mt-1 mb-3">
            {service.title}
          </p>
          <p className="text-[16px] sm:text-[17px] text-stone-700 leading-[1.75] line-clamp-3">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Card Footer CTAs */}
      <div className="p-6 sm:p-7 pt-0 mt-auto border-t border-stone-100 flex items-center justify-between gap-3">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-[15px] sm:text-base font-bold text-brand-green-800 hover:text-brand-gold-600 transition-colors group/link"
        >
          <span>विस्तार से जानें</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <a
          href={`tel:${foundationData.contact.phone}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm sm:text-[15px] font-bold text-stone-800 bg-stone-100 hover:bg-brand-gold-50 hover:text-brand-gold-800 transition-colors"
          title="सहायता हेतु संपर्क करें"
        >
          <PhoneCall className="w-3.5 h-3.5 text-brand-gold-600" />
          <span>संपर्क</span>
        </a>
      </div>
    </div>
  );
};

