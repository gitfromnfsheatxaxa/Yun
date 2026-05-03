import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import bgImage6 from '../assets/background/6 1.png';

const ArtistPhilosophy = () => {
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
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage6} 
          alt="Background" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pure-black/85 via-pure-black/60 to-pure-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Main Image */}
              <div className="absolute inset-0 bg-secondary-black overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop"
                  alt="Artist Portrait"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-red/50 via-transparent to-transparent" />
              </div>

              {/* Red Glow Frame */}
              <div className="absolute -inset-4 border border-neon-red/30" />
              <div className="absolute -inset-8 border border-neon-red/10" />

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border-t-2 border-l-2 border-neon-red/40" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b-2 border-r-2 border-neon-red/40" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <span className="text-neon-red text-[0.75rem] tracking-[0.4em] mb-6 block font-serif uppercase">
                {t('philosophy.title')}
              </span>
              <h2 className="font-gothic text-4xl md:text-5xl font-bold text-soft-white mb-6" dangerouslySetInnerHTML={{ __html: t('philosophy.heading') }} />
              <div className="w-32 h-[1px] bg-gradient-to-r from-neon-red to-transparent mb-8" />
            </div>

            <div className="space-y-6 text-soft-white/70 font-serif text-lg leading-relaxed">
              <p>
                {t('philosophy.intro1')}
              </p>
              <p>
                {t('philosophy.intro2')}
              </p>
              <motion.blockquote 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="border-l-2 border-neon-red pl-6 py-2"
              >
                <p className="text-neon-red font-gothic text-xl italic">
                  {t('philosophy.quote')}
                </p>
              </motion.blockquote>
            </div>

            {/* Philosophy Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8"
            >
              {[
                { icon: '◆', title: t('philosophy.points.symbolism.title'), desc: t('philosophy.points.symbolism.desc') },
                { icon: '◆', title: t('philosophy.points.craftsmanship.title'), desc: t('philosophy.points.craftsmanship.desc') },
                { icon: '◆', title: t('philosophy.points.tradition.title'), desc: t('philosophy.points.tradition.desc') },
                { icon: '◆', title: t('philosophy.points.uniqueness.title'), desc: t('philosophy.points.uniqueness.desc') },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <span className="text-neon-red text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-gothic text-soft-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-soft-white/50 font-serif text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistPhilosophy;