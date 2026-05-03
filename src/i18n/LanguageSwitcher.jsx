import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [
    { code: 'ru', label: 'RU', name: 'Русский' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'uz', label: 'UZ', name: 'Oʻzbek' },
  ];

  // Get current language from pathname
  const getCurrentLang = () => {
    const segments = location.pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    const supportedLangs = ['ru', 'en', 'uz'];
    if (supportedLangs.includes(firstSegment)) {
      return firstSegment;
    }
    return 'ru';
  };

  const currentLang = getCurrentLang();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
    // Get the current path without language prefix
    const pathSegments = location.pathname.split('/').filter(Boolean);
    let pathWithoutLang = pathSegments.slice(1).join('/');
    
    // If no path after language, just use the language root
    if (!pathWithoutLang) {
      navigate(`/${lng}/`);
    } else {
      navigate(`/${lng}/${pathWithoutLang}`);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => changeLanguage(language.code)}
          className={`px-3 py-1.5 text-xs font-gothic tracking-wider transition-all duration-300 border ${
            currentLang === language.code
              ? 'bg-neon-red border-neon-red text-white shadow-[0_0_10px_rgba(255,0,0,0.5)]'
              : 'bg-transparent border-neon-red/30 text-soft-white/60 hover:border-neon-red/60 hover:text-neon-red'
          }`}
          aria-label={`Switch to ${language.name}`}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;