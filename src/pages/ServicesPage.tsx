import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  FileText, 
  Users, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import { foundationData } from '../data/foundationData';
import { getAssetUrl } from '../utils/assetHelper';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="हमारी सेवाएँ | 7 प्रमुख जनकल्याण सेवाएँ"
        description="लक्की अतुर्वा फाउंडेशन द्वारा संचालित 7 प्रमुख समाज सेवाएँ: वृद्धा/विधवा पेंशन सहायता, निःशुल्क एम्बुलेंस, कन्या विवाह सहयोग, सामाजिक कार्य, उपचार सहयोग, धार्मिक सहभागिता एवं गौ सेवा।"
        keywords="Lucky Aturva Foundation Services, वृद्धा पेंशन जसराना, निःशुल्क एम्बुलेंस फिरोजाबाद, कन्या विवाह सहयोग, गौ सेवा उत्तर प्रदेश"
        canonicalPath="/services"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0E2E24] to-[#174B3B] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'हमारी सेवाएँ' }]} />
          
          <div className="mt-4 max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-brand-gold-500/20 text-brand-gold-300 border border-brand-gold-400/40">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold-400" />
                <span>{foundationData.tagline1}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white/10 text-emerald-200 border border-emerald-400/30">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-300" />
                <span>{foundationData.tagline2}</span>
              </span>
            </div>
            <h1 className="text-[clamp(2.125rem,4vw,3.25rem)] font-serif font-bold text-white leading-[1.25]">
              हमारी प्रमुख सेवाएँ (Our Services)
            </h1>
            <p className="text-body-fluid text-white/90 leading-[1.8]">
              "{foundationData.commitmentStatement}" — समाज के वंचित, वृद्ध, असहाय परिवारों, लाचार मरीजों और बेजुबान गौवंश के कल्याण हेतु 7 प्रमुख क्षेत्रों में निःस्वार्थ सेवा।
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparent Assistance Disclaimer */}
          <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-amber-50/90 border border-amber-300/80 flex items-start gap-4 shadow-sm">
            <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-[15px] sm:text-[16px] text-stone-800 leading-[1.75]">
              <strong className="text-amber-950 font-bold block mb-1">महत्वपूर्ण सूचना एवं पारदर्शी अस्वीकरण:</strong>
              {foundationData.hindiName} एक गैर-सरकारी संस्था है जो जरूरतमंदों को सही मार्गदर्शन, आवेदन सहायता और समन्वय उपलब्ध कराती है। हम किसी भी सरकारी लाभ, पेंशन अथवा वाहन की असीमित उपलब्धता का अग्रिम या गैर-सत्यापित वादा नहीं करते। सहायता संस्था के संसाधनों एवं वास्तविक सत्यापन पर निर्भर है।
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={service.slug} 
                service={service} 
                featured={index === 0}
              />
            ))}
          </div>

        </div>
      </section>

      {/* How to Request Assistance / Process */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
              सहायता प्राप्ति की प्रक्रिया
            </span>
            <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
              सहायता प्राप्त करने के 3 सरल चरण
            </h2>
            <p className="text-body-fluid text-stone-700 leading-[1.8]">
              यदि आप या आपके क्षेत्र में कोई व्यक्ति सहायता का पात्र है, तो इन चरणों का पालन करें:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="group bg-[#F7F5EF] rounded-3xl overflow-hidden border border-stone-200 shadow-soft hover:shadow-premium transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={getAssetUrl("/images/foundation/12-process-request.webp")}
                  alt="चरण 1: संपर्क अथवा कार्यालय आगमन"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-brand-green-900 text-brand-gold-300 font-bold text-base flex items-center justify-center border border-brand-gold-400">
                  1
                </div>
              </div>
              <div className="p-6 sm:p-7 space-y-2.5 text-center md:text-left">
                <h3 className="font-serif font-bold text-[20px] sm:text-[22px] text-brand-green-950 leading-snug">
                  संपर्क अथवा कार्यालय आगमन
                </h3>
                <p className="text-[15.5px] sm:text-[16.5px] text-stone-700 leading-[1.75]">
                  हेल्पलाइन <strong>7505082602</strong> पर कॉल करें अथवा हमारे परानपुर मोड़, जसराना कार्यालय में पधारें।
                </p>
              </div>
            </div>

            <div className="group bg-[#F7F5EF] rounded-3xl overflow-hidden border border-stone-200 shadow-soft hover:shadow-premium transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={getAssetUrl("/images/foundation/13-process-coordination.webp")}
                  alt="चरण 2: दस्तावेज एवं स्थिति सत्यापन"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-brand-green-900 text-brand-gold-300 font-bold text-base flex items-center justify-center border border-brand-gold-400">
                  2
                </div>
              </div>
              <div className="p-6 sm:p-7 space-y-2.5 text-center md:text-left">
                <h3 className="font-serif font-bold text-[20px] sm:text-[22px] text-brand-green-950 leading-snug">
                  दस्तावेज एवं स्थिति सत्यापन
                </h3>
                <p className="text-[15.5px] sm:text-[16.5px] text-stone-700 leading-[1.75]">
                  आवश्यक पहचान पत्र, आधार कार्ड अथवा मेडिकल रिपोर्ट प्रस्तुत करें ताकि सही योजना से जोड़ा जा सके।
                </p>
              </div>
            </div>

            <div className="group bg-[#F7F5EF] rounded-3xl overflow-hidden border border-stone-200 shadow-soft hover:shadow-premium transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={getAssetUrl("/images/foundation/14-process-support.webp")}
                  alt="चरण 3: मार्गदर्शन एवं प्रत्यक्ष सहयोग"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-brand-green-900 text-brand-gold-300 font-bold text-base flex items-center justify-center border border-brand-gold-400">
                  3
                </div>
              </div>
              <div className="p-6 sm:p-7 space-y-2.5 text-center md:text-left">
                <h3 className="font-serif font-bold text-[20px] sm:text-[22px] text-brand-green-950 leading-snug">
                  मार्गदर्शन एवं प्रत्यक्ष सहयोग
                </h3>
                <p className="text-[15.5px] sm:text-[16.5px] text-stone-700 leading-[1.75]">
                  संस्था के समर्पित स्वयंसेवक फॉर्म भरने, समन्वय कराने अथवा सामग्री/वाहन उपलब्ध कराने में सहयोग करते हैं।
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-14 sm:py-20 bg-brand-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
            क्या आपको किसी सेवा के बारे में व्यक्तिगत जानकारी चाहिए?
          </h3>
          <p className="text-body-fluid text-white/80 max-w-xl mx-auto leading-[1.8]">
            हमारे प्रतिनिधि से सीधे बात करें और निःशुल्क परामर्श प्राप्त करें।
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${foundationData.contact.phone}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-brand-gold-500 text-brand-green-950 hover:bg-brand-gold-400 transition-colors shadow-md text-base"
            >
              <Phone className="w-5 h-5" />
              <span>कॉल करें: {foundationData.contact.phoneFormatted}</span>
            </a>
            <a
              href={`https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent('नमस्ते लक्की अतुर्वा फाउंडेशन, मुझे सेवाओं के संबंध में जानकारी चाहिए।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-md text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp पर पूछें</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

