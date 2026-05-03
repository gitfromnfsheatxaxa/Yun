import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, defaultLanguage } from './config';

export const useLanguageRouter = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { i18n } = useTranslation();

  // Extract language from URL or use default
  const currentLang = params.lang || defaultLanguage;

  // Update i18n language when route changes
  useEffect(() => {
    if (supportedLanguages.includes(currentLang)) {
      if (i18n.language !== currentLang) {
        i18n.changeLanguage(currentLang);
      }
    }
  }, [currentLang, i18n]);

  // Create a path helper that preserves language
  const langPath = (path) => {
    return `/${currentLang}${path}`;
  };

  // Navigate with current language preserved
  const langNavigate = (path, options) => {
    navigate(langPath(path), options);
  };

  return {
    lang: currentLang,
    langPath,
    langNavigate,
    isDefaultLang: currentLang === defaultLanguage,
  };
};

// Helper function to get language from pathname
export const getLangFromPathname = (pathname) => {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (supportedLanguages.includes(firstSegment)) {
    return firstSegment;
  }
  return defaultLanguage;
};

// Helper function to strip language from pathname for route matching
export const stripLangFromPathname = (pathname, lang) => {
  const pattern = new RegExp(`^/${lang}`);
  return pathname.replace(pattern, '') || '/';
};

// Helper function to create route paths
export const createRoutePath = (lang, path) => {
  return `/${lang}${path}`;
};