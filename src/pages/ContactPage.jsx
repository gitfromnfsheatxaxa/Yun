import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import bgImage4 from '../assets/background/5 1.png';
import { sendToTelegram } from '../utils/telegram';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendToTelegram(formData);
      if (success) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          tattooIdea: '',
          placement: '',
          preferredDate: '',
          budget: '',
        });
      }
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const studioInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('contact.studioInfo.0.title'),
      content: t('contact.studioInfo.0.content'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: t('contact.studioInfo.1.title'),
      content: t('contact.studioInfo.1.content'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('contact.studioInfo.2.title'),
      content: t('contact.studioInfo.2.content'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('contact.studioInfo.3.title'),
      content: t('contact.studioInfo.3.content'),
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', url: '#' },
    { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', url: '#' },
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', url: '#' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-image-wrapper">
          <img
            src={bgImage4}
            alt="Background"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-image-overlay" />
      </div>

      {/* Atmospheric Effects */}
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
            <span className="text-blood-red text-sm tracking-widest mb-4 block">{t('contact.hero.title')}</span>
            <h1 className="font-gothic text-5xl md:text-7xl font-bold text-soft-white mb-6" dangerouslySetInnerHTML={{ __html: t('contact.hero.heading') }} />
            <div className="w-24 h-0.5 bg-gradient-to-r from-blood-red to-neon-crimson mx-auto mb-8" />
            <p className="text-soft-white/60 font-body max-w-2xl mx-auto">
              {t('contact.hero.subtitle')}
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
              className="bg-dark-charcoal/80 backdrop-blur-sm border border-blood-red/20 p-8 relative overflow-hidden"
            >
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-neon-crimson/30" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-neon-crimson/30" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-neon-crimson/30" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-neon-crimson/30" />

              <h2 className="font-gothic text-2xl font-bold text-soft-white mb-8">
                {t('contact.form.title')}
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
                    {t('contact.success.title')}
                  </h3>
                  <p className="text-soft-white/60 font-body mb-6">
                    {t('contact.success.subtitle')}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', tattooIdea: '', placement: '', preferredDate: '', budget: '' });
                    }}
                    className="text-neon-crimson hover:text-blood-red transition-colors font-body tracking-wider"
                  >
                    {t('contact.success.another')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-soft-white/60 text-sm font-body mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-pure-black/80 backdrop-blur-sm border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                        placeholder={t('contact.form.name')}
                      />
                    </div>

                    {/* Phone / Telegram */}
                    <div>
                      <label className="block text-soft-white/60 text-sm font-body mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-pure-black/80 backdrop-blur-sm border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                        placeholder="@telegram or +1234567890"
                      />
                    </div>
                  </div>

                  {/* Tattoo Idea */}
                  <div>
                    <label className="block text-soft-white/60 text-sm font-body mb-2">
                      {t('contact.form.tattooIdea')}
                    </label>
                    <textarea
                      name="tattooIdea"
                      value={formData.tattooIdea}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-pure-black/80 backdrop-blur-sm border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all resize-none"
                      placeholder={t('contact.form.placeholder.tattooIdea')}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Placement */}
                    <div>
                      <label className="block text-soft-white/60 text-sm font-body mb-2">
                        {t('contact.form.placement')}
                      </label>
                      <select
                        name="placement"
                        value={formData.placement}
                        onChange={handleChange}
                        required
                        className="w-full bg-pure-black/80 backdrop-blur-sm border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                      >
                        <option value="">{t('contact.form.select.placement.arm')}</option>
                        <option value="arm">{t('contact.form.select.placement.arm')}</option>
                        <option value="chest">{t('contact.form.select.placement.chest')}</option>
                        <option value="back">{t('contact.form.select.placement.back')}</option>
                        <option value="leg">{t('contact.form.select.placement.leg')}</option>
                        <option value="shoulder">{t('contact.form.select.placement.shoulder')}</option>
                        <option value="forearm">{t('contact.form.select.placement.forearm')}</option>
                        <option value="other">{t('contact.form.select.placement.other')}</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-soft-white/60 text-sm font-body mb-2">
                        {t('contact.form.preferredDate')}
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full bg-pure-black/80 backdrop-blur-sm border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-soft-white/60 text-sm font-body mb-2">
                      {t('contact.form.budget')}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-pure-black/80 backdrop-blur-sm border border-blood-red/30 px-4 py-3 text-soft-white font-body focus:border-neon-crimson focus:outline-none focus:ring-1 focus:ring-neon-crimson transition-all"
                    >
                      <option value="">{t('contact.form.select.budget.150')}</option>
                      <option value="150-300">{t('contact.form.select.budget.150')}</option>
                      <option value="300-600">{t('contact.form.select.budget.300')}</option>
                      <option value="600-1000">{t('contact.form.select.budget.600')}</option>
                      <option value="1000-2000">{t('contact.form.select.budget.1000')}</option>
                      <option value="2000+">{t('contact.form.select.budget.2000')}</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full py-4 font-gothic tracking-widest text-soft-white disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden bg-pure-black/90"
                  >
                    {/* Outer Glow Border */}
                    <div className="absolute inset-0 border-2 border-blood-red/30 group-hover:border-neon-crimson/60 transition-all duration-300" />
                    
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-1 bg-gradient-to-r from-blood-red/20 via-neon-crimson/30 to-blood-red/20 bg-[length:200%_100%] transition-all duration-700 group-hover:bg-[length:100%_100%] animate-gradient" />
                    
                    {/* Decorative Corner Lines */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blood-red/40 group-hover:border-neon-crimson/80 transition-all duration-300" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blood-red/40 group-hover:border-neon-crimson/80 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blood-red/40 group-hover:border-neon-crimson/80 transition-all duration-300" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blood-red/40 group-hover:border-neon-crimson/80 transition-all duration-300" />
                    
                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blood-red/10 to-neon-crimson/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Background Pattern - Diagonal Lines */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300" 
                         style={{
                           backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 0, 0, 0.3) 10px, rgba(139, 0, 0, 0.3) 20px)'
                         }} 
                    />
                    
                    {/* Button Content */}
                    <span className="relative flex items-center justify-center space-x-3">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5 text-neon-crimson" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span className="text-sm">{t('contact.form.sending')}</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 text-blood-red group-hover:text-neon-crimson transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span className="text-shadow-glow">{t('contact.form.submit')}</span>
                          <svg className="w-5 h-5 text-blood-red group-hover:text-neon-crimson transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-soft-white/40 text-xs text-center font-body">
                    {t('contact.form.agree')}
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
                    className="flex items-start space-x-4 bg-dark-charcoal/80 backdrop-blur-sm border border-blood-red/20 p-6 hover:border-neon-crimson/50 transition-colors duration-300"
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
              <div className="bg-dark-charcoal/80 backdrop-blur-sm border border-blood-red/20 p-8">
                <h4 className="font-gothic text-white font-semibold mb-6">{t('contact.studio.follow')}</h4>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-pure-black/80 border border-blood-red/30 flex items-center justify-center text-soft-white/60 hover:text-neon-crimson hover:border-neon-crimson transition-all duration-300"
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
              <div className="bg-dark-charcoal/80 backdrop-blur-sm border border-blood-red/20 p-8">
                <h4 className="font-gothic text-white font-semibold mb-4">{t('contact.studio.map.title')}</h4>
                <div className="aspect-video bg-pure-black/80 backdrop-blur-sm border border-blood-red/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-gradient-to-br from-blood-red/20 to-transparent" />
                  </div>
                  <div className="relative z-10 text-center">
                    <svg className="w-12 h-12 text-neon-crimson mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-soft-white/60 font-body text-sm">{t('contact.studio.map.location')}</p>
                    <p className="text-soft-white/40 text-xs mt-2">{t('contact.studio.map.directions')}</p>
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