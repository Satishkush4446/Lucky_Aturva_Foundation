import React, { useState } from 'react';
import { 
  Sparkles, 
  Filter, 
  Info, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Camera, 
  Eye, 
  X,
  HeartHandshake
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { activitiesData } from '../data/activitiesData';
import { foundationData } from '../data/foundationData';

export const ActivitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageModal, setActiveImageModal] = useState<{
    image: string;
    title: string;
    desc: string;
    notice: string;
  } | null>(null);

  // Filter items
  const allItems = activitiesData.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryName: cat.hindiName }))
  );

  const displayedItems = selectedCategory === 'all'
    ? allItems
    : allItems.filter((i) => i.categoryId === selectedCategory);

  return (
    <>
      <SEOHead
        title="सामाजिक गतिविधियाँ एवं सहभागिता | Photo Gallery"
        description="लक्की अतुर्वा फाउंडेशन के सामाजिक कार्य, सामुदायिक सेवा, स्वास्थ्य शिविर समन्वय, गौ सेवा एवं धार्मिक आयोजनों में सहभागिता की झलकियां।"
        keywords="Lucky Aturva Foundation Activities, सामाजिक गतिविधियाँ जसराना, गौ सेवा फिरोजाबाद, रक्तदान एम्बुलेंस सहायता"
        canonicalPath="/activities"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#0E2E24] to-[#174B3B] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'गतिविधियाँ' }]} />
          
          <div className="mt-4 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-brand-gold-500/20 text-brand-gold-300 border border-brand-gold-400/40">
              <Sparkles className="w-4 h-4" />
              <span>सामाजिक सरोकार एवं सहभागिता</span>
            </span>
            <h1 className="text-[clamp(2.125rem,4vw,3.25rem)] font-serif font-bold text-white leading-[1.25]">
              सामाजिक गतिविधियाँ (Activities & Community Work)
            </h1>
            <p className="text-body-fluid text-white/90 leading-[1.8]">
              लक्की अतुर्वा फाउंडेशन द्वारा जसराना एवं फिरोजाबाद क्षेत्र में संचालित सामुदायिक सेवा, स्वास्थ्य मार्गदर्शन, गौ संरक्षण एवं धार्मिक सहभागिता के प्रमुख आयाम।
            </p>
          </div>
        </div>
      </section>

      {/* Master Overview Banner */}
      <section className="bg-[#F7F5EF] pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-soft space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
                  समग्र सेवा परिदृश्य (Complete Welfare Overview)
                </span>
                <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 mt-2.5 leading-[1.3]">
                  अध्यक्ष श्री लोधी देवेंद्र सिंह जी के नेतृत्व में संचालित सभी सेवा आयाम
                </h2>
              </div>
              <button
                onClick={() => setActiveImageModal({
                  image: '/images/foundation/master-collage-activities.webp',
                  title: 'लक्की अतुल्य फाउंडेशन - समग्र सेवा गतिविधियाँ',
                  desc: 'वृद्धा/विधवा पेंशन, निःशुल्क एम्बुलेंस, कन्या विवाह सहयोग, स्वच्छता, चिकित्सा सहायता, गौ सेवा एवं धार्मिक भंडारा आयोजनों की सामूहिक झलकियां।',
                  notice: 'अध्यक्ष लोधी देवेंद्र सिंह जी एवं समर्पित स्वयंसेवकों की टीम द्वारा संचालित कार्य'
                })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm sm:text-base font-bold bg-brand-green-800 text-white hover:bg-brand-green-900 transition-colors shrink-0 shadow-md self-start sm:self-auto"
              >
                <Eye className="w-4 h-4 text-brand-gold-300" />
                <span>बड़ा दृश्य देखें (Full Screen)</span>
              </button>
            </div>

            <div 
              className="relative rounded-3xl overflow-hidden border-2 border-brand-gold-300/80 shadow-md group cursor-pointer aspect-[16/9] bg-stone-900"
              onClick={() => setActiveImageModal({
                image: '/images/foundation/master-collage-activities.webp',
                title: 'लक्की अतुल्य फाउंडेशन - समग्र सेवा गतिविधियाँ',
                desc: 'वृद्धा/विधवा पेंशन, निःशुल्क एम्बुलेंस, कन्या विवाह सहयोग, स्वच्छता, चिकित्सा सहायता, गौ सेवा एवं धार्मिक भंडारा आयोजनों की सामूहिक झलकियां।',
                notice: 'अध्यक्ष लोधी देवेंद्र सिंह जी एवं समर्पित स्वयंसेवकों की टीम द्वारा संचालित कार्य'
              })}
            >
              <img
                src="/images/foundation/master-collage-activities.webp"
                alt="लक्की अतुल्य फाउंडेशन समग्र सामाजिक गतिविधियां - अध्यक्ष लोधी देवेंद्र सिंह"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-black/75 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/25 flex items-center gap-2">
                <Camera className="w-4 h-4 text-brand-gold-400" />
                <span>क्लिक कर विस्तृत देखें</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery */}
      <section className="py-12 sm:py-20 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-green-800 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              सभी गतिविधियाँ ({allItems.length})
            </button>
            {activitiesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-green-800 text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.hindiName}
              </button>
            ))}
          </div>

          {/* Activity Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedItems.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.hindiTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Category tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-green-950/90 text-brand-gold-300 backdrop-blur-sm border border-brand-gold-400/40">
                        {item.tag}
                      </span>
                    </div>

                    {/* Preview Button */}
                    <button
                      onClick={() => setActiveImageModal({
                        image: item.image,
                        title: item.hindiTitle,
                        desc: item.description,
                        notice: item.notice
                      })}
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/95 text-stone-900 hover:bg-white hover:text-brand-green-800 transition-colors shadow-md"
                      title="बड़ा देखें"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body text */}
                  <div className="p-6 sm:p-7">
                    <span className="text-xs font-bold text-brand-gold-700 uppercase tracking-wide block mb-1.5">
                      {item.categoryName}
                    </span>
                    <h3 className="text-[21px] sm:text-[22px] font-serif font-bold text-brand-green-950 group-hover:text-brand-green-800 transition-colors leading-snug">
                      {item.hindiTitle}
                    </h3>
                    <p className="text-sm text-stone-500 font-medium mb-3 mt-1">
                      {item.title}
                    </p>
                    <p className="text-[15.5px] sm:text-[16.5px] text-stone-700 leading-[1.75]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Notice */}
                <div className="p-6 sm:p-7 pt-0 mt-auto border-t border-stone-100">
                  <p className="text-xs sm:text-[13px] text-stone-500 italic">
                    {item.notice}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Office Banner Real Photo Feature */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs sm:text-sm font-bold text-brand-gold-700 uppercase tracking-wider bg-brand-gold-50 px-4 py-1.5 rounded-full border border-brand-gold-300">
                प्रामाणिक केंद्र
              </span>
              <h2 className="text-section-fluid font-serif font-bold text-brand-green-950 leading-[1.3]">
                जसराना कार्यालय पर पधारें
              </h2>
              <p className="text-body-fluid text-stone-700 leading-[1.8]">
                लक्की अतुर्वा फाउंडेशन का कार्यालय परानपुर मोड़, जसराना (फिरोजाबाद) में स्थित है। हमारे केंद्र पर आकर आप संस्था की गतिविधियों, आगामी सेवा कार्यों और सहायता कार्यक्रमों की प्रत्यक्ष जानकारी प्राप्त कर सकते हैं।
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${foundationData.contact.phone}`}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold bg-brand-green-800 text-white hover:bg-brand-green-900 transition-colors shadow text-base"
                >
                  <Phone className="w-5 h-5 text-brand-gold-300" />
                  <span>कार्यालय फोन: {foundationData.contact.phoneFormatted}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden border-2 border-brand-gold-300 shadow-xl bg-stone-100">
                <img
                  src="/client-banner.jpg"
                  alt="लक्की अतुर्वा फाउंडेशन परानपुर मोड़ जसराना"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Image Modal Lightbox */}
      {activeImageModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveImageModal(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-96 bg-stone-900">
              <img
                src={activeImageModal.image}
                alt={activeImageModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveImageModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-serif font-bold text-brand-green-950">
                {activeImageModal.title}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {activeImageModal.desc}
              </p>
              <p className="text-xs text-stone-400 italic pt-2 border-t border-stone-100">
                {activeImageModal.notice}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

