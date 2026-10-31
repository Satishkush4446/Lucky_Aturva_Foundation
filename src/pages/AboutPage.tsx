import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Heart, 
  Users, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Target, 
  Eye, 
  Sparkles,
  Award,
  Youtube,
  Instagram,
  Facebook
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { foundationData } from '../data/foundationData';

export const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: 'निःस्वार्थ सेवा (Selfless Service)',
      hindiTitle: 'निःस्वार्थ सेवा',
      desc: 'सेवा केवल दिखावे के लिए नहीं, बल्कि पीड़ित व्यक्ति के हृदय तक राहत पहुंचाने के पवित्र उद्देश्य से की जाती है।'
    },
    {
      title: 'पारदर्शिता एवं प्रामाणिकता (Integrity)',
      hindiTitle: 'पारदर्शिता एवं शुचिता',
      desc: 'संस्था का प्रत्येक कार्य निष्पक्ष, पारदर्शी और वास्तविक जरूरतमंद की पहचान पर आधारित होता है।'
    },
    {
      title: 'सहानुभूति एवं करुणा (Compassion)',
      hindiTitle: 'करुणा एवं संवेदनशीलता',
      desc: 'वृद्धजनों, निराश्रित माताओं, लाचार मरीजों और बेजुबान गौवंश के प्रति आत्मीय सम्मान और करुणा का भाव।'
    },
    {
      title: 'सामुदायिक एकता (Community Unity)',
      hindiTitle: 'सामुदायिक समरसता',
      desc: 'बिना किसी जाति, पंथ अथवा वर्ग भेद के समाज के सभी वर्गों को साथ लेकर चलने का अटूट संकल्प।'
    }
  ];

  return (
    <>
      <SEOHead
        title="हमारे बारे में | परिचय एवं उद्देश्य"
        description="लक्की अतुर्वा फाउंडेशन के बारे में जानें। अध्यक्ष लोधी देवेंद्र सिंह के नेतृत्व में जसराना, फिरोजाबाद में संचालित निःस्वार्थ सामाजिक सेवा संगठन।"
        keywords="About Lucky Aturva Foundation, लक्की अतुर्वा फाउंडेशन का परिचय, लोधी देवेंद्र सिंह, जसराना फिरोजाबाद सामाजिक सेवा"
        canonicalPath="/about"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#0E2E24] to-[#174B3B] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'हमारे बारे में' }]} />
          
          <div className="mt-4 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-brand-gold-500/20 text-brand-gold-300 border border-brand-gold-400/40">
              <Sparkles className="w-4 h-4" />
              <span>संस्था परिचय एवं संकल्प</span>
            </span>
            <h1 className="text-[clamp(2.125rem,4vw,3.25rem)] font-serif font-bold text-white leading-[1.25]">
              हमारे बारे में (About Us)
            </h1>
            <p className="text-body-fluid text-white/90 leading-[1.8]">
              {foundationData.tagline} — जसराना एवं फिरोजाबाद में निस्वार्थ भाव से समाज के वंचित, वृद्ध, असहाय परिवारों और गौ माता की सेवा हेतु समर्पित संस्था।
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Story & Purpose of Establishment */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
                हमारी प्रेरणा एवं कहानी
              </span>
              
              <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
                स्थापना का उद्देश्य: <br />
                <span className="text-brand-gold-600">अंतिम पंक्ति के व्यक्ति तक सहायता पहुंचाना</span>
              </h2>

              <div className="space-y-4 text-body-fluid text-stone-700 leading-[1.8]">
                <p>
                  ग्रामीण एवं कस्बाई अंचलों में आज भी अनेक ऐसे परिवार हैं जो आवश्यक सरकारी योजनाओं, समय पर स्वास्थ्य सेवाओं और सामाजिक संबल के अभाव में कठिनाइयों से जूझते हैं। अनेक वृद्ध नागरिक और विधवा माताएं केवल जानकारी या आवेदन प्रक्रिया की जटिलता के कारण पेंशन से वंचित रह जाती हैं।
                </p>
                <p>
                  इसी पीड़ा को अनुभव करते हुए <strong>लक्की अतुर्वा फाउंडेशन</strong> की नींव रखी गई। संस्था का मुख्य उद्देश्य किसी व्यावसायिक या राजनीतिक मंशा से परे रहकर केवल और केवल मानवीय सेवा को धरातल पर उतारना है।
                </p>
                <p>
                  हमारा दृढ़ विश्वास है कि जब तक समाज के प्रत्येक कमजोर व्यक्ति के आंसू पोंछने वाला कोई हाथ आगे नहीं आता, तब तक समाज का संपूर्ण विकास संभव नहीं है। परानपुर मोड़ (जसराना) स्थित हमारे केंद्र से हम निरंतर लोगों की समस्याओं को सुनकर उचित मार्गदर्शन और प्रत्यक्ष सहयोग प्रदान कर रहे हैं।
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-brand-gold-600 shrink-0" />
                  <span className="text-sm sm:text-[15px] font-bold text-stone-900">
                    कार्यालय: {foundationData.contact.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Box with Authentic Imagery & Office Banner Preview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#F7F5EF] rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-soft space-y-4">
                <div className="overflow-hidden rounded-2xl border border-brand-gold-300/80 shadow-md aspect-[16/9] bg-stone-900 group">
                  <img
                    src="/images/foundation/10-about-us.webp"
                    alt="ग्रामीण समुदाय के साथ संवाद एवं सेवा - लक्की अतुल्य फाउंडेशन"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-sm sm:text-base font-bold text-brand-green-950 font-serif">
                    सामुदायिक सेवा एवं संवाद (Community Engagement)
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 font-medium">
                    जसराना, फिरोजाबाद के ग्रामीण अंचलों में निरंतर सेवा कार्य
                  </p>
                </div>
              </div>

              {/* Physical Office Banner Reference */}
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm flex items-center gap-3.5">
                <div className="w-22 h-16 rounded-xl overflow-hidden border border-brand-gold-400 shrink-0 shadow-sm">
                  <img
                    src="/client-banner.jpg"
                    alt="कार्यालय बोर्ड लक्की अतुल्य फाउंडेशन जसराना"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-[15px] font-bold text-brand-green-950 font-serif">
                    कार्यालय फलक (Office Banner)
                  </p>
                  <p className="text-xs sm:text-[13px] text-stone-600 font-medium">
                    परानपुर मोड़, जसराना (उ.प्र.)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Field Activities Visual Showcase */}
      <section className="py-14 sm:py-20 bg-[#F7F5EF] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-soft space-y-5">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
                सेवा का प्रत्यक्ष धरातल
              </span>
              <h3 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
                फाउंडेशन के सामाजिक एवं मानवीय कार्यक्षेत्र
              </h3>
              <p className="text-body-fluid text-stone-700 leading-[1.75]">
                पेंशन मार्गदर्शन, एम्बुलेंस, कन्या विवाह, स्वच्छता, गौ संरक्षण एवं धार्मिक आयोजनों में निःस्वार्थ सहभागिता।
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border-2 border-brand-gold-300 shadow-md aspect-[16/9] bg-stone-900">
              <img
                src="/images/foundation/master-collage-activities.webp"
                alt="लक्की अतुल्य फाउंडेशन कार्यक्षेत्र विहंगावलोकन"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* President Introduction Section */}
      <section className="py-16 sm:py-24 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-premium">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* President Portrait */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-4 border-brand-gold-400 shadow-xl bg-stone-100 mb-4">
                  <img
                    src={foundationData.president.image}
                    alt={foundationData.president.hindiName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl sm:text-[26px] font-serif font-bold text-brand-green-950">
                  {foundationData.president.hindiName}
                </h3>
                <p className="text-base font-bold text-brand-gold-700 mt-0.5">
                  {foundationData.president.hindiTitle}
                </p>
                <p className="text-sm text-stone-600 mt-1 font-medium">
                  {foundationData.president.name}
                </p>

                {/* President Social Links */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
                  <a
                    href={foundationData.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on YouTube"
                    title="Follow us on YouTube"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-stone-100 hover:bg-[#FF0000] text-stone-800 hover:text-white transition-all shadow-sm border border-stone-200 hover:border-[#FF0000] group"
                  >
                    <Youtube className="w-4 h-4 text-[#FF0000] group-hover:text-white transition-colors" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href={foundationData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    title="Follow us on Instagram"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-stone-100 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-stone-800 hover:text-white transition-all shadow-sm border border-stone-200 hover:border-pink-400 group"
                  >
                    <Instagram className="w-4 h-4 text-[#E1306C] group-hover:text-white transition-colors" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={foundationData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                    title="Follow us on Facebook"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-stone-100 hover:bg-[#1877F2] text-stone-800 hover:text-white transition-all shadow-sm border border-stone-200 hover:border-[#1877F2] group"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* President Words & Leadership */}
              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
                  अध्यक्षीय संदेश
                </span>
                <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
                  "सेवा ही संकल्प है, कर्म ही पूजा है"
                </h2>
                
                <div className="p-5 sm:p-6 rounded-2xl bg-brand-gold-50/80 border border-brand-gold-300/80 text-stone-900 font-serif text-[17px] sm:text-lg italic leading-[1.75]">
                  "{foundationData.quote}"
                </div>

                <div className="space-y-4 text-body-fluid text-stone-700 leading-[1.8]">
                  <p>
                    {foundationData.president.bio}
                  </p>
                  <p>
                    {foundationData.president.message}
                  </p>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <a
                    href={`tel:${foundationData.contact.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-brand-green-800 text-white hover:bg-brand-green-900 transition-colors shadow-sm text-base"
                  >
                    <Phone className="w-4 h-4 text-brand-gold-300" />
                    <span>सीधा संपर्क: {foundationData.contact.phoneFormatted}</span>
                  </a>
                  <a
                    href={`https://wa.me/${foundationData.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-sm text-base"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp संदेश</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            <div className="bg-[#F7F5EF] rounded-3xl p-8 sm:p-10 border border-stone-200/90 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-green-800 text-brand-gold-300 flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-serif font-bold text-brand-green-950 leading-snug">
                हमारा मिशन (Our Mission)
              </h3>
              <p className="text-body-fluid text-stone-700 leading-[1.8]">
                जसराना, फिरोजाबाद एवं आसपास के ग्रामीण क्षेत्रों में कमजोर व जरूरतमंद नागरिकों को बिना किसी बाधा के सामाजिक योजनाओं का लाभ दिलाना, आपातकालीन स्वास्थ्य परिवहन का समन्वय करना, निर्धन परिवारों की बेटियों के विवाह में सहयोग देना तथा गौ माता की सुरक्षा व सेवा में निरंतर अग्रणी रहना।
              </p>
            </div>

            <div className="bg-[#F7F5EF] rounded-3xl p-8 sm:p-10 border border-stone-200/90 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold-600 text-white flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-serif font-bold text-brand-green-950 leading-snug">
                हमारा दृष्टिकोण (Our Vision)
              </h3>
              <p className="text-body-fluid text-stone-700 leading-[1.8]">
                एक ऐसे आदर्श समाज का निर्माण करना जहां सेवा भाव प्रत्येक व्यक्ति की अंतरात्मा से जुड़े, जहां कोई भी वृद्ध असहाय न रहे, जहां कोई बेटी आर्थिक तंगी के कारण उपेक्षित न हो और जहां प्रकृति, पशु-पक्षी व गौवंश का आदर सनातन संस्कारों के अनुसार किया जाए।
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-24 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
              हमारे आधारभूत सिद्धांत
            </span>
            <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
              हमारे मूल संस्कार एवं मूल्य (Core Values)
            </h2>
            <p className="text-body-fluid text-stone-700 leading-[1.8]">
              लक्की अतुर्वा फाउंडेशन का प्रत्येक स्वयंसेवक इन्हीं आदर्शों को आत्मसात कर जनसेवा में तत्पर रहता है।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-soft hover:shadow-md transition-shadow space-y-3">
                <div className="w-11 h-11 rounded-xl bg-brand-green-50 text-brand-green-700 flex items-center justify-center font-bold text-lg">
                  0{idx + 1}
                </div>
                <h4 className="font-serif font-bold text-xl text-brand-green-950 leading-snug">
                  {val.hindiTitle}
                </h4>
                <p className="text-[15px] sm:text-[16px] text-stone-700 leading-[1.75]">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Commitment to Society */}
      <section className="py-16 sm:py-24 bg-[#174B3B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            हमारा वचन
          </span>
          <h2 className="text-section-fluid font-serif font-bold text-white leading-[1.3]">
            समाज के प्रति हमारी अटूट प्रतिबद्धता
          </h2>
          <p className="text-body-fluid text-white/90 leading-[1.8] max-w-3xl mx-auto">
            हम वादा करते हैं कि फाउंडेशन का प्रत्येक प्रयास केवल समाजहित और जनकल्याण के लिए होगा। हम किसी भी झूठे प्रचार या गैर-वास्तविक दावों से दूर रहकर धरातल पर सच्चे मन से लोगों की सेवा करते रहेंगे।
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-xl font-bold bg-brand-gold-500 text-brand-green-950 hover:bg-brand-gold-400 transition-colors shadow-md text-base"
            >
              हमारी सेवाएँ देखें
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl font-bold bg-white/15 text-white hover:bg-white/25 border border-white/25 transition-colors text-base"
            >
              कार्यालय से संपर्क करें
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

