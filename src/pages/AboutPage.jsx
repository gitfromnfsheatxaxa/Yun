import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import bgImage1 from '../assets/background/1 1.png';

const AboutPage = () => {
  const { t } = useTranslation();

  const timeline = [
    { year: '2015', title: t('about.journey.timeline.0.title'), desc: t('about.journey.timeline.0.desc') },
    { year: '2017', title: t('about.journey.timeline.1.title'), desc: t('about.journey.timeline.1.desc') },
    { year: '2019', title: t('about.journey.timeline.2.title'), desc: t('about.journey.timeline.2.desc') },
    { year: '2021', title: t('about.journey.timeline.3.title'), desc: t('about.journey.timeline.3.desc') },
    { year: '2024', title: t('about.journey.timeline.4.title'), desc: t('about.journey.timeline.4.desc') },
  ];

  const specialties = [
    { icon: '🐉', title: t('about.specialties.items.0.title'), desc: t('about.specialties.items.0.desc') },
    { icon: '🎭', title: t('about.specialties.items.1.title'), desc: t('about.specialties.items.1.desc') },
    { icon: '⚔️', title: t('about.specialties.items.2.title'), desc: t('about.specialties.items.2.desc') },
    { icon: '🌸', title: t('about.specialties.items.3.title'), desc: t('about.specialties.items.3.desc') },
    { icon: '⚫', title: t('about.specialties.items.4.title'), desc: t('about.specialties.items.4.desc') },
    { icon: '🏯', title: t('about.specialties.items.5.title'), desc: t('about.specialties.items.5.desc') },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-image-wrapper">
          <img 
            src={bgImage1} 
            alt="Background" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-image-overlay" />
      </div>

      {/* Atmospheric Effects - Reduced for performance */}
      <div className="fixed inset-0 pointer-events-none z-1">
        <div className="grain-overlay" />
        <div className="red-ambient" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blood-red text-sm tracking-widest mb-4 block">{t('about.hero.title')}</span>
            <h1 className="font-gothic text-5xl md:text-7xl font-bold text-soft-white mb-6" dangerouslySetInnerHTML={{ __html: t('about.hero.heading') }} />
            <div className="w-24 h-0.5 bg-gradient-to-r from-blood-red to-neon-crimson mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16"
          >
            {/* Portrait */}
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-dark-charcoal overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop"
                    alt="Artist Portrait"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blood-red/40 to-transparent" />
                </div>
                <div className="absolute -inset-4 border-2 border-blood-red/30" />
                <div className="absolute -inset-8 border border-neon-crimson/20" />
              </div>
            </div>

            {/* Story */}
            <div className="text-left space-y-6">
              <p className="text-soft-white/80 font-body text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.hero.bio1', { name: t('about.hero.name') }) }} />
              <p className="text-soft-white/80 font-body text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.hero.bio2') }} />
              <p className="text-soft-white/80 font-body text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.hero.bio3') }} />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '10+', label: t('about.hero.stats.years') },
                  { number: '500+', label: t('about.hero.stats.tattoos') },
                  { number: '15', label: t('about.hero.stats.countries') },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-gothic text-3xl font-bold text-neon-crimson">{stat.number}</div>
                    <div className="text-soft-white/50 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blood-red text-sm tracking-widest mb-4 block">{t('about.journey.title')}</span>
            <h2 className="font-gothic text-4xl md:text-5xl font-bold text-soft-white mb-4" dangerouslySetInnerHTML={{ __html: t('about.journey.heading') }} />
            <div className="w-24 h-0.5 bg-gradient-to-r from-blood-red to-neon-crimson mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blood-red via-neon-crimson to-blood-red opacity-30" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-dark-charcoal/80 border border-blood-red/20 p-6 relative backdrop-blur-sm">
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-neon-crimson rounded-full" 
                         style={{ [index % 2 === 0 ? 'right' : 'left']: '-28px' }} />
                    <span className="text-blood-red font-gothic text-2xl font-bold">{item.year}</span>
                    <h3 className="font-gothic text-xl font-semibold text-soft-white mt-2">{item.title}</h3>
                    <p className="text-soft-white/60 font-body text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blood-red text-sm tracking-widest mb-4 block">{t('about.specialties.title')}</span>
            <h2 className="font-gothic text-4xl md:text-5xl font-bold text-soft-white mb-4">
              {t('about.specialties.heading')}
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blood-red to-neon-crimson mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-charcoal/80 border border-blood-red/20 p-8 text-center hover:border-neon-crimson/50 transition-colors duration-300 group backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="font-gothic text-xl font-semibold text-soft-white mb-2 group-hover:text-neon-crimson transition-colors">
                  {specialty.title}
                </h3>
                <p className="text-soft-white/60 font-body text-sm">{specialty.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-blood-red/30 font-gothic mb-6">"</div>
            <blockquote className="font-gothic text-2xl md:text-4xl text-soft-white leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('about.quote') }} />
            <cite className="text-blood-red font-body tracking-widest not-italic">— {t('about.hero.name')}, Dragon Ink</cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;