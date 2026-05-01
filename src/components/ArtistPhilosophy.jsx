import { motion } from 'framer-motion';

const ArtistPhilosophy = () => {
  return (
    <section className="relative py-32 px-6 bg-pure-black overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pure-black via-secondary-black to-pure-black" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-deep-red rounded-full blur-[120px]" />
      </div>

      {/* Grain & Fog Overlays */}
      <div className="absolute inset-0 grain-overlay opacity-20" />
      <div className="absolute inset-0 gothic-fog" />

      {/* Japanese Symbols Background */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="vertical-text text-neon-red/30 text-5xl tracking-[0.5em] font-serif">
          芸術
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Main Image */}
              <div className="absolute inset-0 bg-secondary-black overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=800&fit=crop"
                  alt="Artist Portrait"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-red/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-deep-red/20" />
              </div>

              {/* Red Glow Frame */}
              <div className="absolute -inset-4 border border-neon-red/30" />
              <div className="absolute -inset-8 border border-neon-red/10" />

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border-t-2 border-l-2 border-neon-red/40" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b-2 border-r-2 border-neon-red/40" />

              {/* Floating Dragon Icon */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-20 h-20"
              >
                <svg viewBox="0 0 60 60" className="w-full h-full text-neon-red">
                  <defs>
                    <linearGradient id="dragonIcon" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B0000" />
                      <stop offset="100%" stopColor="#3B0000" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M30 5L55 22L45 52L15 52L5 22Z"
                    fill="none"
                    stroke="url(#dragonIcon)"
                    strokeWidth="1.5"
                  />
                  <circle cx="30" cy="28" r="6" fill="#8B0000" className="drop-shadow-[0_0_10px_rgba(139,0,0,0.8)]" />
                </svg>
              </motion.div>

              {/* Noise Overlay on Image */}
              <div className="absolute inset-0 grain-overlay opacity-40" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <span className="text-neon-red text-[0.75rem] tracking-[0.4em] mb-6 block font-serif uppercase">
                The Artist
              </span>
              <h2 className="font-gothic text-4xl md:text-5xl font-bold text-soft-white mb-6">
                Marked by <span className="text-gradient-crimson">Dragons</span>
              </h2>
              <div className="w-32 h-[1px] bg-gradient-to-r from-neon-red to-transparent mb-8" />
            </div>

            <div className="space-y-6 text-soft-white/70 font-serif text-lg leading-relaxed">
              <p>
                Every tattoo tells a story. Every needle strike is a <span className="text-neon-red italic">ritual</span>. 
                I don't just ink skin—I carve memories into flesh, transforming pain into something eternal.
              </p>
              <p>
                My art draws from the ancient traditions of Japanese irezumi, the dark mysticism 
                of gothic cathedrals, and the raw power of dragon mythology. Each piece is a 
                fusion of cultures, a bridge between worlds.
              </p>
              <motion.blockquote 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="border-l-2 border-neon-red pl-6 py-2"
              >
                <p className="text-neon-red font-gothic text-xl italic">
                  "INK IS ETERNAL. THE PAIN IS TEMPORARY. THE SYMBOLISM IS FOREVER."
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
                { icon: '◆', title: 'Symbolism', desc: 'Every design carries meaning' },
                { icon: '◆', title: 'Craftsmanship', desc: 'Precision in every line' },
                { icon: '◆', title: 'Tradition', desc: 'Honoring ancient arts' },
                { icon: '◆', title: 'Uniqueness', desc: 'No two pieces alike' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <span className="text-neon-red text-2xl group-hover:text-glow transition-all duration-300">{item.icon}</span>
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