import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Get current language from pathname
  const getCurrentLang = () => {
    const segments = location.pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    const supportedLangs = ['ru', 'en', 'uz'];
    if (supportedLangs.includes(firstSegment)) {
      return firstSegment;
    }
    return 'ru';
  };

  const currentLang = getCurrentLang();

  const langNavigate = (path) => {
    navigate(`/${currentLang}${path}`);
  };

  const footerLinks = {
    navigation: [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.about'), path: '/about' },
      { name: t('nav.works'), path: '/works' },
      { name: t('nav.prices'), path: '/prices' },
      { name: t('nav.contact'), path: '/contact' },
    ],
    social: [
      { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
      { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
      { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    ],
  };

  return (
    <footer className="relative bg-pure-black overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-secondary-black to-pure-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay opacity-20" />

      <div className="relative z-10">
        {/* Red Glowing Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-neon-red to-transparent" />

        <div className="px-6 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <button onClick={() => langNavigate('/')} className="flex items-center space-x-3 group">
                <div className="w-12 h-12 relative">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <defs>
                      <linearGradient id="footerLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B0000" />
                        <stop offset="100%" stopColor="#3B0000" />
                      </linearGradient>
                    </defs>
                    <path d="M30 5L55 22L45 52L15 52L5 22Z" fill="none" stroke="url(#footerLogo)" strokeWidth="1.5" />
                    <circle cx="30" cy="28" r="5" fill="#8B0000" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-gothic text-xl font-bold text-soft-white tracking-[0.2em] group-hover:text-neon-red transition-colors duration-500">
                    DRAGON INK
                  </span>
                  <span className="text-[0.65rem] text-neon-red tracking-[0.3em] uppercase font-serif italic">
                    Tattoo Sanctuary
                  </span>
                </div>
              </button>
              <p className="text-soft-white/50 font-serif text-sm leading-relaxed italic">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-gothic text-soft-white font-semibold mb-6 tracking-[0.15em]">{t('footer.navigation')}</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => langNavigate(link.path)}
                      className="text-soft-white/50 hover:text-neon-red transition-all duration-500 text-sm font-serif tracking-wide"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Column */}
            <div>
              <h4 className="font-gothic text-soft-white font-semibold mb-6 tracking-[0.15em]">{t('footer.studio')}</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-neon-red mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-soft-white/50 font-serif text-sm" dangerouslySetInnerHTML={{ __html: t('footer.location.address') }} />
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-neon-red mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-soft-white/50 font-serif text-sm">+81 3-1234-5678</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-neon-red mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-soft-white/50 font-serif text-sm" dangerouslySetInnerHTML={{ __html: t('footer.location.hours.days') + '<br />' + t('footer.location.hours.monday') }} />
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="font-gothic text-soft-white font-semibold mb-6 tracking-[0.15em]">{t('footer.followUs')}</h4>
              <div className="flex items-center space-x-4">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 border border-neon-red/20 flex items-center justify-center text-soft-white/50 hover:text-neon-red hover:border-neon-red/50 transition-all duration-500"
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
              <p className="text-soft-white/30 text-xs mt-6 font-serif italic">
                {t('footer.tag')}
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-neon-red/10">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-soft-white/30 text-sm font-serif">
                {t('footer.copyright', { year: currentYear })}
              </p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-soft-white/30 hover:text-neon-red text-sm font-serif transition-colors">
                  {t('footer.privacy')}
                </a>
                <a href="#" className="text-soft-white/30 hover:text-neon-red text-sm font-serif transition-colors">
                  {t('footer.terms')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;