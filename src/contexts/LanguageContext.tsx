import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationKeys } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('carenav-language');
    if (saved && ['en', 'zh-TW', 'zh-CN'].includes(saved)) {
      return saved as Language;
    }
    // Detect browser language
    const browserLang = navigator.language;
    if (browserLang.startsWith('zh-TW') || browserLang === 'zh-HK') {
      return 'zh-TW';
    }
    if (browserLang.startsWith('zh')) {
      return 'zh-CN';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('carenav-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
