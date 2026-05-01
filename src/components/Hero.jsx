import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const Hero = () => {
  // Generate deterministic particle positions
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: ((i * 37) % 100),
      top: ((i * 53) % 100),
      size: (i % 3) + 1,
      duration: 8 + (i % 7),
      delay: (i % 15) * 0.3,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Atmospheric Background Layers */}
      <div className="absolute inset-0 bg-pure-black" />
      
      {/* Deep Red Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-red/10 via-transparent to-pure-black" />
      
      {/* Animated Dragon Silhouette */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1440 800" className="w-full h-full">
          <defs>
            <linearGradient id="dragonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B0000" />
              <stop offset="50%" stopColor="#3B0000" />
              <stop offset="100%" stopColor="#8B0000" />
            </linearGradient>
          </defs>
          <motion.path
            d="M100,400 Q250,150 400,350 Q550,550 720,450 Q890,350 1050,500 Q1200,650 1350,400"
            fill="none"
            stroke="url(#dragonGrad)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 4, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: particle.size,
              height: particle.size,
              background: particle.size > 2 ? 'rgba(139, 0, 0, 0.6)' : 'rgba(237, 237, 237, 0.4)',
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Red Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-deep-red/30 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-neon-red/20 rounded-full blur-[80px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-neon-red text-[0.65rem] tracking-[0.3em] mb-3 font-serif uppercase">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-neon-red to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Vertical Japanese Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <span className="vertical-text text-neon-red/40 text-sm tracking-[0.3em] font-serif">
          永遠のインク
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <span className="vertical-text text-neon-red/40 text-sm tracking-[0.3em] font-serif">
          芸術の痛み
        </span>
      </motion.div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-neon-red/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-neon-red/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-neon-red/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-neon-red/20" />
    </section>
  );
};

export default Hero;