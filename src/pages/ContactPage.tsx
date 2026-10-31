import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Ambulance, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Youtube,
  Instagram,
  Facebook
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { foundationData } from '../data/foundationData';
import { getAssetUrl } from '../utils/assetHelper';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    purpose: 'वृद्धा एवं विधवा पेंशन सहायता',
    locality: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct prefilled WhatsApp message
    const waText = `*लक्की अतुर्वा फाउंडेशन - संपर्क अनुरोध (Contact Request)*\n\n*नाम:* ${formData.fullName}\n*मोबाइल:* ${formData.mobile}\n*उद्देश्य:* ${formData.purpose}\n*क्षेत्र/गाँव:* ${formData.locality || 'उल्लेखित नहीं'}\n*संदेश:* ${formData.message}\n\n(यह संदेश Lucky Aturva Foundation वेबसाइट फॉर्म से स्वतः तैयार किया गया है)`;
    
    const waUrl = `https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent(waText)}`;
    
    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <>
      <SEOHead
        title="संपर्क करें | कार्यालय पता एवं हेल्पलाइन"
        description="लक्की अतुर्वा फाउंडेशन जसराना फिरोजाबाद संपर्क सूत्र: फोन 7505082602, एम्बुलेंस 9784833600। परानपुर मोड़, जसराना, फिरोजाबाद (उ.प्र.)।"
        keywords="Lucky Aturva Foundation Contact, लक्की अतुर्वा फाउंडेशन जसराना फोन नंबर, लोधी देवेंद्र सिंह संपर्क, फिरोजाबाद एनजीओ पता"
        canonicalPath="/contact"
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0E2E24] to-[#174B3B] text-white py-14 sm:py-20">
        <div className="absolute inset-0 opacity-15 bg-cover bg-right pointer-events-none" style={{ backgroundImage: `url('${getAssetUrl("/images/foundation/17-contact-cta.webp")}')` }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'संपर्क करें' }]} />
          
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
              संपर्क करें (Contact Us)
            </h1>
            <p className="text-body-fluid text-white/90 leading-[1.8]">
              "{foundationData.commitmentStatement}" — {foundationData.hindiName} के परानपुर मोड़ कार्यालय पर पधारें अथवा फोन और व्हाट्सएप के माध्यम से सीधे संपर्क करें।
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-24 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Column: Direct Details & President Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Contact Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-soft space-y-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-green-950 border-b pb-3.5 border-stone-200">
                  सीधा संपर्क सूत्र
                </h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green-50 text-brand-green-800 flex items-center justify-center shrink-0 border border-brand-green-200 shadow-sm">
                      <Phone className="w-6 h-6 text-brand-green-700" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm text-stone-500 font-semibold block">हेल्पलाइन एवं परामर्श नंबर</span>
                      <p className="text-lg sm:text-xl font-bold text-brand-green-900 mt-0.5">
                        <a href={`tel:${foundationData.contact.phone}`} className="hover:text-brand-gold-600 transition-colors">
                          {foundationData.contact.phoneFormatted}
                        </a>
                      </p>
                      <p className="text-xs sm:text-[13px] text-stone-600 mt-0.5 font-medium">कॉल समय: 09:00 AM - 07:00 PM</p>
                    </div>
                  </div>

                  {/* Ambulance */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center shrink-0 border border-rose-200 shadow-sm">
                      <Ambulance className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm text-stone-500 font-semibold block">निःशुल्क एम्बुलेंस आपातकालीन समन्वय</span>
                      <p className="text-lg sm:text-xl font-bold text-rose-900 mt-0.5">
                        <a href={`tel:${foundationData.contact.ambulanceHelpline}`} className="hover:text-rose-700 transition-colors">
                          +91 {foundationData.contact.ambulanceHelpline}
                        </a>
                      </p>
                      <p className="text-xs sm:text-[13px] text-stone-600 mt-0.5 font-medium">वाहन की तत्कालीन उपलब्धता अनुसार</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200 shadow-sm">
                      <MessageCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm text-stone-500 font-semibold block">WhatsApp त्वरित संदेश</span>
                      <p className="text-lg sm:text-xl font-bold text-stone-900 mt-0.5">
                        <a 
                          href={`https://wa.me/${foundationData.contact.whatsapp}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-emerald-700 transition-colors"
                        >
                          {foundationData.contact.phoneFormatted}
                        </a>
                      </p>
                      <p className="text-xs sm:text-[13px] text-stone-600 mt-0.5 font-medium">दस्तावेज व जानकारी व्हाट्सएप पर भेजें</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200 shadow-sm">
                      <MapPin className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm text-stone-500 font-semibold block">कार्यालय एवं निवास पता</span>
                      <p className="text-[15.5px] sm:text-[16.5px] font-bold text-stone-900 leading-snug mt-0.5">
                        {foundationData.contact.address}
                      </p>
                      <p className="text-xs sm:text-[13px] text-stone-600 mt-1 font-medium">
                        तहसील: जसराना • जनपद: फिरोजाबाद (उत्तर प्रदेश)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${foundationData.contact.phone}`}
                    className="flex-1 py-3.5 px-4 rounded-xl font-bold bg-brand-green-800 text-white text-center hover:bg-brand-green-900 transition-colors text-sm sm:text-base flex items-center justify-center gap-2 shadow"
                  >
                    <Phone className="w-4 h-4 text-brand-gold-300" />
                    <span>कॉल करें</span>
                  </a>
                  <a
                    href={`https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent('नमस्ते लक्की अतुर्वा फाउंडेशन, मुझे आपकी सेवा की जानकारी चाहिए।')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-4 rounded-xl font-bold bg-[#25D366] text-white text-center hover:bg-[#1EBE5D] transition-colors text-sm sm:text-base flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp संदेश</span>
                  </a>
                </div>
              </div>

              {/* President Profile Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="w-22 h-22 rounded-2xl overflow-hidden border-2 border-brand-gold-400 shrink-0 bg-stone-100 shadow-sm">
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
                    <h4 className="font-serif font-bold text-xl text-brand-green-950 mt-0.5">
                      {foundationData.president.hindiName}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-500 font-medium mt-0.5">
                      {foundationData.name}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-700 font-bold mt-1">
                      मो. {foundationData.contact.phoneFormatted}
                    </p>
                  </div>
                </div>
              </div>

              {/* Official Social Media Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-soft space-y-4">
                <div>
                  <span className="text-xs font-bold text-brand-gold-700 uppercase tracking-wider block">
                    ऑनलाइन मंच (Official Channels)
                  </span>
                  <h4 className="font-serif font-bold text-xl text-brand-green-950 mt-1">
                    सोशल मीडिया पर जुड़ें
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    फाउंडेशन के जनकल्याण अभियानों, वीडियो और सामाजिक गतिविधियों के ताजा अपडेट्स पाने के लिए हमें फॉलो करें:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <a
                    href={foundationData.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on YouTube"
                    title="Follow us on YouTube"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold bg-red-50 hover:bg-[#FF0000] text-red-700 hover:text-white transition-all border border-red-200 shadow-sm group"
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
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold bg-fuchsia-50 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-fuchsia-700 hover:text-white transition-all border border-fuchsia-200 shadow-sm group"
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
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold bg-blue-50 hover:bg-[#1877F2] text-blue-700 hover:text-white transition-all border border-blue-200 shadow-sm group"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive WhatsApp Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-soft space-y-6">
                
                <div>
                  <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
                    ऑनलाइन संदेश प्रेषण
                  </span>
                  <h3 className="text-section-fluid font-serif font-bold text-brand-green-950 mt-2.5 leading-[1.3]">
                    सहायता अथवा जानकारी हेतु संदेश भेजें
                  </h3>
                  <p className="text-body-fluid text-stone-700 mt-2 leading-[1.8]">
                    अपना विवरण भरें। यह फॉर्म सीधे फाउंडेशन अध्यक्ष के व्हाट्सएप पर प्रारूपित संदेश तैयार करेगा।
                  </p>
                </div>

                {/* Scope Notice */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  <AlertCircle className="w-5 h-5 text-brand-gold-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>चरण 1 (Phase 1):</strong> डेटाबेस भंडारण अभी सक्रिय नहीं है। फॉर्म सबमिट करने पर विवरण व्हाट्सएप चैट में स्वतः खुल जाएगा ताकि त्वरित संवाद हो सके।
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-stone-800 mb-2">
                        आपका पूरा नाम (Full Name) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="उदा. राम कुमार"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-brand-gold-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-stone-800 mb-2">
                        मोबाइल नंबर (Mobile Number) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="10 अंकों का फोन नंबर"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-brand-gold-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-stone-800 mb-2">
                        संपर्क का उद्देश्य (Purpose) *
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-brand-gold-500 bg-white font-medium"
                      >
                        <option value="वृद्धा एवं विधवा पेंशन सहायता">वृद्धा एवं विधवा पेंशन सहायता</option>
                        <option value="निःशुल्क एम्बुलेंस अनुरोध">निःशुल्क एम्बुलेंस अनुरोध</option>
                        <option value="कन्या विवाह सहयोग">कन्या विवाह सहयोग</option>
                        <option value="उपचार एवं चिकित्सा सहायता">उपचार एवं चिकित्सा सहायता</option>
                        <option value="गौ सेवा एवं संरक्षण">गौ सेवा एवं संरक्षण</option>
                        <option value="धार्मिक/सामाजिक कार्य">धार्मिक/सामाजिक कार्य</option>
                        <option value="स्वयंसेवक के रूप में जुड़ना">स्वयंसेवक के रूप में जुड़ना</option>
                        <option value="अन्य सामान्य पूछताछ">अन्य सामान्य पूछताछ</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-stone-800 mb-2">
                        गाँव / कस्बा / वार्ड (Locality)
                      </label>
                      <input
                        type="text"
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                        placeholder="उदा. परानपुर मोड़, जसराना"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-brand-gold-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-800 mb-2">
                      विस्तृत संदेश / समस्या का विवरण (Message) *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="कृपया अपनी आवश्यकता अथवा समस्या का विवरण यहाँ लिखें..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base focus:outline-none focus:ring-2 focus:ring-brand-gold-500 font-medium leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base sm:text-[17px]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp पर संदेश भेजें</span>
                  </button>
                </form>

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-semibold flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>संदेश व्हाट्सएप में खोला गया है। कृपया चैट में 'Send' बटन दबाकर संवाद पूर्ण करें।</span>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Google Maps Location Embed Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
                स्थान मानचित्र (Location Map)
              </span>
              <h3 className="text-section-fluid font-serif font-bold text-brand-green-950 mt-2.5 leading-[1.3]">
                फाउंडेशन कार्यालय का नक्शा एवं मार्ग
              </h3>
              <p className="text-body-fluid text-stone-700 mt-1 leading-[1.8]">
                परानपुर मोड़, जसराना, जनपद फिरोजाबाद (उत्तर प्रदेश) - 283152
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Jasrana,+Firozabad,+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold bg-brand-green-800 text-white hover:bg-brand-green-900 transition-colors shadow text-sm sm:text-base shrink-0 self-start md:self-auto"
            >
              <MapPin className="w-4 h-4 text-brand-gold-300" />
              <span>Google Maps पर दिशा निर्देश देखें</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-stone-200 shadow-soft bg-stone-100 relative">
            <iframe
              title="लक्की अतुर्वा फाउंडेशन जसराना फिरोजाबाद लोकेशन"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Jasrana,+Firozabad,+Uttar+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  );
};
