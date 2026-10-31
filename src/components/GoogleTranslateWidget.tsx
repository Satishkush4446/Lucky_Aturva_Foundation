import React, { useEffect, useState, useCallback } from 'react';
import { Globe, Check } from 'lucide-react';

interface GoogleTranslateWidgetProps {
  compact?: boolean;
  variant?: 'dark' | 'light';
  showLabel?: boolean;
}

export const GoogleTranslateWidget: React.FC<GoogleTranslateWidgetProps> = ({
  compact = false,
  variant = 'dark',
  showLabel = false,
}) => {
  const [currentLang, setCurrentLang] = useState<'hi' | 'en'>('hi');
  const [isTranslating, setIsTranslating] = useState(false);

  // Helper to parse the current language from cookie or document
  const detectLanguage = useCallback((): 'hi' | 'en' => {
    if (typeof document === 'undefined') return 'hi';
    
    // 1. Check googtrans cookie
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === 'googtrans' && value) {
        const decoded = decodeURIComponent(value);
        if (decoded.endsWith('/en')) return 'en';
        if (decoded.endsWith('/hi')) return 'hi';
      }
    }

    // 2. Check HTML classes/attributes set by Google Translate
    if (
      document.documentElement.classList.contains('translated-ltr') ||
      document.documentElement.lang === 'en'
    ) {
      return 'en';
    }

    return 'hi';
  }, []);

  // Initialize and listen for changes
  useEffect(() => {
    setCurrentLang(detectLanguage());

    const handleCustomLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: 'hi' | 'en' }>;
      if (customEvent.detail?.lang) {
        setCurrentLang(customEvent.detail.lang);
      } else {
        setCurrentLang(detectLanguage());
      }
    };

    window.addEventListener('app-language-changed', handleCustomLangChange);
    return () => {
      window.removeEventListener('app-language-changed', handleCustomLangChange);
    };
  }, [detectLanguage]);

  // Set translation to English or back to Hindi
  const handleSelectLanguage = (targetLang: 'hi' | 'en') => {
    if (targetLang === currentLang && !isTranslating) return;

    setIsTranslating(true);
    const hostname = window.location.hostname;

    if (targetLang === 'en') {
      // Set cookie for English
      document.cookie = 'googtrans=/hi/en; path=/;';
      if (hostname) {
        document.cookie = `googtrans=/hi/en; path=/; domain=${hostname};`;
        const parts = hostname.split('.');
        if (parts.length > 2) {
          document.cookie = `googtrans=/hi/en; path=/; domain=.${parts.slice(-2).join('.')};`;
        }
      }

      // Try instant change via Google Translate combo box if present
      const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (combo) {
        combo.value = 'en';
        combo.dispatchEvent(new Event('change'));
        setCurrentLang('en');
        setIsTranslating(false);
        window.dispatchEvent(
          new CustomEvent('app-language-changed', { detail: { lang: 'en' } })
        );
      } else {
        // Fallback reload to activate translation
        window.location.reload();
      }
    } else {
      // Revert to Hindi (Original)
      const expire = 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      document.cookie = `googtrans=; ${expire} path=/;`;
      document.cookie = `googtrans=/hi/hi; path=/;`;
      if (hostname) {
        document.cookie = `googtrans=; ${expire} path=/; domain=${hostname};`;
        document.cookie = `googtrans=/hi/hi; path=/; domain=${hostname};`;
        const parts = hostname.split('.');
        if (parts.length > 2) {
          document.cookie = `googtrans=; ${expire} path=/; domain=.${parts.slice(-2).join('.')};`;
          document.cookie = `googtrans=/hi/hi; path=/; domain=.${parts.slice(-2).join('.')};`;
        }
      }

      // Reload smoothly to restore original Devanagari text
      window.location.reload();
    }
  };

  const isDark = variant === 'dark';

  return (
    <div 
      className="inline-flex items-center gap-1.5 select-none notranslate" 
      translate="no"
      role="group" 
      aria-label="भाषा चुनें / Language Selector"
    >
      {showLabel && (
        <span
          className={`text-xs font-semibold flex items-center gap-1 notranslate ${
            isDark ? 'text-white/80' : 'text-brand-green-800'
          }`}
          translate="no"
        >
          <Globe className="w-3.5 h-3.5 text-brand-gold-500" />
          <span>भाषा / Lang:</span>
        </span>
      )}

      {/* Two-Language Toggle Container (Strictly Hindi & English) */}
      <div
        className={`inline-flex items-center p-0.5 rounded-full transition-all notranslate ${
          isDark
            ? 'bg-black/25 border border-white/15 shadow-inner'
            : 'bg-stone-100 border border-stone-200/80 shadow-sm'
        }`}
        translate="no"
      >
        <Globe
          className={`w-3 h-3 ml-1.5 mr-0.5 shrink-0 ${
            isDark ? 'text-brand-gold-400' : 'text-brand-green-700'
          }`}
          aria-hidden="true"
        />

        {/* Hindi (Original) Option */}
        <button
          type="button"
          onClick={() => handleSelectLanguage('hi')}
          disabled={isTranslating}
          translate="no"
          className={`relative inline-flex items-center gap-1 font-semibold rounded-full transition-all notranslate ${
            compact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
          } ${
            currentLang === 'hi'
              ? isDark
                ? 'bg-brand-gold-500 text-stone-900 shadow-sm font-bold'
                : 'bg-brand-green-700 text-white shadow-sm font-bold'
              : isDark
              ? 'text-white/80 hover:text-white hover:bg-white/10'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
          }`}
          title="मूल हिंदी में देखें (Original Hindi)"
          aria-pressed={currentLang === 'hi'}
        >
          {currentLang === 'hi' && <Check className="w-2.5 h-2.5 stroke-[3]" />}
          <span translate="no" className="notranslate">हिंदी</span>
        </button>

        {/* English Option */}
        <button
          type="button"
          onClick={() => handleSelectLanguage('en')}
          disabled={isTranslating}
          translate="no"
          className={`relative inline-flex items-center gap-1 font-semibold rounded-full transition-all notranslate ${
            compact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
          } ${
            currentLang === 'en'
              ? isDark
                ? 'bg-brand-gold-500 text-stone-900 shadow-sm font-bold'
                : 'bg-brand-green-700 text-white shadow-sm font-bold'
              : isDark
              ? 'text-white/80 hover:text-white hover:bg-white/10'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
          }`}
          title="Translate website into English"
          aria-pressed={currentLang === 'en'}
        >
          {currentLang === 'en' && <Check className="w-2.5 h-2.5 stroke-[3]" />}
          <span translate="no" className="notranslate">English</span>
        </button>
      </div>
    </div>
  );
};
