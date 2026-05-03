import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguageRouter } from '../i18n/useLanguageRouter';

// Assets
import bgImage2 from '../assets/background/10 1.png';
import borderImage from '../assets/decor/border.png';

const WorksPage = () => {
  const { t } = useTranslation();
  const { langNavigate } = useLanguageRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      id: 1,
      title: 'Crimson Dragon',
      category: 'dragon',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Full back piece featuring traditional Japanese dragon',
    },
    {
      id: 2,
      title: 'Oni Demon Mask',
      category: 'japanese',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Chest piece with fierce oni mask design',
    },
    {
      id: 3,
      title: 'Gothic Cathedral',
      category: 'gothic',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Arm sleeve with cathedral architecture',
    },
    {
      id: 4,
      title: 'Full Sleeve Masterpiece',
      category: 'fullSleeve',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Complete sleeve combining dragon and samurai',
    },
    {
      id: 5,
      title: 'Koi Fish Flow',
      category: 'japanese',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Leg piece with flowing koi fish',
    },
    {
      id: 6,
      title: 'Sacred Geometry',
      category: 'symbols',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Geometric patterns with symbolic meaning',
    },
    {
      id: 7,
      title: 'Phoenix Rising',
      category: 'dragon',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Back piece with phoenix and dragon clash',
    },
    {
      id: 8,
      title: 'Samurai Warrior',
      category: 'japanese',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Chest piece honoring bushido code',
    },
    {
      id: 9,
      title: 'Skull Gothic',
      category: 'gothic',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Shoulder piece with ornate skull design',
    },
    {
      id: 10,
      title: 'Tribal Symbols',
      category: 'symbols',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Forearm band with ancient symbols',
    },
    {
      id: 11,
      title: 'Custom Portrait',
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Realistic portrait with gothic elements',
    },
    {
      id: 12,
      title: 'Geometric Blackwork',
      category: 'blackwork',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop',
      description: 'Abstract geometric patterns',
    },
  ];

  const categories = [
    { id: 'all', label: t('works.categories.all') },
    { id: 'dragon', label: t('works.categories.dragon') },
    { id: 'japanese', label: t('works.categories.japanese') },
    { id: 'gothic', label: t('works.categories.gothic') },
    { id: 'blackwork', label: t('works.categories.blackwork') },
    { id: 'symbols', label: t('works.categories.symbols') },
    { id: 'fullSleeve', label: t('works.categories.fullSleeve') },
    { id: 'custom', label: t('works.categories.custom') },
  ];

  const filteredWorks = activeCategory === 'all'
    ? works
    : works.filter(work => work.category === activeCategory);

  const getCategoryLabel = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.label : categoryId;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-pure-black">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <img src={bgImage2} alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-pure-black via-transparent to-pure-black" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-gothic text-5xl md:text-7xl font-bold text-soft-white mb-6 uppercase tracking-tighter">
              {t('works.hero.heading')}
            </h1>
            <div className="w-24 h-px bg-blood-red mx-auto mb-8" />
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 font-gothic text-[10px] tracking-[0.2em] transition-all border ${activeCategory === category.id
                  ? 'bg-blood-red border-blood-red text-white'
                  : 'bg-transparent text-soft-white/40 border-white/10 hover:border-blood-red/50 hover:text-soft-white'
                }`}
            >
              {category.label.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
              {filteredWorks.map((work) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group relative aspect-[3/4] bg-pure-black cursor-pointer overflow-hidden p-16"
                  onClick={() => setSelectedWork(work)}
                >
                  {/* 1. The Decorative Frame Overlay (Parent Border) */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      backgroundImage: `url(${borderImage})`,
                      backgroundSize: '100% 100%',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />

                  {/* 2. Image Layer (Child - smaller, fits inside border) */}
                  <div className="absolute inset-0 m-16 z-20">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>

                  {/* 3. Shadow/Vignette inside the frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pure-black/90 via-transparent to-transparent z-15 pointer-events-none" />

                  {/* 4. Text Content */}
                  <div className="absolute inset-0 flex flex-col justify-end z-40">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-blood-red text-[9px] tracking-[0.3em] font-bold block mb-1">
                        {getCategoryLabel(work.category).toUpperCase()}
                      </span>
                      <h3 className="font-gothic text-lg text-soft-white uppercase tracking-wider">
                        {work.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Simplified Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-pure-black/95 backdrop-blur-md"
            onClick={() => setSelectedWork(null)}
          >
            <div
              className="relative max-w-4xl w-full flex flex-col md:flex-row bg-dark-charcoal border border-white/5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 text-soft-white/50 hover:text-white z-10"
              >
                ✕
              </button>
              <div className="md:w-1/2">
                <img src={selectedWork.image} className="w-full h-full object-cover" alt={selectedWork.title} />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="font-gothic text-3xl text-soft-white mb-4 uppercase">{selectedWork.title}</h2>
                <p className="text-soft-white/60 mb-8">{selectedWork.description}</p>
                <button className="py-3 border border-blood-red text-blood-red hover:bg-blood-red hover:text-white transition-all uppercase text-xs tracking-widest">
                  Inquire Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorksPage;