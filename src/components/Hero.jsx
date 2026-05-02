import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgImage1 from '../assets/background/1 1.png';

const Hero = () => {
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
          龍の墨
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-text text-soft-white mb-6"
        >
          <span className="block">The Art of</span>
          <span className="block text-glow bg-gradient-to-r from-soft-white via-neon-red to-deep-red bg-clip-text text-transparent">
            Eternal Ink
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="hero-text-subtitle text-soft-white/70 mb-12 max-w-2xl mx-auto"
        >
          Custom tattoos inspired by dragons, mythology, and darkness.
          <br />
          <span className="text-neon-red italic">Where pain becomes art.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/works"
            className="btn-primary group"
          >
            <span>VIEW WORKS</span>
          </Link>

          <Link
            to="/contact"
            className="btn-secondary group"
          >
            <span>BOOK SESSION</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;