import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgImage3 from '../assets/background/6 1.png';

const pricingTiers = [
  {
    id: 1,
    title: 'Small Tattoo',
    description: 'Simple designs, symbols, or text',
    price: 'From $150',
    duration: '1-2 hours',
    features: [
      'Up to 4 inches',
      'Single color or minimal shading',
      'Simple symbols or lettering',
      'One session',
    ],
    popular: false,
  },
  {
    id: 2,
    title: 'Medium Tattoo',
    description: 'Detailed pieces with more complexity',
    price: 'From $400',
    duration: '3-5 hours',
    features: [
      'Up to 8 inches',
      'Multiple colors',
      'Shading and depth',
      'Dragon scales, floral elements',
    ],
    popular: true,
  },
  {
    id: 3,
    title: 'Large Piece',
    description: 'Statement pieces with full detail',
    price: 'From $800',
    duration: '6+ hours',
    features: [
      '8+ inches',
      'Full color or blackwork',
      'Intricate detail',
      'Multiple sessions may apply',
    ],
    popular: false,
  },
  {
    id: 4,
    title: 'Full Sleeve',
    description: 'Complete arm transformation',
    price: 'From $3,500',
    duration: '20-30 hours',
    features: [
      'Shoulder to wrist',
      'Cohesive design flow',
      'Multiple sessions',
      'Custom artwork included',
    ],
    popular: false,
  },
];

const additionalServices = [
  { name: 'Custom Design Sketch', price: '$100-$300', desc: 'Original artwork creation' },
  { name: 'Consultation Session', price: '$50', desc: 'Fully refundable with deposit' },
  { name: 'Touch-Up Session', price: '$75/hour', desc: 'After healing period' },
  { name: 'Cover-Up Work', price: 'Quote required', desc: 'Assessment needed' },
];

const PricesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-image-wrapper">
          <img 
            src={bgImage3} 
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
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blood-red text-sm tracking-widest mb-4 block">INVESTMENT</span>
            <h1 className="font-gothic text-5xl md:text-7xl font-bold text-soft-white mb-6">
              PRICING & <span className="text-neon-crimson">PACKAGES</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blood-red to-neon-crimson mx-auto mb-8" />
            <p className="text-soft-white/60 font-body max-w-2xl mx-auto">
              Quality tattooing is an investment in yourself. Every price reflects the hours of 
              skill, the precision of execution, and the permanence of the art.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PricingCards */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-dark-charcoal/80 backdrop-blur-sm border ${
                  tier.popular ? 'border-neon-crimson' : 'border-blood-red/20'
                } p-8 ${tier.popular ? 'transform scale-105' : ''}`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blood-red to-neon-crimson text-white text-xs font-gothic tracking-wider px-4 py-2">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blood-red/30" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blood-red/30" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blood-red/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blood-red/30" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-gothic text-xl font-bold text-soft-white mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-soft-white/50 text-sm mb-6">{tier.description}</p>

                  <div className="mb-6">
                    <span className="font-gothic text-3xl font-bold text-neon-crimson">
                      {tier.price}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-soft-white/40 text-sm mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{tier.duration}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-soft-white/70 text-sm">
                        <span className="text-neon-crimson mt-0.5">◆</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 font-gothic text-sm tracking-wider transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blood-red to-neon-crimson text-white hover:shadow-neon-red'
                        : 'border border-blood-red/50 text-soft-white hover:bg-blood-red/20'
                    }`}
                  >
                    BOOK NOW
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-gothic text-3xl md:text-4xl font-bold text-soft-white mb-4">
              ADDITIONAL <span className="text-neon-crimson">SERVICES</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blood-red to-neon-crimson mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between bg-dark-charcoal/80 backdrop-blur-sm border border-blood-red/20 p-6 hover:border-neon-crimson/50 transition-colors duration-300"
              >
                <div>
                  <h4 className="font-gothic text-lg font-semibold text-soft-white mb-1">
                    {service.name}
                  </h4>
                  <p className="text-soft-white/50 text-sm">{service.desc}</p>
                </div>
                <span className="font-gothic text-xl font-bold text-neon-crimson">
                  {service.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-deep-crimson/20 to-blood-red/10 border border-blood-red/30 p-8 relative overflow-hidden backdrop-blur-sm"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-neon-crimson/30" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-neon-crimson/30" />

            <div className="relative z-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blood-red/30 border border-neon-crimson/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-neon-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-gothic text-xl font-bold text-soft-white mb-3">
                    IMPORTANT INFORMATION
                  </h3>
                  <p className="text-soft-white/70 font-body leading-relaxed mb-4">
                    Every tattoo is unique. Final pricing depends on complexity, size, placement, 
                    and the level of detail. The prices listed are starting estimates. During 
                    consultation, we'll discuss your vision and provide an accurate quote.
                  </p>
                  <p className="text-soft-white/60 font-body text-sm">
                    A non-refundable deposit is required to secure your appointment. This deposit 
                    will be applied toward your final price.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-gothic text-3xl md:text-4xl font-bold text-soft-white mb-6">
              READY TO BEGIN YOUR <span className="text-neon-crimson">TRANSFORMATION</span>?
            </h2>
            <p className="text-soft-white/60 font-body mb-8 max-w-xl mx-auto">
              Book a consultation to discuss your ideas and receive a personalized quote.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blood-red to-neon-crimson text-soft-white font-gothic tracking-widest hover:shadow-neon-red-strong transition-all duration-300"
            >
              <span>SCHEDULE CONSULTATION</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricesPage;