import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import bgImage5 from '../assets/background/5 1.png';

const FeaturedWorks = () => {
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

  const featuredWorks = [
    {
      id: 1,
      title: 'Crimson Dragon',
      category: t('featuredWorks.categories.dragon'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
    },
    {
      id: 2,
      title: 'Oni Mask',
      category: t('featuredWorks.categories.japanese'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
    },
    {
      id: 3,
      title: 'Gothic Rose',
      category: t('featuredWorks.categories.gothic'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
    },
    {
      id: 4,
      title: 'Sleeve Masterpiece',
      category: t('featuredWorks.categories.fullSleeve'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
    },
    {
      id: 5,
      title: 'Koi Fish',
      category: t('featuredWorks.categories.japanese'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
    },
    {
      id: 6,
      title: 'Blackwork Symbol',
      category: t('featuredWorks.categories.blackwork'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage5} 
          alt="Background" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pure-black/85 via-pure-black/60 to-pure-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-gothic text-4xl md:text-6xl font-bold text-soft-white mb-2" dangerouslySetInnerHTML={{ __html: t('featuredWorks.title') }} />
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-neon-red to-transparent mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {featuredWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="group relative overflow-hidden bg-secondary-black aspect-[3/4]"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-pure-black/50 to-transparent" />
              </div>

              {/* Red Glow Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-red transition-colors duration-300 pointer-events-none" />

              {/* Decorative Corners */}
              <div className="decorative-corner top-left" />
              <div className="decorative-corner top-right" />
              <div className="decorative-corner bottom-left" />
              <div className="decorative-corner bottom-right" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <span className="text-neon-red text-[0.65rem] tracking-[0.3em] mb-3 block font-serif uppercase">
                    {work.category}
                  </span>
                  <h3 className="font-gothic text-xl font-bold text-soft-white mb-2">
                    {work.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-neon-red to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => langNavigate('/works')}
            className="btn-secondary inline-flex items-center space-x-4"
          >
            <span>{t('featuredWorks.exploreFull')}</span>
            <svg
              className="w-5 h-5 text-neon-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorks;