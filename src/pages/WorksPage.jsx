import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguageRouter } from '../i18n/useLanguageRouter';
import bgImage2 from '../assets/background/10 1.png';

const WorksPage = () => {
  const { t } = useTranslation();
  const { langNavigate } = useLanguageRouter();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      id: 1,
      title: 'Crimson Dragon',
      category: t('works.categories.dragon'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Full back piece featuring traditional Japanese dragon',
    },
    {
      id: 2,
      title: 'Oni Demon Mask',
      category: t('works.categories.japanese'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Chest piece with fierce oni mask design',
    },
    {
      id: 3,
      title: 'Gothic Cathedral',
      category: t('works.categories.gothic'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Arm sleeve with cathedral architecture',
    },
    {
      id: 4,
      title: 'Full Sleeve Masterpiece',
      category: t('works.categories.fullSleeve'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Complete sleeve combining dragon and samurai',
    },
    {
      id: 5,
      title: 'Koi Fish Flow',
      category: t('works.categories.japanese'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Leg piece with flowing koi fish',
    },
    {
      id: 6,
      title: 'Sacred Geometry',
      category: t('works.categories.symbols'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Geometric patterns with symbolic meaning',
    },
    {
      id: 7,
      title: 'Phoenix Rising',
      category: t('works.categories.dragon'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Back piece with phoenix and dragon clash',
    },
    {
      id: 8,
      title: 'Samurai Warrior',
      category: t('works.categories.japanese'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Chest piece honoring bushido code',
    },
    {
      id: 9,
      title: 'Skull Gothic',
      category: t('works.categories.gothic'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Shoulder piece with ornate skull design',
    },
    {
      id: 10,
      title: 'Tribal Symbols',
      category: t('works.categories.symbols'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Forearm band with ancient symbols',
    },
    {
      id: 11,
      title: 'Custom Portrait',
      category: t('works.categories.custom'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Realistic portrait with gothic elements',
    },
    {
      id: 12,
      title: 'Geometric Blackwork',
      category: t('works.categories.blackwork'),
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Abstract geometric patterns',
    },
  ];

  const categories = [
    t('works.categories.all'),
    t('works.categories.dragon'),
    t('works.categories.japanese'),
    t('works.categories.gothic'),
    t('works.categories.blackwork'),
    t('works.categories.symbols'),
    t('works.categories.fullSleeve'),
    t('works.categories.custom'),
  ];

  const filteredWorks = activeCategory === t('works.categories.all') 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-image-wrapper">
          <img 
            src={bgImage2} 
            alt="Background" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-image-overlay" />
      </div>

      {/* Atmospheric Effects */}
      <div className="fixed inset-0 pointer-events-none z-1">
        <div className="grain-overlay" />
        <div className="red-ambient" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blood-red text-sm tracking-widest mb-4 block">{t('works.hero.title')}</span>
            <h1 className="font-gothic text-5xl md:text-7xl font-bold text-soft-white mb-6" dangerouslySetInnerHTML={{ __html: t('works.hero.heading') }} />
            <div className="w-24 h-0.5 bg-gradient-to-r from-blood-red to-neon-crimson mx-auto mb-8" />
            <p className="text-soft-white/60 font-body max-w-2xl mx-auto">
              {t('works.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-gothic text-sm tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blood-red to-neon-crimson text-white'
                    : 'bg-dark-charcoal/80 backdrop-blur-sm text-soft-white/60 border border-blood-red/20 hover:border-neon-crimson/50 hover:text-neon-crimson'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <AnimatePresence mode='popLayout'>
              {filteredWorks.map((work) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[3/4] overflow-hidden bg-dark-charcoal cursor-pointer"
                  onClick={() => setSelectedWork(work)}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={work.image}
                      alt={work.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Red Glow Border on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-crimson transition-colors duration-300 pointer-events-none" />
                  <div className="absolute inset-0 shadow-neon-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <span className="text-blood-red text-xs tracking-widest mb-2 block">
                        {work.category.toUpperCase()}
                      </span>
                      <h3 className="font-gothic text-lg font-bold text-soft-white mb-1">
                        {work.title}
                      </h3>
                      <p className="text-soft-white/50 text-xs line-clamp-1">{work.description}</p>
                    </motion.div>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-pure-black/80 border border-blood-red/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-neon-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredWorks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-soft-white/40 font-body text-lg">No works found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-pure-black/95 backdrop-blur-sm"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-soft-white hover:text-neon-crimson transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="aspect-[4/3] bg-dark-charcoal">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-8 bg-dark-charcoal/50 border-t border-blood-red/20 backdrop-blur-sm">
                <span className="text-blood-red text-xs tracking-widest mb-2 block">
                  {selectedWork.category.toUpperCase()}
                </span>
                <h2 className="font-gothic text-3xl font-bold text-soft-white mb-4">
                  {selectedWork.title}
                </h2>
                <p className="text-soft-white/60 font-body leading-relaxed">
                  {selectedWork.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-gothic text-3xl md:text-4xl font-bold text-soft-white mb-6" dangerouslySetInnerHTML={{ __html: t('works.cta.heading') }} />
            <p className="text-soft-white/60 font-body mb-8 max-w-xl mx-auto">
              {t('works.cta.subtitle')}
            </p>
            <button
              onClick={() => langNavigate('/contact')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blood-red to-neon-crimson text-soft-white font-gothic tracking-widest hover:shadow-neon-red-strong transition-all duration-300"
            >
              <span>{t('works.cta.button')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorksPage;