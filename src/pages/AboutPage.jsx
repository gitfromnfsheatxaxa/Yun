import { motion } from 'framer-motion';
import bgImage1 from '../assets/background/1 1.png';

const AboutPage = () => {
  const timeline = [
    { year: '2015', title: 'The Beginning', desc: 'Started my journey in traditional Japanese tattooing' },
    { year: '2017', title: 'First Studio', desc: 'Opened my first underground studio in Shibuya' },
    { year: '2019', title: 'International Recognition', desc: 'Featured in Tattoo Magazine & Tokyo Art Week' },
    { year: '2021', title: 'Dragon Ink Temple', desc: 'Established the current studio sanctuary' },
    { year: '2024', title: 'Master Artist', desc: 'Recognized as a master of neo-traditional irezumi' },
  ];

  const specialties = [
    { icon: '🐉', title: 'Dragon Art', desc: 'Traditional and modern dragon designs' },
    { icon: '🎭', title: 'Oni Masks', desc: 'Demon masks with gothic influences' },
    { icon: '⚔️', title: 'Samurai', desc: 'Warrior imagery and bushido symbolism' },
    { icon: '🌸', title: 'Irezumi', desc: 'Full Japanese traditional style' },
    { icon: '⚫', title: 'Blackwork', desc: 'Bold geometric and organic patterns' },
    { icon: '🏯', title: 'Gothic', desc: 'Cathedral and medieval aesthetics' },
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
            <span className="text-blood-red text-sm tracking-widest mb-4 block">THE ARTIST</span>
            <h1 className="font-gothic text-5xl md:text-7xl font-bold text-soft-white mb-6">
              BEHIND THE <span className="text-neon-crimson">NEEDLE</span>
            </h1>
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
              <p className="text-soft-white/80 font-body text-lg leading-relaxed">
                My name is <span className="text-neon-crimson">Kaito</span>, and for over a decade, 
                I've been carving stories into flesh. What started as a fascination with Japanese 
                mythology evolved into a lifelong devotion to the art of tattooing.
              </p>
              <p className="text-soft-white/80 font-body text-lg leading-relaxed">
                I believe every tattoo is a <span className="text-blood-red">ritual</span> — a sacred 
                exchange between artist and canvas. The pain is not punishment; it's purification. 
                The ink is not pigment; it's <span className="text-neon-crimson">memory made eternal</span>.
              </p>
              <p className="text-soft-white/80 font-body text-lg leading-relaxed">
                My studio is not a business. It's a <span className="text-blood-red">temple</span>. 
                A place where the ancient meets the modern, where darkness and beauty collide, 
                where you leave not just marked, but <span className="text-neon-crimson">transformed</span>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '10+', label: 'Years Experience' },
                  { number: '500+', label: 'Tattoos Completed' },
                  { number: '15', label: 'Countries Served' },
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
            <span className="text-blood-red text-sm tracking-widest mb-4 block">JOURNEY</span>
            <h2 className="font-gothic text-4xl md:text-5xl font-bold text-soft-white mb-4">
              MY <span className="text-neon-crimson">PATH</span>
            </h2>
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
            <span className="text-blood-red text-sm tracking-widest mb-4 block">EXPERTISE</span>
            <h2 className="font-gothic text-4xl md:text-5xl font-bold text-soft-white mb-4">
              SPECIALTIES
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
            <blockquote className="font-gothic text-2xl md:text-4xl text-soft-white leading-relaxed mb-6">
              The body is a canvas. The needle is a brush. The pain is the price of <span className="text-neon-crimson">immortality</span>.
            </blockquote>
            <cite className="text-blood-red font-body tracking-widest not-italic">— Kaito, Dragon Ink</cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;