import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Heart, 
  CheckCircle, 
  Ambulance, 
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ServiceCard } from '../components/ServiceCard';
import { VolunteerModal } from '../components/VolunteerModal';
import { foundationData } from '../data/foundationData';
import { servicesData } from '../data/servicesData';
import { activitiesData } from '../data/activitiesData';

export const HomePage: React.FC = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="सेवा ही संकल्प है, कर्म ही पूजा है"
        description="लक्की अतुर्वा फाउंडेशन (Lucky Aturva Foundation), जसराना, फिरोजाबाद - वृद्धा एवं विधवा पेंशन सहायता, निःशुल्क एम्बुलेंस, कन्या विवाह सहयोग, सामाजिक सेवा एवं गौ सेवा हेतु समर्पित संस्था।"
        keywords="लक्की अतुर्वा फाउंडेशन, Lucky Aturva Foundation, NGO in Jasrana, Social Welfare Foundation in Firozabad, वृद्धा पेंशन सहायता, निःशुल्क एम्बुलेंस सेवा, गौ सेवा, लोधी देवेंद्र सिंह"
      />

      {/* Volunteer Modal */}
      <VolunteerModal 
        isOpen={isVolunteerModalOpen} 
        onClose={() => setIsVolunteerModalOpen(false)} 
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0E2E24] via-[#133E31] to-[#174B3B] text-white py-16 sm:py-20 lg:py-24">
        {/* Decorative background glow & pattern */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-5" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Auspicious Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-brand-gold-400/40 text-sm sm:text-[15px] font-bold text-brand-gold-300">
                <Sparkles className="w-4 h-4 text-brand-gold-400 animate-pulse" />
                <span>{foundationData.tagline}</span>
              </div>

              {/* Main Headline (Hero Fluid: 34px - 52px) */}
              <h1 className="text-hero-fluid font-serif font-bold tracking-tight text-white leading-[1.2]">
                सेवा से संवरता है <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-300 via-brand-gold-400 to-amber-200">
                  समाज का भविष्य।
                </span>
              </h1>

              {/* Subtitle / Intro (Fluid: 17px - 19px) */}
              <p className="text-[clamp(1.0625rem,1.2vw,1.25rem)] text-white/90 font-normal leading-[1.8] max-w-2xl mx-auto lg:mx-0">
                <strong className="text-white font-semibold">{foundationData.hindiName}</strong> (जसराना, फिरोजाबाद) समाज के निर्धन, वृद्ध, निराश्रित माताओं-बहनों एवं जरूरतमंद परिवारों की सहायता और गौ सेवा के लिए निरंतर समर्पित है।
              </p>

              {/* Two CTA Buttons (16px - 18px text) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base sm:text-[17px] font-bold bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-green-950 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <span>हमारी सेवाएँ जानें</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsVolunteerModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base sm:text-[17px] font-bold bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-md transition-all"
                >
                  <Heart className="w-4 h-4 text-brand-gold-300" />
                  <span>स्वयंसेवक बनें</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-gold-500/20 flex items-center justify-center shrink-0 border border-brand-gold-400/40">
                    <CheckCircle className="w-5 h-5 text-brand-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">निःस्वार्थ सेवा भाव</p>
                    <p className="text-xs text-white/70">कोई शुल्क नहीं</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-gold-500/20 flex items-center justify-center shrink-0 border border-brand-gold-400/40">
                    <Ambulance className="w-5 h-5 text-brand-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">एम्बुलेंस समन्वय</p>
                    <p className="text-xs text-white/70">आपातकालीन सहयोग</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-9 h-9 rounded-full bg-brand-gold-500/20 flex items-center justify-center shrink-0 border border-brand-gold-400/40">
                    <MapPin className="w-5 h-5 text-brand-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">परानपुर मोड़, जसराना</p>
                    <p className="text-xs text-white/70">सुलभ कार्यालय संपर्क</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Card: Hero Cinematic Visual & President Feature */}
            <div className="lg:col-span-5">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-white/20 shadow-2xl space-y-4">
                
                {/* Hero Cinematic Image */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-gold-400/50 shadow-lg aspect-[16/9] bg-stone-900 group">
                  <img
                    src="/images/foundation/01-homepage-hero.webp"
                    alt="अध्यक्ष लोधी देवेंद्र सिंह ग्रामीणों एवं समाजसेवियों के साथ - लक्की अतुल्य फाउंडेशन"
                    className="w-full h-full object-cover object-right sm:object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
                  
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-green-950/90 text-brand-gold-300 border border-brand-gold-400/50 backdrop-blur-sm">
                      जसराना - फिरोजाबाद
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-left">
                    <span className="text-xs uppercase tracking-wider text-brand-gold-300 font-bold block">
                      संस्था अध्यक्ष
                    </span>
                    <p className="text-base sm:text-lg font-serif font-bold text-white leading-tight mt-0.5">
                      {foundationData.president.hindiName}
                    </p>
                    <p className="text-xs text-white/85 mt-0.5">
                      ग्रामीणों एवं स्वयंसेवकों के साथ जनसंवाद
                    </p>
                  </div>
                </div>

                {/* President's Inspiring Quote */}
                <div className="p-4 rounded-2xl bg-black/35 border border-brand-gold-400/35 text-white/95 text-sm sm:text-[15px] italic leading-[1.75]">
                  <p className="font-serif">
                    "{foundationData.quote}"
                  </p>
                </div>

                {/* Helpline Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-gold-500/25 to-brand-green-800/40 border border-brand-gold-500/50 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-brand-gold-300 font-semibold">सीधा संपर्क एवं परामर्श सूत्र</p>
                    <p className="text-lg sm:text-xl font-bold text-white tracking-wide mt-0.5">{foundationData.contact.phoneFormatted}</p>
                  </div>
                  <a
                    href={`tel:${foundationData.contact.phone}`}
                    className="p-3 rounded-xl bg-brand-gold-500 text-brand-green-950 hover:bg-brand-gold-400 transition-colors shadow-md"
                    title="कॉल करें"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section: Foundation Introduction */}
      <section className="py-16 sm:py-24 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-100 text-brand-green-800 text-xs sm:text-sm font-bold">
                <ShieldCheck className="w-4 h-4 text-brand-gold-600" />
                <span>संस्था का संक्षिप्त परिचय</span>
              </div>

              <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
                मानवता और जनसेवा के लिए निरंतर समर्पित <br />
                <span className="text-brand-gold-600">{foundationData.hindiName}</span>
              </h2>

              <p className="text-body-fluid text-stone-700 leading-[1.8]">
                लक्की अतुर्वा फाउंडेशन की स्थापना परानपुर मोड़, जसराना (फिरोजाबाद, उत्तर प्रदेश) में समाज के अंतिम पायदान पर खड़े असहाय नागरिकों के दुख-दर्द को बांटने और उन्हें हर संभव सहायता पहुंचाने के उद्देश्य से की गई है।
              </p>

              <p className="text-body-fluid text-stone-700 leading-[1.8]">
                हमारा विश्वास है कि सच्चा धर्म और कर्म वही है जो किसी रोते हुए चेहरे पर मुस्कान ला सके। अध्यक्ष <strong>श्री लोधी देवेंद्र सिंह जी</strong> के नेतृत्व में हमारी टीम बुजुर्गों की पेंशन सहायता, एम्बुलेंस समन्वय, निर्धन बेटियों के विवाह में सहयोग, स्वास्थ्य मार्गदर्शन और पवित्र गौ सेवा में सक्रिय रूप से जुटी हुई है।
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-bold text-brand-green-800 hover:text-brand-gold-600 transition-colors"
                >
                  <span>संस्था के बारे में और अधिक जानें</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-stone-200/80 space-y-6">
                <h3 className="text-xl font-bold font-serif text-brand-green-900 border-b pb-3.5 border-stone-200">
                  हमारे 4 मुख्य सेवा स्तम्भ
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-brand-green-50/50 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-brand-green-700 text-brand-gold-300 flex items-center justify-center shrink-0 font-bold text-lg">
                      १
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-stone-900 leading-snug">बुजुर्ग एवं विधवा माताओं का संबल</h4>
                      <p className="text-[15px] text-stone-600 leading-[1.7] mt-1">सरकारी पेंशन योजनाओं के लिए फॉर्म भरने व सत्यापन में पूर्ण निःशुल्क मार्गदर्शन।</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-brand-green-50/50 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-brand-green-700 text-brand-gold-300 flex items-center justify-center shrink-0 font-bold text-lg">
                      २
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-stone-900 leading-snug">आपातकालीन एम्बुलेंस समन्वय</h4>
                      <p className="text-[15px] text-stone-600 leading-[1.7] mt-1">कठिन समय में असहाय मरीजों को अस्पताल पहुंचाने के लिए वाहन सहायता।</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-brand-green-50/50 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-brand-green-700 text-brand-gold-300 flex items-center justify-center shrink-0 font-bold text-lg">
                      ३
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-stone-900 leading-snug">बेटियों के विवाह में सामाजिक सहयोग</h4>
                      <p className="text-[15px] text-stone-600 leading-[1.7] mt-1">निर्धन परिवारों की बेटियों के शुभ विवाह में जरूरी घरेलू उपहार व सामग्री सहयोग।</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-brand-green-50/50 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-brand-green-700 text-brand-gold-300 flex items-center justify-center shrink-0 font-bold text-lg">
                      ४
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-stone-900 leading-snug">पवित्र गौ सेवा एवं संरक्षण</h4>
                      <p className="text-[15px] text-stone-600 leading-[1.7] mt-1">निराश्रित व घायल गौवंश की देखभाल, हरा चारा व प्राथमिक चिकित्सीय सहयोग।</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section: 7 Key Services Cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-bold text-brand-gold-700 tracking-wider uppercase bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
              हमारी प्रमुख सेवाएँ (Key Services)
            </span>
            <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
              समाज के हर वर्ग के लिए निःस्वार्थ सेवा पहल
            </h2>
            <p className="text-body-fluid text-stone-700 leading-[1.8]">
              फाउंडेशन द्वारा संचालित सभी सेवाएँ बिना किसी भेदभाव के निष्पक्ष मानवीय भाव से जरूरतमंदों के लिए उपलब्ध कराई जाती हैं।
            </p>
          </div>

          {/* 7 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={service.slug} 
                service={service} 
                featured={index === 0 || index === 1}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl text-base sm:text-[17px] font-bold bg-brand-green-800 hover:bg-brand-green-900 text-white shadow-md hover:shadow-lg transition-all"
            >
              <span>सभी 7 सेवाओं का विस्तृत विवरण देखें</span>
              <ArrowRight className="w-4 h-4 text-brand-gold-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* Section: Mission & Vision */}
      <section className="py-16 sm:py-24 bg-[#F7F5EF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-soft relative overflow-hidden group hover:border-brand-gold-300 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-brand-green-50 border border-brand-green-200 flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7 text-brand-green-700" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider">
                हमारा संकल्प
              </span>
              <h3 className="text-2xl sm:text-[26px] font-serif font-bold text-brand-green-950 mt-1 mb-4 leading-snug">
                हमारा मिशन (Our Mission)
              </h3>
              <p className="text-body-fluid text-stone-700 leading-[1.8]">
                जसराना एवं फिरोजाबाद के ग्रामीण अंचलों में सामाजिक व आर्थिक रूप से कमजोर प्रत्येक व्यक्ति को आवश्यक सहायता, स्वास्थ्य मार्गदर्शन और मानवीय संबल प्रदान करना। हमारा मिशन यह सुनिश्चित करना है कि कोई भी पात्र वृद्ध पेंशन से वंचित न रहे और किसी भी निर्धन परिवार को आपातकाल में अकेलेपन का सामना न करना पड़े।
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-soft relative overflow-hidden group hover:border-brand-gold-300 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold-50 border border-brand-gold-200 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-brand-gold-600" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider">
                हमारा दृष्टिकोण
              </span>
              <h3 className="text-2xl sm:text-[26px] font-serif font-bold text-brand-green-950 mt-1 mb-4 leading-snug">
                हमारा दृष्टिकोण (Our Vision)
              </h3>
              <p className="text-body-fluid text-stone-700 leading-[1.8]">
                एक ऐसे सशक्त, समरस और संवेदनशील समाज का निर्माण करना जहां परस्पर सहयोग, करुणा और गौ सेवा प्रत्येक नागरिक का स्वाभाविक संस्कार बने। जहां सेवा ही सर्वोच्च संकल्प हो और कर्म ही सच्ची पूजा का स्वरूप धारण करे।
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section: Social Welfare Activities Preview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs sm:text-sm font-bold text-brand-gold-700 tracking-wider uppercase bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
                सामाजिक सहभागिता
              </span>
              <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 mt-3 leading-[1.3]">
                जमीनी स्तर पर हमारे सामाजिक कार्य
              </h2>
            </div>
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 text-base font-bold text-brand-green-800 hover:text-brand-gold-600 transition-colors"
            >
              <span>सभी गतिविधियाँ देखें</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {activitiesData.slice(0, 3).map((act) => (
              <div key={act.id} className="bg-stone-50 rounded-3xl p-6 sm:p-7 border border-stone-200 hover:shadow-md transition-shadow">
                <h4 className="font-serif font-bold text-xl sm:text-[22px] text-brand-green-950 mb-3 leading-snug">
                  {act.hindiName}
                </h4>
                <p className="text-[15.5px] sm:text-[16.5px] text-stone-700 leading-[1.75] mb-5">
                  {act.description}
                </p>
                <div className="space-y-2.5">
                  {act.items.map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-white rounded-2xl border border-stone-200/70 flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold-500 mt-2 shrink-0" />
                      <div>
                        <p className="text-[15px] sm:text-[16px] font-bold text-stone-900 leading-snug">{item.hindiTitle}</p>
                        <p className="text-[13.5px] sm:text-sm text-stone-600 line-clamp-1 mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section: How We Help – Three-Step Process */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
              सहायता कैसे प्राप्त करें (How We Help)
            </span>
            <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
              जरूरतमंदों तक सहायता पहुंचाने की 3-चरणीय प्रक्रिया
            </h2>
            <p className="text-body-fluid text-stone-700 leading-[1.8]">
              पारदर्शिता, संवेदनशीलता और त्वरित कार्रवाई—हमारा लक्ष्य प्रत्येक वास्तविक पीड़ित तक समय पर राहत पहुंचाना है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 Card */}
            <div className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-200 shadow-soft hover:shadow-premium transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src="/images/foundation/12-process-request.webp"
                  alt="चरण 1: सहायता अनुरोध एवं पंजीकरण - लक्की अतुल्य फाउंडेशन"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-brand-green-900 text-brand-gold-300 font-bold text-base flex items-center justify-center border border-brand-gold-400">
                  1
                </div>
              </div>
              <div className="p-6 sm:p-7 space-y-2.5">
                <span className="text-xs font-bold text-brand-gold-700 uppercase tracking-wider">
                  प्रथम चरण (Step 1)
                </span>
                <h3 className="text-[20px] sm:text-[22px] font-serif font-bold text-brand-green-950 leading-snug">
                  सहायता अनुरोध (Request Assistance)
                </h3>
                <p className="text-[15.5px] sm:text-[16.5px] text-stone-700 leading-[1.75]">
                  जरूरतमंद व्यक्ति या परिवार हमारे परानपुर मोड़ कार्यालय पधारकर अथवा फोन <strong>7505082602</strong> पर अपनी समस्या दर्ज कराते हैं।
                </p>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-200 shadow-soft hover:shadow-premium transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src="/images/foundation/13-process-coordination.webp"
                  alt="चरण 2: सत्यापन एवं योजना समन्वय - लक्की अतुल्य फाउंडेशन"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-brand-green-900 text-brand-gold-300 font-bold text-base flex items-center justify-center border border-brand-gold-400">
                  2
                </div>
              </div>
              <div className="p-6 sm:p-7 space-y-2.5">
                <span className="text-xs font-bold text-brand-gold-700 uppercase tracking-wider">
                  द्वितीय चरण (Step 2)
                </span>
                <h3 className="text-[20px] sm:text-[22px] font-serif font-bold text-brand-green-950 leading-snug">
                  सत्यापन एवं समन्वय (Coordination)
                </h3>
                <p className="text-[15.5px] sm:text-[16.5px] text-stone-700 leading-[1.75]">
                  स्वयंसेवक दल आवश्यक दस्तावेजों की जांच कर सरकारी पोर्टल, ब्लॉक स्तर अथवा फाउंडेशन के सेवा संसाधनों से सीधा समन्वय स्थापित करता है।
                </p>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-200 shadow-soft hover:shadow-premium transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src="/images/foundation/14-process-support.webp"
                  alt="चरण 3: प्रत्यक्ष सहायता एवं राहत प्रदायगी - लक्की अतुल्य फाउंडेशन"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-brand-green-900 text-brand-gold-300 font-bold text-base flex items-center justify-center border border-brand-gold-400">
                  3
                </div>
              </div>
              <div className="p-6 sm:p-7 space-y-2.5">
                <span className="text-xs font-bold text-brand-gold-700 uppercase tracking-wider">
                  तृतीय चरण (Step 3)
                </span>
                <h3 className="text-[20px] sm:text-[22px] font-serif font-bold text-brand-green-950 leading-snug">
                  राहत प्रदायगी (Support Delivered)
                </h3>
                <p className="text-[15.5px] sm:text-[16.5px] text-stone-700 leading-[1.75]">
                  पेंशन आवेदन पूर्ण कराना, एम्बुलेंस द्वारा मरीज को अस्पताल पहुंचाना या कन्या विवाह में उपहार सामग्री ससम्मान सुपुर्द करना।
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section: Why Support Our Foundation */}
      <section className="py-16 sm:py-24 bg-[#0E2E24] text-white relative overflow-hidden">
        {/* Subtle background visual */}
        <div className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" style={{ backgroundImage: "url('/images/foundation/11-why-choose-us.webp')" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs sm:text-sm font-bold text-brand-gold-400 tracking-wider uppercase bg-white/10 px-4 py-1.5 rounded-full border border-brand-gold-400/40">
              विश्वसनीयता एवं समर्पण
            </span>
            <h2 className="text-section-fluid font-serif font-bold text-white leading-[1.3]">
              क्यों चुनें {foundationData.hindiName}?
            </h2>
            <p className="text-body-fluid text-white/80 leading-[1.8]">
              हमारे कार्य सीधे धरातल पर स्थानीय नागरिकों से जुड़े हैं, जहां पारदर्शिता और निस्वार्थ सेवा सर्वोच्च प्राथमिकता है।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-7 text-center space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-gold-500/20 flex items-center justify-center text-brand-gold-400">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-[17px] sm:text-lg text-white font-serif leading-snug">स्थानीय पहुंच एवं उपस्थिति</h4>
              <p className="text-[14.5px] sm:text-[15px] text-white/80 leading-[1.75]">
                जसराना के परानपुर मोड़ पर स्थित हमारा केंद्र क्षेत्र के प्रत्येक गाँव के लोगों के लिए हर समय सुलभ है।
              </p>
            </div>

            <div className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-7 text-center space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-gold-500/20 flex items-center justify-center text-brand-gold-400">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-[17px] sm:text-lg text-white font-serif leading-snug">शून्य-शुल्क निस्वार्थ सेवा</h4>
              <p className="text-[14.5px] sm:text-[15px] text-white/80 leading-[1.75]">
                पेंशन मार्गदर्शन अथवा आवेदन प्रक्रिया में किसी भी जरूरतमंद से कोई अनुचित शुल्क नहीं लिया जाता।
              </p>
            </div>

            <div className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-7 text-center space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-gold-500/20 flex items-center justify-center text-brand-gold-400">
                <Ambulance className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-[17px] sm:text-lg text-white font-serif leading-snug">आपातकालीन तत्परता</h4>
              <p className="text-[14.5px] sm:text-[15px] text-white/80 leading-[1.75]">
                दुर्घटना अथवा गंभीर बीमारी में वाहन की उपलब्धता अनुसार त्वरित एम्बुलेंस समन्वय का प्रयास।
              </p>
            </div>

            <div className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-7 text-center space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-gold-500/20 flex items-center justify-center text-brand-gold-400">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-[17px] sm:text-lg text-white font-serif leading-snug">पारदर्शी नेतृत्व</h4>
              <p className="text-[14.5px] sm:text-[15px] text-white/80 leading-[1.75]">
                अध्यक्ष लोधी देवेंद्र सिंह जी एवं समर्पित स्वयंसेवकों की टीम व्यक्तिगत निगरानी में काम करती है।
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Section: Volunteer CTA Banner */}
      <section className="relative py-16 sm:py-24 bg-brand-gold-500 text-brand-green-950 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('/images/foundation/17-contact-cta.webp')" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand-green-950 text-brand-gold-300 px-4 py-1.5 rounded-full">
            मानवता की सेवा में सहभागिता
          </span>
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-serif font-bold text-brand-green-950 max-w-3xl mx-auto leading-[1.3]">
            "अपने लिए तो सब जीते हैं, किसी और के लिए जी कर तो देखो..."
          </h2>
          <p className="text-[clamp(1.0625rem,1.2vw,1.25rem)] max-w-2xl mx-auto text-brand-green-900 font-medium leading-[1.8]">
            {foundationData.hindiName} के साथ जुड़कर अपने गाँव और समाज के जरूरतमंदों की सेवा में अपना योगदान दें। आपका थोड़ा सा समय किसी के जीवन में नई रोशनी ला सकता है।
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsVolunteerModalOpen(true)}
              className="px-9 py-4 rounded-xl text-base sm:text-[17px] font-bold bg-brand-green-950 text-white hover:bg-brand-green-900 shadow-lg hover:shadow-xl transition-all"
            >
              स्वयंसेवक के रूप में जुड़ें
            </button>
            <a
              href={`tel:${foundationData.contact.phone}`}
              className="px-9 py-4 rounded-xl text-base sm:text-[17px] font-bold bg-white text-brand-green-950 hover:bg-stone-100 shadow-md transition-all flex items-center gap-2.5"
            >
              <Phone className="w-5 h-5 text-brand-gold-600" />
              <span>कॉल: {foundationData.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section: Quick Contact Info */}
      <section className="py-16 sm:py-24 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider">
                  कार्यालय एवं संपर्क
                </span>
                <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-serif font-bold text-brand-green-950 leading-[1.3]">
                  क्या आपको अथवा किसी परिचित को सहायता की आवश्यकता है?
                </h3>
                <p className="text-body-fluid text-stone-700 leading-[1.8]">
                  वृद्धा/विधवा पेंशन मार्गदर्शन, आपातकालीन एम्बुलेंस, कन्या विवाह सहयोग अथवा गौ सेवा हेतु हमारे कार्यालय पर पधारें या सीधे फोन पर संपर्क करें।
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-[15px] sm:text-base font-bold text-stone-800">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-gold-600" />
                    <span>{foundationData.contact.address}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3.5">
                <a
                  href={`tel:${foundationData.contact.phone}`}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-base sm:text-[17px] font-bold bg-brand-green-800 text-white hover:bg-brand-green-900 transition-colors shadow"
                >
                  <Phone className="w-5 h-5 text-brand-gold-300" />
                  <span>सीधे कॉल करें: 7505082602</span>
                </a>

                <a
                  href={`https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent('नमस्ते लक्की अतुर्वा फाउंडेशन, मुझे आपकी सहायता सेवा की जानकारी चाहिए।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-base sm:text-[17px] font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp पर सहायता मांगें</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

