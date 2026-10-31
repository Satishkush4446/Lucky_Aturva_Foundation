import React, { useState } from 'react';
import { X, Heart, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { foundationData } from '../data/foundationData';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interestArea, setInterestArea] = useState('सामुदायिक सेवा');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*लक्की अतुर्वा फाउंडेशन - स्वयंसेवक पंजीकरण (Volunteer Interest)*\n\n*नाम:* ${name || 'इच्छुक स्वयंसेवक'}\n*मोबाइल:* ${phone}\n*सेवा का क्षेत्र:* ${interestArea}\n*संदेश:* ${message || 'मैं फाउंडेशन के सामाजिक सेवा कार्यों में अपना योगदान देना चाहता/चाहती हूँ।'}\n\n(यह संदेश वेबसाइट से प्रेषित किया गया है)`;
    
    const waUrl = `https://wa.me/${foundationData.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-brand-gold-300">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-green-800 to-brand-green-900 text-white p-6 flex items-center justify-between border-b-2 border-brand-gold-500">
          <div className="flex items-center gap-3">
            <Heart className="w-7 h-7 text-brand-gold-400 fill-brand-gold-400 shrink-0" />
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wide">
                स्वयंसेवक बनें (Join as Volunteer)
              </h3>
              <p className="text-[14px] sm:text-[15px] text-brand-gold-200 mt-0.5 leading-snug">
                मानवता एवं समाज की सेवा में अपना समय और कौशल समर्पित करें
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="बंद करें"
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors ml-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
          <div className="p-4 bg-brand-gold-50 border border-brand-gold-300 rounded-xl space-y-1.5">
            <p className="font-bold text-brand-green-900 text-[15px] sm:text-[16px] leading-[1.7]">
              "अपने लिए तो सब जीते हैं, किसी और के लिए जी कर तो देखो..."
            </p>
            <p className="text-[13.5px] sm:text-[14px] text-stone-700 leading-normal">
              यह फॉर्म सीधे अध्यक्ष श्री लोधी देवेंद्र सिंह जी के व्हाट्सएप पर आपका विवरण तैयार करेगा।
            </p>
          </div>

          <div>
            <label className="block text-[15px] sm:text-[16px] font-semibold text-stone-800 mb-1.5">
              आपका पूरा नाम (Full Name) *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="उदा. राहुल शर्मा"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-[16px] text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-brand-gold-500"
            />
          </div>

          <div>
            <label className="block text-[15px] sm:text-[16px] font-semibold text-stone-800 mb-1.5">
              मोबाइल नंबर (Mobile Number) *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10 अंकों का मोबाइल नंबर"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-[16px] text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-brand-gold-500"
            />
          </div>

          <div>
            <label className="block text-[15px] sm:text-[16px] font-semibold text-stone-800 mb-1.5">
              आप किस क्षेत्र में सेवा देना चाहते हैं?
            </label>
            <select
              value={interestArea}
              onChange={(e) => setInterestArea(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-[16px] text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-gold-500 bg-white"
            >
              <option value="सामुदायिक एवं सामाजिक सेवा">सामुदायिक एवं सामाजिक सेवा</option>
              <option value="गौ सेवा एवं संरक्षण">गौ सेवा एवं संरक्षण</option>
              <option value="एम्बुलेंस एवं आपातकालीन सहायता">एम्बुलेंस एवं आपातकालीन सहायता</option>
              <option value="बुजुर्ग एवं विधवा पेंशन मार्गदर्शन">बुजुर्ग एवं विधवा पेंशन मार्गदर्शन</option>
              <option value="धार्मिक एवं सांस्कृतिक कार्यक्रम">धार्मिक एवं सांस्कृतिक कार्यक्रम</option>
              <option value="चिकित्सा एवं रक्तदान सहायता">चिकित्सा एवं रक्तदान सहायता</option>
            </select>
          </div>

          <div>
            <label className="block text-[15px] sm:text-[16px] font-semibold text-stone-800 mb-1.5">
              कोई विशेष संदेश या अनुभव (वैकल्पिक)
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="आप कितने घंटे या किस दिन सेवा दे सकते हैं..."
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-[16px] text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-gold-500 leading-relaxed"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl text-[15px] sm:text-[16px] font-semibold text-stone-600 hover:bg-stone-100 transition-colors"
            >
              रद्द करें
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-[16px] font-bold bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp पर भेजें</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

