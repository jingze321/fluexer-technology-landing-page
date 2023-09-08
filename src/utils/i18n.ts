// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslation from './../../public/locales/en/common.json';
import cnTranslation from './../../public/locales/cn/common.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  cn: {
    translation: cnTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
