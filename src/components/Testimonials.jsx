import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Kenji M.',
    location: 'Tokyo, Japan',
    quote: 'The most incredible tattoo experience of my life. The attention to detail and the artistic vision transformed my idea into something beyond my imagination.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    tattoo: 'Full Sleeve Dragon',
  },
  {
    id: 2,
    name: 'Sarah K.',
    location: 'Los Angeles, USA',
    quote: 'Painful but worth every second. The artist understood my vision perfectly and created a piece that tells my story in ways I never imagined possible.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    tattoo: 'Oni Mask Back Piece',
  },
  {
    id: 3,
    name: 'Marcus R.',
    location: 'Berlin, Germany',
    quote: 'A true master of the craft. The gothic elements mixed with Japanese tradition created something truly unique. I will always treasure this piece.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    tattoo: 'Gothic Blackwork Chest',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 px-6 bg-pure-black overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pure-black via-secondary-black to-pure-black" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-deep-red rounded-full blur-[120px]" />
      </div>

      {/* Grain & Fog Overlays */}
      <div className="absolute inset-0 grain-overlay opacity-20" />
      <div className="absolute inset-0 gothic-fog" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-neon-red text-[0.75rem] tracking-[0.4em] mb-6 block font-serif uppercase">
            Testimonials
          </span>
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-soft-white mb-6">
            Words from <span className="text-gradient-crimson">The Marked</span>
          </h2>
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
              <div className="bg-glass-strong border border-neon-red/20 p-8 md:p-12 relative overflow-hidden">
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
                        className="w-16 h-16 rounded-full border border-neon-red/50 object-cover"
                      />
                      <div className="absolute inset-0 rounded-full border border-neon-red/30 animate-pulse-slow" />
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
            className="w-12 h-12 border border-neon-red/30 flex items-center justify-center text-neon-red hover:bg-deep-red/20 hover:border-neon-red/60 transition-all duration-500"
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
                className={`transition-all duration-500 ${
                  index === activeIndex ? 'w-8 h-[2px] bg-neon-red' : 'w-3 h-[2px] bg-neon-red/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 border border-neon-red/30 flex items-center justify-center text-neon-red hover:bg-deep-red/20 hover:border-neon-red/60 transition-all duration-500"
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