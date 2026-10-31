import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, HeartHandshake } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="पृष्ठ नहीं मिला (Page Not Found - 404)"
        description="लक्की अतुर्वा फाउंडेशन - अनुरोधित पृष्ठ उपलब्ध नहीं है।"
      />

      <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F5EF]">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-soft border border-stone-200">
          <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold-50 flex items-center justify-center text-brand-gold-600 border border-brand-gold-200">
            <HeartHandshake className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-serif font-bold text-brand-green-950">404</h1>
            <h2 className="text-xl font-bold text-stone-800">पृष्ठ नहीं मिला (Page Not Found)</h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              आप जिस पृष्ठ की तलाश कर रहे हैं, वह शायद स्थानांतरित कर दिया गया है या उपलब्ध नहीं है।
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold bg-brand-green-800 text-white hover:bg-brand-green-900 transition-colors text-xs"
            >
              <Home className="w-4 h-4" />
              <span>मुख्य पृष्ठ पर लौटें</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>हमारी सेवाएँ देखें</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

