import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import bgImage7 from '../assets/background/6 1.png';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'ru';

  const testimonials = [
    {
      id: 1,
      name: currentLang === 'ru' ? 'Кенджи М.' : currentLang === 'uz' ? 'Kenji M.' : 'Kenji M.',
      location: currentLang === 'ru' ? 'Токио, Япония' : currentLang === 'uz' ? 'Tokio, Yaponiya' : 'Tokyo, Japan',
      quote: currentLang === 'ru' 
        ? 'Невероятный опыт татуировки в моей жизни. Внимание к деталям и художественное видение превратили мою идею во что-то за пределами моего воображения.' 
        : currentLang === 'uz'
        ? 'Hayotimdagi eng ajoyib tattoo tajribasi. Diqqat-e\'tibor va san\'atkorona ko\'zga tashlanish fikrimni tasavvurimdan tashqari narsaga aylantirdi.'
        : 'The most incredible tattoo experience of my life. The attention to detail and the artistic vision transformed my idea into something beyond my imagination.',
      avatar: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=100&h=100&fit=crop',
      tattoo: currentLang === 'ru' ? 'Полный Рукав Дракон' : currentLang === 'uz' ? 'To\'liq Yeng Ajdarho' : 'Full Sleeve Dragon',
    },
    {
      id: 2,
      name: currentLang === 'ru' ? 'Сара К.' : currentLang === 'uz' ? 'Sara K.' : 'Sarah K.',
      location: currentLang === 'ru' ? 'Лос-Анджелес, США' : currentLang === 'uz' ? 'Los-Anjeles, AQSH' : 'Los Angeles, USA',
      quote: currentLang === 'ru' 
        ? 'Болезненно, но каждая секунда того стоила. Художник идеально понял мое видение и создал произведение, рассказывающее мою историю так, как я никогда не мог представить.' 
        : currentLang === 'uz'
        ? 'Og\'riqli, lekin har bir soniya arziguli. San\'atkor mening vizyonimni mukammal tushundi va tasavvurimda hech qachon bo\'lmagan tarzda hikoyamni aytuvchi asar yaratdi.'
        : 'Painful but worth every second. The artist understood my vision perfectly and created a piece that tells my story in ways I never imagined possible.',
      avatar: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=100&h=100&fit=crop',
      tattoo: currentLang === 'ru' ? 'Маска Онии на спине' : currentLang === 'uz' ? 'Orqa Oni niqobi' : 'Oni Mask Back Piece',
    },
    {
      id: 3,
      name: currentLang === 'ru' ? 'Маркус Р.' : currentLang === 'uz' ? 'Markus R.' : 'Marcus R.',
      location: currentLang === 'ru' ? 'Берлин, Германия' : currentLang === 'uz' ? 'Berlin, Germaniya' : 'Berlin, Germany',
      quote: currentLang === 'ru' 
        ? 'Настоящий мастер своего дела. Готические элементы, смешанные с японской традицией, создали что-то поистине уникальное. Я всегда буду дорожить этим произведением.' 
        : currentLang === 'uz'
        ? 'Haqiqiy usta. Gotika elementlari yapon an\'anasi bilan aralashib, haqiqatan ham noyob narsa yaratdi. Men buni doim qadrlayman.'
        : 'A true master of the craft. The gothic elements mixed with Japanese tradition created something truly unique. I will always treasure this piece.',
      avatar: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=100&h=100&fit=crop',
      tattoo: currentLang === 'ru' ? 'Готический блэкворк на груди' : currentLang === 'uz' ? 'Kasr gotika blackwork' : 'Gothic Blackwork Chest',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage7} 
          alt="Background" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pure-black/85 via-pure-black/60 to-pure-black/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-neon-red text-[0.75rem] tracking-[0.4em] mb-6 block font-serif uppercase">
            {t('testimonials.title')}
          </span>
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-soft-white mb-6" dangerouslySetInnerHTML={{ __html: t('testimonials.heading') }} />
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-neon-red to-transparent mx-auto" />
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-glass-strong border border-neon-red/20 p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                {/* Decorative Corners */}
                <div className="decorative-corner top-left" />
                <div className="decorative-corner top-right" />
                <div className="decorative-corner bottom-left" />
                <div className="decorative-corner bottom-right" />

                {/* Quote Icon */}
                <div className="absolute top-8 left-8 text-neon-red/20 text-7xl font-gothic">"</div>

                <div className="relative z-10">
                  {/* Quote */}
                  <p className="font-serif text-lg md:text-xl text-soft-white/90 leading-relaxed mb-8 text-center italic">
                    {testimonials[activeIndex].quote}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="relative">
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        loading="lazy"
                        className="w-16 h-16 rounded-full border border-neon-red/50 object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-gothic text-soft-white font-semibold text-lg">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-neon-red font-serif text-sm">{testimonials[activeIndex].location}</p>
                      <p className="text-soft-white/40 font-serif text-xs mt-1 italic">{testimonials[activeIndex].tattoo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center space-x-8 mt-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 border border-neon-red/30 flex items-center justify-center text-neon-red hover:bg-deep-red/20 hover:border-neon-red/60 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex ? 'w-8 h-[2px] bg-neon-red' : 'w-3 h-[2px] bg-neon-red/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 border border-neon-red/30 flex items-center justify-center text-neon-red hover:bg-deep-red/20 hover:border-neon-red/60 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;