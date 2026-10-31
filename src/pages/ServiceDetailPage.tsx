import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  AlertTriangle, 
  CheckCircle, 
  FileCheck, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Clock, 
  MapPin, 
  ShieldAlert,
  Sparkles,
  HeartHandshake,
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData, ServiceItem } from '../data/servicesData';
import { foundationData } from '../data/foundationData';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services
  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceIds.includes(s.id)
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${service.hindiTitle} - लक्की अतुर्वा फाउंडेशन`,
        text: service.shortDesc,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('पेज का लिंक कॉपी कर लिया गया है!');
    }
  };

  return (
    <>
      <SEOHead
        title={`${service.hindiTitle} | सेवा विवरण`}
        description={`${service.hindiTitle} (${service.title}) - लक्की अतुर्वा फाउंडेशन जसराना फिरोजाबाद। ${service.shortDesc}`}
        keywords={`${service.hindiTitle}, ${service.title}, Lucky Aturva Foundation, Jasrana Firozabad NGO, वृद्धा पेंशन, एम्बुलेंस, गौ सेवा`}
        ogImage={service.heroImage}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Hero Header with Service Cover */}
      <section className="bg-gradient-to-b from-[#0E2E24] to-[#174B3B] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'हमारी सेवाएँ', path: '/services' },
              { label: service.hindiTitle }
            ]}
          />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-brand-gold-500/20 text-brand-gold-300 border border-brand-gold-400/40">
                <Sparkles className="w-4 h-4" />
                <span>निःस्वार्थ समाज सेवा पहल</span>
              </span>

              <h1 className="text-hero-fluid font-serif font-bold text-white leading-[1.2]">
                {service.hindiTitle}
              </h1>

              <p className="text-base sm:text-lg text-brand-gold-200 font-semibold">
                {service.title}
              </p>

              <p className="text-body-fluid text-white/90 leading-[1.8] max-w-2xl">
                {service.shortDesc}
              </p>

              {/* Quick Actions */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <a
                  href={`tel:${foundationData.contact.phone}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold bg-brand-gold-500 text-brand-green-950 hover:bg-brand-gold-400 transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>तुरंत कॉल करें: {foundationData.contact.phoneFormatted}</span>
                </a>

                <a
                  href={`https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent(`नमस्ते लक्की अतुर्वा फाउंडेशन, मुझे '${service.hindiTitle}' के संबंध में जानकारी एवं सहायता चाहिए।`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp पर सहायता मांगें</span>
                </a>

                <button
                  onClick={handleShare}
                  className="p-3.5 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/25 transition-colors"
                  title="इस सेवा को शेयर करें"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Service Hero Image */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden border-2 border-brand-gold-400/50 shadow-2xl h-68 sm:h-76">
                <img
                  src={service.heroImage}
                  alt={service.hindiTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-sm text-white/95 font-semibold flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-brand-gold-400" />
                    <span>लक्की अतुर्वा फाउंडेशन, जसराना</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Main Article */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Detailed Intro */}
              <div className="space-y-4">
                <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
                  विस्तृत परिचय एवं सेवा का उद्देश्य
                </h2>
                {service.detailedIntro.map((para, i) => (
                  <p key={i} className="text-body-fluid text-stone-700 leading-[1.8]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Purpose Box */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#F7F5EF] border border-stone-200/90 space-y-2.5">
                <h3 className="text-xl sm:text-[22px] font-serif font-bold text-brand-green-900 flex items-center gap-2.5 leading-snug">
                  <Sparkles className="w-5 h-5 text-brand-gold-600" />
                  <span>इस सेवा का मूल उद्देश्य</span>
                </h3>
                <p className="text-body-fluid text-stone-700 leading-[1.8]">
                  {service.purpose}
                </p>
              </div>

              {/* Who Can Apply / Eligibility */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-[26px] font-serif font-bold text-brand-green-950 flex items-center gap-2.5 leading-snug">
                  <CheckCircle className="w-6 h-6 text-brand-green-700" />
                  <span>किसे मिल सकती है सहायता? (Who May Request Assistance)</span>
                </h3>
                <ul className="space-y-3">
                  {service.whoCanApply.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold-500 mt-2.5 shrink-0" />
                      <span className="text-[15.5px] sm:text-[16.5px] text-stone-800 font-medium leading-[1.75]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Steps */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-[26px] font-serif font-bold text-brand-green-950 flex items-center gap-2.5 leading-snug">
                  <Clock className="w-6 h-6 text-brand-gold-600" />
                  <span>सहायता प्राप्ति की प्रक्रिया (Step-by-Step Guidance)</span>
                </h3>
                <div className="space-y-3.5">
                  {service.processSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">
                      <div className="w-9 h-9 rounded-full bg-brand-green-800 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-[15.5px] sm:text-[16.5px] text-stone-700 leading-[1.75] pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              {service.requiredDocs && service.requiredDocs.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-[26px] font-serif font-bold text-brand-green-950 flex items-center gap-2.5 leading-snug">
                    <FileCheck className="w-6 h-6 text-brand-green-700" />
                    <span>आवश्यक दस्तावेज (Required Documents Checklist)</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.requiredDocs.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <CheckCircle className="w-5 h-5 text-brand-gold-600 shrink-0" />
                        <span className="text-[14.5px] sm:text-[15.5px] font-semibold text-stone-800">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mandatory Transparent Disclaimer Notice */}
              <div className="p-6 sm:p-7 rounded-2xl bg-amber-50 border-2 border-amber-300 text-stone-800 space-y-2.5">
                <div className="flex items-center gap-2.5 text-amber-950 font-bold text-base">
                  <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>पारदर्शिता एवं वैधानिक स्पष्टीकरण (Official Disclaimer)</span>
                </div>
                <p className="text-[15px] sm:text-[16px] leading-[1.75] text-amber-950/90">
                  {service.importantNotice}
                </p>
              </div>

              {/* Bottom Direct CTA */}
              <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-brand-green-900 to-brand-green-800 text-white space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                  इस सेवा के लिए अभी संपर्क करें
                </h3>
                <p className="text-body-fluid text-white/90 leading-[1.8]">
                  हमारे स्वयंसेवक आपकी हर संभव सहायता और उचित मार्गदर्शन के लिए तैयार हैं।
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={`tel:${foundationData.contact.phone}`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-brand-gold-500 text-brand-green-950 hover:bg-brand-gold-400 transition-colors shadow text-base"
                  >
                    <Phone className="w-5 h-5" />
                    <span>कॉल 7505082602</span>
                  </a>
                  <a
                    href={`https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent(`नमस्ते, मुझे '${service.hindiTitle}' के संबंध में सहायता चाहिए।`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow text-base"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp पर संपर्क करें</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Foundation Office Quick Card */}
              <div className="bg-[#F7F5EF] rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-soft space-y-4">
                <h4 className="font-serif font-bold text-xl text-brand-green-950 border-b pb-3 border-stone-300">
                  कार्यालय एवं हेल्पलाइन
                </h4>
                
                <div className="space-y-3.5 text-[15px]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-gold-600 shrink-0 mt-0.5" />
                    <span className="text-stone-800 font-medium leading-relaxed">
                      {foundationData.contact.address}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-gold-600 shrink-0" />
                    <a href={`tel:${foundationData.contact.phone}`} className="font-bold text-brand-green-800 hover:text-brand-gold-600 text-base">
                      {foundationData.contact.phoneFormatted}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-gold-600 shrink-0" />
                    <span className="text-stone-700 font-medium">
                      {foundationData.contact.officeHours}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${foundationData.contact.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold bg-brand-green-800 text-white hover:bg-brand-green-900 transition-colors shadow-sm text-base"
                  >
                    <Phone className="w-4 h-4 text-brand-gold-300" />
                    <span>सीधे फोन पर बात करें</span>
                  </a>
                </div>
              </div>

              {/* President Card preview */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-soft space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-brand-gold-400 shrink-0 shadow-sm">
                    <img
                      src={foundationData.president.image}
                      alt={foundationData.president.hindiName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-brand-gold-600 tracking-wider">
                      {foundationData.president.hindiTitle}
                    </span>
                    <h5 className="font-serif font-bold text-base sm:text-[17px] text-brand-green-950">
                      {foundationData.president.hindiName}
                    </h5>
                    <p className="text-xs sm:text-sm text-stone-600 font-medium">
                      लक्की अतुर्वा फाउंडेशन
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-[15px] text-stone-700 italic leading-[1.75]">
                  "{foundationData.quote}"
                </p>
              </div>

              {/* All Services Quick Navigation Menu */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-soft space-y-3.5">
                <h4 className="font-serif font-bold text-lg text-brand-green-950 border-b pb-2.5 border-stone-200">
                  सभी 7 प्रमुख सेवाएँ
                </h4>
                <ul className="space-y-2 text-sm sm:text-[15px]">
                  {servicesData.map((svc) => (
                    <li key={svc.slug}>
                      <Link
                        to={`/services/${svc.slug}`}
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                          svc.slug === service.slug
                            ? 'bg-brand-green-800 text-white font-bold'
                            : 'text-stone-700 hover:bg-stone-50 hover:text-brand-green-800 font-medium'
                        }`}
                      >
                        <span className="truncate">{svc.hindiTitle}</span>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F7F5EF] border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider">
                  संबंधित सेवाएँ
                </span>
                <h3 className="text-section-fluid font-serif font-bold text-brand-green-950 mt-1 leading-[1.3]">
                  अन्य संबंधित समाज कल्याण सेवाएँ
                </h3>
              </div>
              <Link
                to="/services"
                className="text-base font-bold text-brand-green-800 hover:text-brand-gold-600 flex items-center gap-1.5"
              >
                <span>सभी देखें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedServices.map((svc) => (
                <ServiceCard key={svc.slug} service={svc} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
