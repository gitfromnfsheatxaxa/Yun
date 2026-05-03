import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import bgImage1 from '../assets/background/image.png';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

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

  const langNavigate = (path) => {
    navigate(`/${currentLang}${path}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage1} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pure-black/90 via-pure-black/70 to-pure-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Japanese Characters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-neon-red text-2xl mb-8 tracking-[0.5em] font-serif italic"
        >
          {t('hero.japaneseChars')}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-text text-soft-white mb-6"
        >
          <span className="block">{t('hero.title.first')}</span>
          <span className="block text-glow bg-gradient-to-r from-soft-white via-neon-red to-deep-red bg-clip-text text-transparent">
            {t('hero.title.second')}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="hero-text-subtitle text-soft-white/70 mb-12 max-w-2xl mx-auto"
        >
          {t('hero.subtitle')}
          <br />
          <span className="text-neon-red italic">{t('hero.tagline')}</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => langNavigate('/works')}
            className="btn-primary group"
          >
            <span>{t('hero.cta.viewWorks')}</span>
          </button>

          <button
            onClick={() => langNavigate('/contact')}
            className="btn-secondary group"
          >
            <span>{t('hero.cta.bookSession')}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;