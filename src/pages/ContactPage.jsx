import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tattooIdea: '',
    placement: '',
    preferredDate: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const studioInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: 'Shibuya District, Tokyo, Japan',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+81 3-1234-5678',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'info@dragonink.jp',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Hours',
      content: 'Tue - Sun: 12PM - 10PM\nMonday: Closed',
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', url: '#' },
    { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', url: '#' },
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', url: '#' },
  ];

  return (
    <div className="relative min-h-screen bg-pure-black overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="smoke-overlay" />
        <div className="dragon-pattern-overlay" />
        <div className="noise-texture" />
      </div>

      {/* Dragon Watermark Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 800" className="w-full h-full">
          <path
            d="M100,400 Q300,100 500,350 Q700,500 900,300 Q1100,150 1350,400"
            fill="none"
            stroke="#8B0000"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blood-red text-sm tracking-widest mb-4 block">CONTACT</span>
            <h1 className="font-gothic text-5xl md:text-7xl font-bold text-soft-white mb-6">
              BEGIN YOUR <span className="text-neon-crimson">JOURNEY</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blood-red to-neon-crimson mx-auto mb-8" />
            <p className="text-soft-white/60 font-body max-w-2xl mx-auto">
              Ready to transform your skin into art? Fill out the form below and we'll 
              get back to you within 48 hours to discuss your vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-charcoal/50 border border-blood-red/20 p-8 relative overflow-hidden"
            >
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-neon-crimson/30" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-neon-crimson/30" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-neon-crimson/30" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-neon-crimson/30" />

              <h2 className="font-gothic text-2xl font-bold text-soft-white mb-8">
                BOOKING REQUEST
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-blood-red/30 border border-neon-crimson/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-neon-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-gothic text-2xl font-bold text-soft-white mb-4">
                    REQUEST RECEIVED
                  </h3>
                  <p className="text-soft-white/60 font-body mb-6">
                    Thank you for contacting us. We'll review your request and get back 
                    to you within 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', tattooIdea: '', placement: '', preferredDate: '', budget: '' });
                    }}
                    className="text-neon-crimson hover:text-blood-red transition-colors font-body tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-soft-white/60 text-sm font-body mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-pure-black border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-soft-white/60 text-sm font-body mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-pure-black border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Tattoo Idea */}
                  <div>
                    <label className="block text-soft-white/60 text-sm font-body mb-2">
                      Tattoo Idea / Description *
                    </label>
                    <textarea
                      name="tattooIdea"
                      value={formData.tattooIdea}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-pure-black border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all resize-none"
                      placeholder="Describe your tattoo idea, style preferences, and any specific elements you want..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Placement */}
                    <div>
                      <label className="block text-soft-white/60 text-sm font-body mb-2">
                        Body Placement *
                      </label>
                      <select
                        name="placement"
                        value={formData.placement}
                        onChange={handleChange}
                        required
                        className="w-full bg-pure-black border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                      >
                        <option value="">Select placement</option>
                        <option value="arm">Arm / Sleeve</option>
                        <option value="chest">Chest</option>
                        <option value="back">Back</option>
                        <option value="leg">Leg</option>
                        <option value="shoulder">Shoulder</option>
                        <option value="forearm">Forearm</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-soft-white/60 text-sm font-body mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full bg-pure-black border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-soft-white/60 text-sm font-body mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-pure-black border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                    >
                      <option value="">Select budget</option>
                      <option value="150-300">$150 - $300</option>
                      <option value="300-600">$300 - $600</option>
                      <option value="600-1000">$600 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000+">$2,000+</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blood-red to-neon-crimson text-soft-white font-gothic tracking-widest hover:shadow-neon-red-strong transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>SENDING...</span>
                      </span>
                    ) : (
                      'SUBMIT REQUEST'
                    )}
                  </button>

                  <p className="text-soft-white/40 text-xs text-center font-body">
                    By submitting, you agree to our terms. A deposit will be required to confirm your appointment.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Studio Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {studioInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4 bg-dark-charcoal/50 border border-blood-red/20 p-6 hover:border-neon-crimson/50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blood-red/20 border border-blood-red/30 flex items-center justify-center text-neon-crimson">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-gothic text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-soft-white/60 font-body text-sm whitespace-pre-line">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-dark-charcoal/50 border border-blood-red/20 p-8">
                <h4 className="font-gothic text-white font-semibold mb-6">FOLLOW OUR WORK</h4>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-pure-black border border-blood-red/30 flex items-center justify-center text-soft-white/60 hover:text-neon-crimson hover:border-neon-crimson transition-all duration-300"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
                <p className="text-soft-white/40 text-xs mt-6 font-body">
                  @dragonink on Instagram for daily updates
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-dark-charcoal/50 border border-blood-red/20 p-8">
                <h4 className="font-gothic text-white font-semibold mb-4">STUDIO LOCATION</h4>
                <div className="aspect-video bg-pure-black border border-blood-red/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-gradient-to-br from-blood-red/20 to-transparent" />
                  </div>
                  <div className="relative z-10 text-center">
                    <svg className="w-12 h-12 text-neon-crimson mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-soft-white/60 font-body text-sm">Shibuya District, Tokyo</p>
                    <p className="text-soft-white/40 text-xs mt-2">Directions available upon booking confirmation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;